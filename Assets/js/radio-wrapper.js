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
            })
        }
        if (itemOption == 'localizaciones') {
            radiosContents.map(content => {
                if (content.classList.contains('locations')) {
                    content.style.display = 'block'
                } else if (content.classList.contains('categories')) {
                    content.style.display = 'none'
                }
            })
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
            if (itemOption == 'unico' && option.closest('.radio-content').classList.contains('locations')) {
                // alert('Mostrar tipo único de locations')
                radiosContents.map(content => {
                    if (content.classList.contains('locations')) {
                        if (content.classList.contains('type-unique')) {
                            // console.log(content, ' Unico')
                            content.style.display = 'block'
                        }
                        if (content.querySelector('.type-list') != null) {
                            content.querySelector('.type-list').style.display = 'none'
                        }
                    }
                });
            }
            if (itemOption == 'lista' && option.closest('.radio-content').classList.contains('locations')) {
                // alert('Mostrar tipo lista de locations')
                radiosContents.map(content => {
                    if (content.classList.contains('locations')) {
                        if (content.classList.contains('type-unique')) {
                            // console.log(content, ' Unico')
                            content.style.display = 'none'
                        }
                        if (content.querySelector('.type-list') != null) {
                            content.querySelector('.type-list').style.display = 'block'
                        }
                    }
                });
            }
            if (itemOption == 'pais' && option.closest('.radio-content').classList.contains('locations')) {
                radiosContents.map(content => {
                    if (content.classList.contains('type-division')) {
                        // console.log(content, ' Unico')
                        content.style.display = 'none'
                    }
                    if (content.classList.contains('type-country')) {
                        // console.log(content, ' Unico')
                        content.style.display = 'block'
                    }
                });
            }
            if (itemOption == 'division administrativa' && option.closest('.radio-content').classList.contains('locations')) {
                // console.log(itemOption)
                radiosContents.map(content => {
                    console.log(content)
                    if (content.classList.contains('type-country')) {
                        console.log(content, ' country')
                        content.style.display = 'none'
                    }
                    if (content.classList.contains('type-division')) {
                        console.log(content, ' division')
                        content.style.display = 'block'
                    }
                });
            }
            // console.log(itemOption)
        }





    });
});