console.log('Autocomplete')

// Colocarlo en cada step por separado
function autocompleteMain(step) {
    // FUNCIONA AL PELO, SOLO FALTA COLOCAR TODO ESTO EN LOS DEMÁS STEPS
    const mainAutocomplete = [...document.querySelectorAll(`.step-${step} .main-editors`)]
    mainAutocomplete.map((editor, index) => {
        let triggerAutocomplete = editor.querySelector('.btn-autocomplete');
        let autocomplete = editor.querySelector('.main-autocomplete');
        let closeAutocomplete = autocomplete.querySelector('.close-autocomplete');
        let listAutocomplete = autocomplete.querySelector('.list-prefix-autocomplete');
        let textarea = editor.querySelector('.textarea');
        let inputAutocomplete = autocomplete.querySelector('.input-autocomplete');
        let boxSearch = autocomplete.querySelector('.search-match');
        let btnNextAutocomplete = autocomplete.querySelector('.btn-autocomplete-next')
        triggerAutocomplete.addEventListener('click', (e) => {
            e.preventDefault();
            autocomplete.style.display = 'block'
        });
        closeAutocomplete.addEventListener('click', (e) => {
            e.preventDefault();
            autocomplete.style.display = 'none'
        });
        btnNextAutocomplete.addEventListener('click', (e) => {
            e.preventDefault();
            autocomplete.style.display = 'none'
        });
        // Defining Search Type
        let dataType;
        let dataChildType;
        // console.log(dataModeList)
        if (boxSearch.attributes.type.textContent == 'presentation') {
            dataType = dataAutocompletePresentations
            dataChildType = dataPresentations
        } else {
            dataType = dataAutocompleteModeList
            dataChildType = dataModeList
        }
        setTimeout(() => {
            // Items Autocomplete
            // console.log(listAutocomplete.childElementCount)
            for (let item = 0; item < listAutocomplete.childElementCount; item++) {
                const element = listAutocomplete.children[item];
                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (element.classList[1] != 'selected') {
                        element.classList.add('selected')
                        element.children[0].children[0].textContent = 'done'
                        if (boxSearch.attributes.type.textContent == 'presentation') {
                            textarea.innerHTML += /*html*/ `
                            <p key="${element.attributes.key.textContent}">
                                ${ element.children[1].textContent.trim() }
                            </p>`
                        } else {
                            textarea.innerHTML += /*html*/ `
                            <li style="padding-bottom: 10px;" key="${element.attributes.key.textContent}">
                                ${ element.children[1].textContent.trim() }
                            </li>`
                        }
                    } else {
                        element.classList.remove('selected')
                        element.children[0].children[0].textContent = 'add'
                        for (let index = 0; index < textarea.childElementCount; index++) {
                            const element = textarea.children[index];
                            if (element.attributes.key.textContent == element.attributes.key.textContent) {
                                element.remove()
                            }
                        }
                    }
                });
            }
        }, 300);
        // Process Search
        function boldText(text, keyWords) {
            return text.split(" ").map(word => keyWords.includes(word) ? `<strong>${word}</strong>` : word).join(" ");
        }
        inputAutocomplete.addEventListener('keyup', (e) => {
            boxSearch.innerHTML = ''
            // Eliminando Diacríticos
            function eliminarDiacriticosEs(texto) {
                return texto
                        .normalize('NFD')
                        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
                        .normalize();
            }
            let text = eliminarDiacriticosEs(e.target.value.toLowerCase());
            if (text.length >= 3) {
                boxSearch.style.display = 'block'
                for (let item of dataType) {
                    let name = item.name.toLowerCase();
                    var filterLettering = text.split(' ');
                    var yes = 0;
                    for (var filter of filterLettering) {
                        if (eliminarDiacriticosEs(item.name.toLowerCase()).indexOf(filter) > -1) {
                            yes++;
                        }
                    }
                    if (yes === filterLettering.length) {
                        boxSearch.innerHTML += /*html*/ ` 
                        <div class="item-match">
                            <span style="text-transform: capitalize;"> 
                            ${ boldText(name, filterLettering) }
                            </span>
                        </div>`
                    }
                    // Items selected
                    let itemsMatch = [...boxSearch.querySelectorAll('.item-match')]
                    itemsMatch.map((match, index) => {
                        match.addEventListener('click', (e) => {
                            e.preventDefault();
                            let matchCharAt = match.textContent.trim().slice(0, 1)
                            let matchSlide = match.textContent.trim().slice(1)
                            inputAutocomplete.value = matchCharAt.toUpperCase() + matchSlide
                            boxSearch.style.display = 'none'
                            let filterItemsSelected = [];
                            for (let child = 0; child <= listAutocomplete.childElementCount - 1; child++) {
                                if (listAutocomplete.children[child].classList[1] == 'selected') {
                                    filterItemsSelected.push(listAutocomplete.children[child].attributes.key.textContent)
                                }
                            }
                            listAutocomplete.innerHTML = ''
                            for (let matchpresentations of dataChildType) {
                                let key = matchpresentations.key.toLowerCase()
                                let searchKey = match.textContent.trim().toLowerCase()
                                if (searchKey.includes(key)) {
                                    for (let [index, presentation] of matchpresentations.contentKey.entries()) {
                                        listAutocomplete.innerHTML += /*html*/ `
                                        <div class="item-autocomplete " key="${index}">
                                            <div class="icon-autocomplete">
                                                <i class="material-icons-outlined add-icon">add</i>
                                                <i class="material-icons-outlined remove-icon">remove</i>
                                            </div>
                                            <span> ${ presentation } </span>
                                        </div>`
                                    }
                                }
                            }
                            for (let item = 0; item < listAutocomplete.childElementCount; item++) {
                                const element = listAutocomplete.children[item];
                                element.addEventListener('click', (e) => {
                                    e.preventDefault();
                                    if (element.classList[1] != 'selected') {
                                        element.classList.add('selected')
                                        element.children[0].children[0].textContent = 'done'
                                        setTimeout(() => {
                                            if (boxSearch.attributes.type.textContent == 'presentation') {
                                                textarea.innerHTML += /*html*/ `
                                                <p key="${element.attributes.key.textContent}">
                                                    ${ element.children[1].textContent.trim() }
                                                </p>`
                                            } else {
                                                textarea.innerHTML += /*html*/ `
                                                <li style="padding-bottom: 10px;" key="${element.attributes.key.textContent}">
                                                    ${ element.children[1].textContent.trim() }
                                                </li>`
                                            }
                                        }, 100);
                                    } else {
                                        element.classList.remove('selected')
                                        element.children[0].children[0].textContent = 'add'
                                        setTimeout(() => {
                                            for (let index = 0; index < textarea.childElementCount; index++) {
                                                const element = textarea.children[index];
                                                if (element.attributes.key.textContent == element.attributes.key.textContent) {
                                                    element.remove()
                                                }
                                            }
                                        }, 100);
                                    }
                                });
                            }
                        })
                    })
                }
                if (boxSearch.innerHTML === '') {
                    boxSearch.innerHTML = /*html*/ `
                    <div class="item-match">
                        <span> No hay resultados... </span>
                    </div>`
                }
            } else {
                boxSearch.style.display = 'none'
            }

        })
        for (let [index, p] of dataChildType[0].contentKey.entries()) {
            listAutocomplete.innerHTML += /*html*/ `
            <div class="item-autocomplete" key="${index}">
                <div class="icon-autocomplete">
                    <i class="material-icons-outlined add-icon">add</i>
                    <i class="material-icons-outlined remove-icon">remove</i>
                </div>
                <span class="size-normal"> ${ p } </span>
            </div>`
        }
    });
}
autocompleteMain('2');
autocompleteMain('3');
autocompleteMain('7');