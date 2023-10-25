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
            typeUploadFilter = valueUnique.value.trim()
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
        // 
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
            } else {
                mapCategories = ''
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
                        document.querySelector('#categories-tree-main .chevrondown-radio-button.not').classList.add('active')
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
        // Registrando según: País o División administrativa
        if (document.querySelector('.typeLocation-1').classList.contains('option-active-gj8')) {
            // País
            console.log('Registrando País')
            let typeCountry = '';
            let countryUnique = document.querySelector('.radio-content.locations .type-unique-country input')
            let countryList = document.querySelector('.radio-content.locations .type-list-country textarea')
            let statusFilter = ''
            if (document.querySelector('.create-filters .typeUploadLocations-1').classList.contains('option-active-gj8')) {
                // Registro único
                typeCountry = countryUnique.value.trim()
            } else if (document.querySelector('.create-filters .typeUploadLocations-2').classList.contains('option-active-gj8')) { 
                // Registro múltiple
                let lines = countryList.value.split('\n');
                let arrTypeUploadFilter = [];
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i] != '') {
                        arrTypeUploadFilter.push(lines[i].trim())
                    }
                }
                typeCountry = arrTypeUploadFilter
            }
            if (document.querySelector('.create-filters .switch-gj8').classList.contains('off')) {
                statusFilter = 'inactive'
            } else {
                statusFilter = 'active'
            }
            let req = (window.XMLHttpRequest) ? new XMLHttpRequest() : ActiveXObject('Microsoft.XMLHTTP')
            let url = BASE_URL + 'Filter/setCountry'
            req.open("POST", url, true);
            function datosFormulario() {
                let datos = '';
                datos += 'name=' + (Array.isArray(typeCountry) ? JSON.stringify(typeCountry) : typeCountry);
                datos += '&status=' + statusFilter
                return datos;
            }
            console.log(datosFormulario())
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.send(datosFormulario())
            req.onreadystatechange = (e) => {
                if (req.readyState == 4 && req.status == 200) {
                    console.log(req.response)
                    let data = JSON.parse(req.responseText)
                    if (data.status) {
                        countryUnique.value = ''
                        countryList.value = ''
                        createToast('success', data.msg);
                        getCountryList()
                    } else {
                        createToast('warning', data.msg)
                    }
                }
            }


        } else if (document.querySelector('.typeLocation-2').classList.contains('option-active-gj8')) {
            // División administrativa
            console.log('Registrando división administrativa')
            let typeUploadFilter = '';
            let typeLocation = 'pais';
            let statusFilter = '';
            let mapCategories = 'base'
            let country = ''
            let divition = ''
            let valueUnique = document.querySelector('.create-filters .radio-content.locations .type-unique-location input')
            let valueList = document.querySelector('.create-filters .radio-content.type-list-location textarea')
            // let countryEl = document.querySelector('.create-filters .radio-content.type-country input')
            let countrySelect = document.querySelector('#select_country_current')
            let divitionSelect = document.querySelector('#select_divition_current')
            if (document.querySelector('.create-filters .typeUploadLocations-1').classList.contains('option-active-gj8')) {
                typeUploadFilter = valueUnique.value.trim()
            } else if (document.querySelector('.create-filters .typeUploadLocations-2').classList.contains('option-active-gj8')) {
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
            if (divitionSelect.textContent.toLowerCase().trim() != 'país') {
                typeLocation = divitionSelect.textContent.toLowerCase().trim()
            }
            // if (document.querySelector('.create-filters .typeLocation-1').classList.contains('option-active-gj8')) {
            //     typeLocation = 'pais'
            //     country = countryEl.value.trim()
            //     divition = 'NULL'
            // } else if (document.querySelector('.create-filters .typeLocation-2').classList.contains('option-active-gj8')) {
            //     typeLocation = 'division'
            //     country = countrySelect.textContent.trim();
            //     divition = divitionSelect.textContent.trim();
            //     mapCategories = [...document.querySelectorAll('.create-filters .chevrondown-gj8#locations-tree-main .chevrondown-radio-button')].filter(btn => btn.classList.contains('active'))
            // }
            if (document.querySelector('.create-filters .switch-gj8').classList.contains('off')) {
                statusFilter = 'inactive'
            } else {
                statusFilter = 'active'
            }
            mapCategories = [...document.querySelectorAll('.create-filters .chevrondown-gj8#locations-tree-main .chevrondown-radio-button')].filter(btn => btn.classList.contains('active'))
            if (mapCategories[0].attributes) {
                mapCategories = mapCategories[0].attributes[1].textContent.trim()
            } else {
                mapCategories = ''
            }
            if (mapCategories != 'base') {
                
            }
    
            let req = (window.XMLHttpRequest) ? new XMLHttpRequest() : ActiveXObject('Microsoft.XMLHTTP')
            let url = BASE_URL + 'Filter/setLocation'
            req.open("POST", url, true);
            function datosFormulario() {
                let datos = '';
                datos += 'name=' + (Array.isArray(typeUploadFilter) ? JSON.stringify(typeUploadFilter) : typeUploadFilter);
                datos += '&type=' + typeLocation;
                datos += '&status=' + statusFilter;
                datos += '&country=' + countrySelect.textContent.trim();
                // datos += '&divition=' + divitionSelect.textContent.trim();
                datos += '&idParent=' + mapCategories;
                return datos;
            }
            console.log(datosFormulario())
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.send(datosFormulario())
            req.onreadystatechange = (e) => {
                if (req.readyState == 4 && req.status == 200) {
                    console.log(req.response)
                    let data = JSON.parse(req.responseText)
                    if (data.status) {
                        createToast('success', data.msg)
                        valueUnique.value = ''
                        valueList.value = '';
                        countrySelect.textContent = 'País'
                        divitionSelect.textContent = 'España';
                        [...document.querySelectorAll('.breadcumb.breadcumb-locations .links .d-flex.fadeInLeft')].map(item => {
                            item.remove();
                        });
                        loadLocationsData();
                        loadLocationsTree();
                        document.querySelector('#locations-tree-main .chevrondown-radio-button.not').classList.add('active')
                    } else {
                        createToast('warning', data.msg)
                    }
                }
            }
        }
        
    }
}
