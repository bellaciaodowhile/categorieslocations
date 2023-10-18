console.log('Radio Wrapper')
const radiosOptions = [...document.querySelectorAll('.radio-trigger-gj8')]
let inputCurrent = 'Categoría';
radiosOptions.map((option, index) => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Option')
        let radioWrapper = option.parentElement;
        let tagsOptions = [...radioWrapper.querySelectorAll('.radio-trigger-gj8')]
        let radiosContents = [...document.querySelectorAll('.radio-content')];
        tagsOptions.map(x => {
            if (x.contains(e.target)) {
                if (!x.classList.contains('option-active-gj8')) {
                    x.classList.add('option-active-gj8')
                }
            } else {
                if (x.classList.contains('option-active-gj8')) {
                    x.classList.remove('option-active-gj8')
                }
            }
        });



        let itemOption = removeAccents(option.textContent.trim().toLowerCase())
        // Aca podemos hacer un array para colocar [categorías, localizaciones]; Hay que buscar una manera de simplificar esto 

        if (itemOption == 'categorias') {
            radiosContents.map(content => {
                if (content.classList.contains('categories')) {
                    content.style.display = 'block'
                } else if (content.classList.contains('locations')) {
                    content.style.display = 'none'
                }
            });
            let categoriesTreeMain = document.querySelector('#categories-tree-main');
            [...categoriesTreeMain.querySelectorAll('.chevrondown-radio-button')].map(x => x.classList.remove('active'))
            categoriesTreeMain.querySelector('.chevrondown-radio-button.not').classList.add('active')
            console.log(document.querySelector('#categories-tree-main .chevrondown-radio-button.not'))
        }
        if (itemOption == 'localizaciones') {
            radiosContents.map(content => {
                if (content.classList.contains('locations')) {
                    content.style.display = 'block'
                } else if (content.classList.contains('categories')) {
                    content.style.display = 'none'
                }
            })
            let locationsTreeMain = document.querySelector('#locations-tree-main');
            [...locationsTreeMain.querySelectorAll('.chevrondown-radio-button')].map(x => x.classList.remove('active'))
            locationsTreeMain.querySelector('.chevrondown-radio-button.not').classList.add('active')
            // document.querySelector('#locations-tree-main .chevrondown-radio-button.not').classList.add('active')
            console.log(document.querySelector('#locations-tree-main .chevrondown-radio-button.not'))
        }

        // Type categories
        if (itemOption == 'categoria') {
            inputCurrent = 'Categoría'
        }
        if (itemOption == 'subcategoria') {
            inputCurrent = 'Subcategoría'
        }
        radiosContents.map(content => {
            if (content.classList.contains('categories')) {
                if (content.querySelector('textarea') != undefined) {
                    content.querySelector('textarea').setAttribute('placeholder', 'Especifica el nombre para cada ' + inputCurrent + ' por cada fila')
                }
                if (content.querySelector('input') != undefined) {
                    content.querySelector('input').setAttribute('placeholder', 'Especifica el nombre de la ' + inputCurrent)
                }
            }
        });


        if (option.closest('.radio-content')) {

            if (itemOption == 'unico' && option.closest('.radio-content').classList.contains('categories')) {
                
                radiosContents.map(content => {
                    console.log(content.parentElement.classList.contains('categories'))
                    if (content.parentElement.classList.contains('categories')) {
                        if (content.classList.contains('type-unique')) {
                            // console.log(content)
                            content.style.display = 'block'
                            // content.querySelector('strong').innerHTML = 'Input único ' +inputCurrent
                        } else if (content.classList.contains('type-list')) {
                            // console.log('No va', content)
                            content.style.display = 'none'
                        }
                    }
                    
                });
            }
            if (itemOption == 'lista' && option.closest('.radio-content').classList.contains('categories')) {

                radiosContents.map(content => {
                    if (content.parentElement.classList.contains('categories')) {
                        if (content.classList.contains('type-list')) {
                            content.style.display = 'block'
                        } else if (content.classList.contains('type-unique')) {
                            console.log('No va', content)
                            content.style.display = 'none'
                        }
                    }
                });
            }
            if (itemOption == 'categoria') {
                radiosContents.map(content => {
                    if (content.classList.contains('subcategories')) {
                        content.style.display = 'none'
                    }
                });
            }
            if (itemOption == 'subcategoria') {
                radiosContents.map(content => {
                    if (content.classList.contains('subcategories')) {
                        content.style.display = 'block'
                    }
                });
            }

            // Locations features

            let country = document.querySelector('.typeLocation-1');
            let administrativeDivition = document.querySelector('.typeLocation-2');
            if (itemOption == 'unico' && option.closest('.radio-content').classList.contains('locations')) {
                // alert('Mostrar tipo único de locations')
                console.log(administrativeDivition)
                radiosContents.map(content => {
                    if (content.classList.contains('locations')) {
                        // Valor único y múltiple del país
                        if (administrativeDivition.classList.contains('option-active-gj8')) {
                            console.log('Division administrativa')
                            if (content.classList.contains('type-unique-country')) {
                                content.style.display = 'none'
                            }
                            // if (content.querySelector('.type-list-country') != null) {
                            //     content.querySelector('.type-list-country').style.display = 'none'
                            // }
                        }
                        if (country.classList.contains('option-active-gj8')) {
                            console.log('Países')
                            if (content.querySelector('.type-unique-country') != null) {
                                console.log(content.querySelector('.type-unique-country'))
                                content.querySelector('.type-unique-country').style.display = 'block'
                            }
                            if (content.querySelector('.type-list-country') != null) {
                                content.querySelector('.type-list-country').style.display = 'none'
                            }
                            console.log(content)
                        }
                        
                    }
                });
            }
            if (itemOption == 'lista' && option.closest('.radio-content').classList.contains('locations')) {
                // alert('Mostrar tipo lista de locations')
                radiosContents.map(content => {
                    if (content.classList.contains('locations')) {
                        // if (content.classList.contains('type-unique')) {
                        //     // console.log(content, ' Unico')
                        //     content.style.display = 'none'
                        // }
                        // if (content.querySelector('.type-list') != null) {
                        //     content.querySelector('.type-list').style.display = 'block'
                        // }
                        if (administrativeDivition.classList.contains('option-active-gj8')) {
                            console.log('Division administrativa')
                            if (content.querySelector('.type-list-country') != null) {
                                content.querySelector('.type-list-country').style.display = 'none'
                            }
                        }
                        if (country.classList.contains('option-active-gj8')) {
                            // console.log('Países')
                            if (content.querySelector('.type-list-country') != null) {
                                content.querySelector('.type-list-country').style.display = 'block'
                            }
                            if (content.querySelector('.type-unique-country') != null) {
                                console.log(content.querySelector('.type-unique-country'))
                                content.querySelector('.type-unique-country').style.display = 'none'
                            }
                            // console.log(content.querySelector('.type-list-country'))
                        }
                    }
                });
            }
            // País
            if (itemOption == 'pais' && option.closest('.radio-content').classList.contains('locations')) {
                radiosContents.map(content => {
                    if (content.classList.contains('type-division')) {
                        content.style.display = 'none'
                    }
                    if (content.classList.contains('type-unique-country')) {
                        content.style.display = 'block'
                    }
                    if (content.classList.contains('administrative-divition')) {
                        content.style.display = 'none'
                    }
                });
            }
            // Division administrativa
            if (itemOption == 'division administrativa' && option.closest('.radio-content').classList.contains('locations')) {
                radiosContents.map(content => {
                    if (content.classList.contains('type-unique-country')) {
                        content.style.display = 'none'
                    }
                    if (content.querySelector('.type-list-country') != null) {
                        content.querySelector('.type-list-country').style.display = 'none'
                    }
                    if (content.classList.contains('type-division')) {
                        content.style.display = 'block'
                    }
                    if (content.classList.contains('administrative-divition')) {
                        content.style.display = 'block'
                    }
                });
            }
            // console.log(itemOption)
        }





    });
});