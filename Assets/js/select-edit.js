console.log('Select Edit JS')
function selectsGj8() {
    'use strict';

    const selects = [...document.querySelectorAll('.select-gj8')];
    selects.map((select, index) => {
        let title = select.querySelector('.select-gj8__title')
        let titleCurrent = title.querySelector('.select-gj8__title__current')
        let content = select.querySelector('.select-gj8__content')
        let arrow = title.querySelector('.select-gj8__title__arrow')
        let options = [...content.querySelectorAll('.select-gj8__option')];

        title.onclick = (e) => {
            e.preventDefault();
            content.classList.toggle('select-gj8__content--active')
            arrow.classList.toggle('select-gj8__title__arrow--active')
        };
        // Reiniciar opciones activadas
        function reloadOptions() {
            options.map(x => { if (x.classList.contains('select-gj8__option--active')) x.classList.remove('select-gj8__option--active')  } )
        }
        options.map((option, iOption) => {
            option.onclick = (e) => {
                e.preventDefault();
                let name = select.classList.contains('select-gj8--edit') ? option.querySelector('.select-gj8__option__name__current').textContent.trim() : option.textContent.trim()
                // Condicional en caso de usar el select 'edit'
                if (!content.classList.contains('select-gj8__content--editing')) {
                    titleCurrent.textContent = name
                    content.classList.remove('select-gj8__content--active')
                    arrow.classList.remove('select-gj8__title__arrow--active')
                    reloadOptions()
                    option.classList.add('select-gj8__option--active');
                }
                if (select.classList.contains('select-country')) {
                    let countryCurrent = document.querySelector('.select-gj8__content__subtitle__current')
                    countryCurrent.textContent = name
                }
            };
        });

        // Función para verificar si ya existe un registro dentro la BBDD
        function dataRepeat(data) {
            let nameCurrents = [...select.querySelectorAll('.select-gj8__option__name__current')];
            if (nameCurrents.filter(x => x.textContent.toLowerCase().trim() == data.toLowerCase().trim()).length >= 1) {
                return true
            } else {
                return false
            }
        }

        // Función para validar campos vacíos
        function validationFields(input) {
            return input.trim() == '' ? true : false
        }

        if (select.classList.contains('select-gj8--edit')) {
            // Acción more_vert
            let triggerMoreVert = select.querySelector('.select-gj8__label__action')
            let contentEditing = select.querySelector('.select-gj8__content')
            // Función para editar
            function selectEditItem() {
                let triggersItemEdit = [...select.querySelectorAll('.select-gj8__option__trigger')]
                triggersItemEdit.map(trigger => {
                    let name = trigger.parentElement.querySelector('.select-gj8__option__name__current')
                    let input = trigger.parentElement.querySelector('.select-gj8__option__name__input')
                    let allSettings = [...document.querySelectorAll('.select-gj8__option__settings--active')]
                    let settings = trigger.parentElement.parentElement.querySelector('.select-gj8__option__settings')
                    // Acción de editar
                    let edit = settings.children[0] // edit item
                    let del = settings.children[1] // delete item
                    let saveEdit = trigger.nextElementSibling // botón submit de editar
                    let itemOption = trigger.parentElement.parentElement // opción seleccionada

                    trigger.onclick = (e) => {
                        e.preventDefault();
                        
                        settings.classList.toggle('select-gj8__option__settings--active')
                        // Quitando las otras configuraciones (settings) activas
                        allSettings.map(config => {
                            if (config.classList.contains('select-gj8__option__settings--active')) {
                                config.classList.remove('select-gj8__option__settings--active')
                            }
                        });

                        // Abriendo sección para editar
                        edit.onclick = (e) => {
                            e.preventDefault();
                            settings.classList.toggle('select-gj8__option__settings--active')
                            trigger.classList.add('select-gj8__option__trigger--hide')
                            name.classList.add('select-gj8__option__name__current--hide')
                            input.classList.add('select-gj8__option__name__input--active')
                            input.disabled = false
                            saveEdit.classList.add('select-gj8__btn--option--active')
                            // Guardando edición
                            input.onkeyup = (e) => {
                                console.log(e.key)
                                if (e.key == 'Enter') {
                                    editDivition()
                                }
                            }
                            saveEdit.onclick = (e) => {
                                // Acá todo el proceso para editar un registro
                                e.preventDefault();
                                console.log(input.value)
                                editDivition()
                                
                            }
                            function editDivition() {
                                let id = edit.attributes[1].textContent
                                let req = (window.XMLHttpRequest) ? new XMLHttpRequest() : ActiveXObject('Microsoft.XMLHTTP')
                                let url = BASE_URL + 'Filter/updateAdministrativeDivition'
                                req.open("POST", url, true);
                                function datosFormulario() {
                                    let datos = '';
                                    datos += '&id=' + id.trim();
                                    datos += '&nombre=' + input.value.trim();
                                    return datos;
                                }
                                req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                                req.send(datosFormulario())
                                req.onreadystatechange = (e) => {
                                    if (req.readyState == 4 && req.status == 200) {
                                        console.log(req.response)
                                        if (req.response) {
                                            createToast('success')
                                            name.textContent = input.value
                                            input.disabled = true
                                            saveEdit.classList.remove('select-gj8__btn--option--active')
                                            trigger.classList.remove('select-gj8__option__trigger--hide')
                                            name.classList.remove('select-gj8__option__name__current--hide')
                                            input.classList.remove('select-gj8__option__name__input--active')
                                        } else {
                                            createToast('warning','Se requiere llenar los campos')
                                        }
                                    }
                                }
                            }
                        }
                        // Eliminando item
                        del.onclick = (e) => {
                            e.preventDefault();
                            if (confirm('¿Está seguro de eliminar este registro?')) {
                                // Acá todo el proceso para eliminar el item o la opción seleccionada
                                let id = del.attributes[1].textContent
                                let urlDelDivition = BASE_URL + 'Filter/delAdministrativeDivition/' + id
                                async function fetchFilterJSON() {
                                    const response = await fetch(urlDelDivition);
                                    const divitions = await response.json();
                                    return divitions;
                                }
                                fetchFilterJSON().then(res => {
                                    if (res) {
                                        itemOption.remove()
                                        createToast('success')
                                    } else {
                                        createToast('warning','Ha ocurrido un error. . .')
                                    }
                                })
                            }
                        }
                    }
                    
                })
            }
            selectEditItem() // Función para ejecutar las iteraciónes de los nuevos registros
            triggerMoreVert.onclick = (e) => {
                e.preventDefault();
                reloadOptions();
                arrow.classList.add('select-gj8__title__arrow--active')
                let optionEdit = triggerMoreVert.querySelector('.select-gj8__label__action__text')
                let iconEdit = triggerMoreVert.querySelector('.select-gj8__label__action__icon')
                let formAdd = content.querySelector('.select-gj8__content__add__form')
                let input = content.querySelector('.select-gj8__content__add__input')
                let btnAdd = formAdd.querySelector('.select-gj8__btn--add')
                let boxOptions = content.querySelector('.select-gj8__content__options')
                if (!content.classList.contains('select-gj8__content--active')) {
                    content.classList.add('select-gj8__content--active')
                }
                if (optionEdit.textContent.toLowerCase() == 'editar') {
                    optionEdit.textContent = optionEdit.textContent.toLowerCase().replace('editar', 'Cerrar')
                    iconEdit.textContent = 'close'
                    titleCurrent.textContent = 'Modo edición'
                } else {
                    optionEdit.textContent = optionEdit.textContent.toLowerCase().replace('cerrar', 'Editar')
                    iconEdit.textContent = 'drive_file_rename_outline'
                    titleCurrent.textContent = 'Seleccione una opción:'
                }
                contentEditing.classList.toggle('select-gj8__content--editing')
                // Acción de agregar registro
                input.onkeyup = (e) => {
                    if (e.key == 'Enter') {
                        addDivition();
                    }
                }
                btnAdd.onclick = (e) => {
                    e.preventDefault();
                    addDivition();
                }
                function addDivition() {
                    if (validationFields(input.value)) {
                        createToast('warning','Se requiere llenar los campos')
                    } else {
                        // Condicional para verificar que no hayan registro repetidos
                        if (dataRepeat(input.value)) {
                            createToast('warning','Este registro ya existe')
                        } else {
                            // START AJAX
                            let req = (window.XMLHttpRequest) ? new XMLHttpRequest() : ActiveXObject('Microsoft.XMLHTTP')
                            let url = BASE_URL + 'Filter/setAdministrativeDivition'
                            req.open("POST", url, true);
                            function datosFormulario() {
                                let datos = '';
                                datos += '&administrativeDivition=' + input.value.trim();
                                return datos;
                            }
                            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                            req.send(datosFormulario())
                            req.onreadystatechange = (e) => {
                                if (req.readyState == 4 && req.status == 200) {
                                    console.log(req.response)
                                    let data = JSON.parse(req.responseText)
                                    if (data.status) {
                                        let newOption = document.createElement('div')
                                        let item = /* html */ `
                                        <div class="select-gj8__option__edit">
                                            <div class="select-gj8__option__name">
                                                <i class="material-icons">drag_indicator</i>
                                                <div class="select-gj8__option__name__current"> ${ input.value.trim() } </div>
                                                <input type="text" required disabled class="select-gj8__option__name__input" value="${ input.value.trim() }">
                                            </div>
                                            <i class="material-icons select-gj8__option__trigger">more_vert</i>
                                            <button class="select-gj8__btn select-gj8__btn--option">
                                                <i class="material-icons-outlined">done</i>
                                            </button>
                                        </div>
                                        <div class="select-gj8__option__settings">
                                            <div class="select-gj8__option__settings__item">
                                                <i class="material-icons-outlined">drive_file_rename_outline</i>
                                            </div>
                                            <div class="select-gj8__option__settings__item">
                                                <i class="material-icons-outlined">delete</i>
                                            </div>
                                        </div>`
                                        newOption.classList.add('select-gj8__option')
                                        newOption.innerHTML = item
                                        boxOptions.appendChild(newOption)
                                        input.value = ''
                                        selectsGj8()
                                        selectEditItem()
                                        createToast('success', data.msg)
                                    } else {
                                        createToast('warning', data.msg)
                                    }
                                }
                            }
                            // END AJAX
                        }
                    }
                }
            }
        }   
        // Fin de la instrucción
    });
    
}
selectsGj8()
// Listado de divisiones
let urlGetDivition = BASE_URL + 'Filter/getAdministrativeDivition'
let boxOptions = document.querySelector('#select-gj8__administrative_divition')
async function fetchFilterJSONDivition() {
    const response = await fetch(urlGetDivition);
    const divitions = await response.json();
    return divitions;
}
fetchFilterJSONDivition().then(divitions => {
    console.log(divitions)
    boxOptions.innerHTML = ``
    divitions.map(divition => {
        boxOptions.innerHTML += /*html*/ `
        <div class="select-gj8__option">
            <div class="select-gj8__option__edit">
                <div class="select-gj8__option__name">
                    <i class="material-icons">drag_indicator</i>
                    <div class="select-gj8__option__name__current">${divition.division}</div>
                    <input type="text" disabled class="select-gj8__option__name__input"
                        value="${divition.division}" required>
                </div>
                <i class="material-icons select-gj8__option__trigger">more_vert</i>
                <button class="select-gj8__btn select-gj8__btn--option">
                    <i class="material-icons-outlined">done</i>
                </button>
            </div>

            <div class="select-gj8__option__settings">
                <div class="select-gj8__option__settings__item" item="${divition.id}">
                    <i class="material-icons-outlined">drive_file_rename_outline</i>
                </div>
                <div class="select-gj8__option__settings__item" item="${divition.id}">
                    <i class="material-icons-outlined">delete</i>
                </div>
            </div>
        </div>`
    })
    selectsGj8();
});
// Listado de países
let boxCountrys = document.querySelector('#select-gj8__countrys')
async function fetchFilterJSONCountrys() {
    const response = await fetch(BASE_URL + 'Filter/getCountrys');
    const countrys = await response.json();
    return countrys;
}
fetchFilterJSONCountrys().then(countrys => {
    console.log(countrys)
    boxCountrys.innerHTML = '';
    // function eliminarRepetidos(array) {
    //     return Array.from(new Set(array));
    // }
    let arrCountrys = []
    countrys.map(country => {
        arrCountrys.push(country.pais)
    })
    function deleteRepeat(arr) {
        return Array.from(new Set(arr));
    }
    let data = deleteRepeat(arrCountrys);
    data.map(item => {
        boxCountrys.innerHTML += /* html */`
        <div class="select-gj8__option">${ item }</div>`
    })
})