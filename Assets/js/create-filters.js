console.log('Create Filters')
const saveFilter = document.querySelector('.save-filter');
const formFilters = document.querySelector('#form-filters')
formFilters.onsubmit = (e) => {
    e.preventDefault();
    addFilters();
}
saveFilter.addEventListener('click', (eClick) => {
    eClick.preventDefault();
    addFilters();
});

function addFilters() {
    if (document.querySelector('.create-filters .typeFilter-1').classList.contains('option-active-gj8')) {
        let typeUploadFilter = '';
        let typeCategoryFilter = '';
        let statusFilter = '';
        let mapCategories = 'base'
        let valueUnique = document.querySelector('.create-filters .radio-content.type-unique input')
        let valueList = document.querySelector('.create-filters .radio-content.type-list textarea')
        if (document.querySelector('.create-filters .typeUpload-1').classList.contains('option-active-gj8')) {
            typeUploadFilter = valueUnique.value
        } else if (document.querySelector('.create-filters .typeUpload-2').classList.contains('option-active-gj8')) {
            typeUploadFilter = valueList.value.trim()
            let lines = valueList.value.split('\n');
            let arrTypeUploadFilter = [];
            for (let i = 0; i < lines.length; i++) {
                if (lines[i] != '') {
                    arrTypeUploadFilter.push(lines[i].trim())
                }
            }
            typeUploadFilter = arrTypeUploadFilter
        }
        if (document.querySelector('.create-filters .typeCategorie-1').classList.contains('option-active-gj8')) {
            typeCategoryFilter = 'categoria'
        } else if (document.querySelector('.create-filters .typeCategorie-2').classList.contains('option-active-gj8')) {
            typeCategoryFilter = 'subcategoria'
            mapCategories = [...document.querySelectorAll('.create-filters .chevrondown-gj8 .chevrondown-radio-button')].filter(btn => btn.classList.contains('active'))
        }
        if (document.querySelector('.create-filters .switch-gj8').classList.contains('off')) {
            statusFilter = 'inactive'
        } else {
            statusFilter = 'active'
        }
        // console.log(statusFilter)
        if (mapCategories != 'base') {
            // console.log(message)
            if (mapCategories[0].attributes) {
                mapCategories = mapCategories[0].attributes[1].textContent.trim()
            }
        }

        
        if (typeUploadFilter == '') {
            createToast('warning', 'Se requiere colocar nombre de la ' + typeCategoryFilter)
        } else {
            let categoriesRepeat = document.querySelector('.categories-repeat');
            let req = (window.XMLHttpRequest) ? new XMLHttpRequest() : ActiveXObject('Microsoft.XMLHTTP')
            let url = BASE_URL + 'Filter/setFilter'
            req.open("POST", url, true);
            function datosFormulario() {
                let datos = '';
                datos += 'nombre=' + (Array.isArray(typeUploadFilter) ? JSON.stringify(typeUploadFilter) : typeUploadFilter);
                datos += '&tipo=' + typeCategoryFilter;
                datos += '&estado=' + statusFilter;
                datos += '&idParent=' + mapCategories;
                return datos;
            }
            // console.log(datosFormulario())
            // console.log(typeUploadFilter)
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.send(datosFormulario())
            req.onreadystatechange = (e) => {
                if (req.readyState == 4 && req.status == 200) {
                    // console.log(req.response)
                    let data = JSON.parse(req.responseText)
                    if (data.status) {
                        createToast('success', data.msg)
                        valueUnique.value = ''
                        valueList.value = '';
                        [...document.querySelectorAll('.breadcumb.breadcumb-categories .links .d-flex.fadeInLeft')].map(item => {
                            item.remove()
                        });
                        loadDataFilter();
                        loadTreeFilter();
                        
                    } else {
                        createToast('warning', data.msg)
                        if (data.data) {
                            console.log(data.data)
                            for (let repeat of data.data) {
                                for (let x of repeat) {
                                    // console.log(x.nombre)
                                    categoriesRepeat.querySelector('.d-flex').innerHTML += `<div class="tag-pink"> ${ x.nombre } </div>`
                                    categoriesRepeat.style.display = 'block'
                                }
                            }
                            let tagsPinkFilters = [...categoriesRepeat.querySelectorAll('.tag-pink')];
                            // setTimeout(() => {
                                // console.log('SetTimeout')
                                for (let repeat of data.data) {
                                    for (let x of repeat) {
                                        console.log(x.nombre)
                                        // categoriesRepeat.querySelector('.d-flex').innerHTML += `<div class="tag-pink"> ${ x.nombre } </div>`
                                        // categoriesRepeat.style.display = 'block'
                                        // console.log(tagsPinkFilters)
                                        tagsPinkFilters.map(tag => {
                                            tag.addEventListener('click', (e) => {
                                                e.preventDefault();
                                                // console.log(tag.textContent.trim().toLowerCase())
                                                tag.remove();
                                                // console.log(valueList.value)
                                                valueList.value = valueList.value.toLowerCase().replace(tag.textContent.trim().toLowerCase(),'').trim()
                                                // console.log(tagsPinkFilters.length)
                                                // if (tagsPinkFilters.length == 0) {
                                                //     categoriesRepeat.style.display = 'none'
                                                // }
                                            })
                                        })
                                    }
                                }
                            // }, 300);
                        }

                    }
                }
            }
            
        }







    } else if (document.querySelector('.typeFilter-2').classList.contains('option-active-gj8')) {
        console.log('Enviando localizaciones')
    }
}
