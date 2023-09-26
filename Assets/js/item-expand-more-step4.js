console.log('Expand More')

const mainItemsExpandMoreOptions4 = document.querySelector('.step-4 .items-expand-more-options')

function itemsExpandMoreFunc4() {
    const itemsExpandMore = [...document.querySelectorAll('.step-4 .item-expand-more')]
   
    itemsExpandMore.map((el, index) => {
        
        const triggerMoreItemExpandMore = el.querySelector('.more-expand-item')
        const triggerEditItemExpandMore = el.querySelector('.edit')
        const triggerExpand = el.querySelector('.expand')
        const input = el.querySelector('.item input')
        const contentItemExpandMore = el.querySelector('.content-item-expand-more')
        triggerEditItemExpandMore.addEventListener('click', (e) => {
            e.preventDefault()
            if (input.value == '') {
                alert('Debe llenar el campo...')
            } else {
                if (input.disabled) {
                    el.style.transform = 'rotateX(180deg)'
                    el.style.rotate = '180deg'
                    el.children[0].textContent = 'save'
                    input.style.fontWeight = 'normal'
                    input.disabled = false
                    // Save 
                    el.parentElement.parentElement.querySelector('.item span').style.background = '#f5f5f5'
                    el.parentElement.children[0].style.display = 'none'
                    el.parentElement.children[2].style.display = 'none'
                    console.log(el.parentElement.parentElement.querySelector('.item span').textContent)
                    if (el.parentElement.parentElement.querySelector('.item span').textContent > 1) {
                        el.parentElement.querySelector('.delete').style.display = 'none'
                    }
                    el.parentElement.style.paddingRight = '0'
                    el.parentElement.style.display = 'block'
                    el.style.fontSize = '2em'
                    el.style.padding = '20px'
                    el.style.background = 'var(--pink)'
                    el.style.borderRadius = '6px 0 0 6px'
                    el.style.height = '72.5px'
                    el.style.width = '100px'
                } else {
                    el.style.transform = 'rotateX(0deg)'
                    el.style.rotate = '0deg'
                    el.children[0].textContent = 'drive_file_rename_outline'
                    input.style.fontWeight = 'bold'
                    input.disabled = true
                    // Save
                    el.parentElement.parentElement.querySelector('.item span').style.background = '#fff'
                    if (el.parentElement.parentElement.querySelector('.item span').textContent > 1) {
                        el.parentElement.querySelector('.delete').style.display = 'flex'
                    }
                    el.parentElement.children[0].style.display = 'flex'
                    el.parentElement.children[2].style.display = 'flex'
                    el.parentElement.style.paddingRight = '20px'
                    el.parentElement.style.display = 'flex'
                    el.style.fontSize = '1.6em'
                    el.style.padding = '6px'
                    el.style.background = 'var(--color-text)'
                    el.style.borderRadius = '6px'
                    el.style.width = '100%'
                    el.style.height = '100%'
                }
            }
        })
        triggerExpand.addEventListener('click', (e) => {
            e.preventDefault()
            if (contentItemExpandMore.style.display == '' || contentItemExpandMore.style.display == 'none') {
                contentItemExpandMore.style.display = 'block'
                triggerExpand.style.rotate = '180deg'
            } else {
                contentItemExpandMore.style.display = 'none'
                triggerExpand.style.rotate = '0deg'
            }
        })
        triggerMoreItemExpandMore.addEventListener('click', (e) => {
            e.preventDefault();
            addOtherOptionExpandMore4()
        })
    });
}

itemsExpandMoreFunc4()
let indexItemExpand4 = 0
// Start Validations
let validationsFunctionsStep4;
function validationsArrStep4(x) {
    validationsFunctionsStep4 = x
}

// End Validations





addOtherOptionExpandMore4()
function addOtherOptionExpandMore4() {
    let deleteBtn = indexItemExpand4 >= 1 ? `<div class="btn-pink only-icon delete">
        <i class="material-icons-outlined" style="padding: 0 5px;">close</i>
    </div>` : ''
    let item = /*html*/ `
        <div class="main-item-expand-more" item="${ indexItemExpand4 += 1 }">
            <div class="item">
                <span>${ indexItemExpand4 }</span><input type="text" value="Estudio realizado" disabled>
            </div>
            <div class="items-actions">
                <div class="btn-primary-light only-icon more-expand-item">
                    <i class="material-icons-outlined">add_circle_outline</i>
                </div>
                <div class="btn-silver only-icon edit">
                    <i class="material-icons">drive_file_rename_outline</i>
                </div>
                <div class="btn-primary-light only-icon expand">
                    <i class="material-icons">expand_more</i>
                </div>
                ${ deleteBtn }  
            </div>
        </div>
        <div class="content-item-expand-more">
            <div class="grid-inputs-2">
                <div class="col">
                    <h4 class="subtitle normal"><strong>Fecha</strong></h4>
                    <div class="grid-inputs-2">
                        <div class="col">
                            <div class="input-form user-data normal-my">
                                <label class="txt-field icon-right date">
                                    <span
                                        class="input-normal">Desde&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <input type="date" name="fromDate" placeholder="Desde" />
                                    <i class="icon-right material-icons-outlined date-trigger">date_range</i>
                                </label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-form user-data normal-my">
                                <label class="txt-field icon-right date">
                                    <span
                                        class="input-normal">Hasta&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <input type="date" name="toDate" placeholder="Hasta" />
                                    <i class="icon-right material-icons-outlined date-trigger">date_range</i>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col field" field="tipo_estudios_fourCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Tipo de estudios</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field icon-right">
                            <span class="input-normal"></span>
                            <input type="text" name="input" placeholder="Tipo de estudios realizado" class="val-input-text-4" />
                        </label>
                    </div>
                </div>
            </div>
            <div class="grid-inputs-2 field" field="calificacion_final_fourCv" status="unlock" isActive="1">
                <div class="col field" field="calificacionMax_fourCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Calificación final</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field icon-right">
                            <span class="input-normal">Nota obtenida</span>
                            <input type="number" name="input" placeholder="Nota obtenida" class="val-input-text-4"/>
                        </label>
                    </div>
                </div>
                <div class="col field" field="calificacionMax_fourCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>&nbsp;</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field icon-right">
                            <span class="input-normal">Nota máxima obtenida</span>
                            <input type="number" name="input" placeholder="Nota máxima posible">
                        </label>
                    </div>
                </div>
            </div>
            <div class="grid-inputs-2">
                <div class="col field" field="nombre_centro_curso_fourCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Nombre del centro de estudios</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field icon-right">
                            <span class="input-normal"></span>
                            <input type="text" name="input" placeholder="Especifica el nombre del centro" class="val-input-text-4"/>
                        </label>
                    </div>
                </div>
                <div class="col field" field="formato_estudios_fourCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Formato de estudios</strong></h4>
                    <div class="radio-wrapper articles normal-my">
                        <input type="radio" name="typeStudy" id="typeStudy-1" value="presencial">
                        <input type="radio" name="typeStudy" id="typeStudy-2" value="distancia">
                        <label for="typeStudy-1" class="option typeStudy-1">
                            <div class="dot"></div>
                            <span>Estudios Presenciales</span>
                        </label>
                        <label for="typeStudy-2" class="option typeStudy-2">
                            <div class="dot"></div>
                            <span>Estudios a Distancia</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="yes-direction field" field="formato_estudios_fourCv" status="unlock" isActive="1">
                <div class="grid-inputs-2">
                    <div class="col field" field="direccion_centro_fourCv" status="unlock" isActive="1">
                        <h4 class="subtitle normal"><strong>Dirección del centro</strong></h4>
                        <div class="input-form user-data normal-my">
                            <label class="txt-field icon-right">
                                <span class="input-normal"></span>
                                <input type="text" name="linkVideoName" placeholder="Especifica la dirección" class="val-input-text-4"/>
                                <i class="icon-right material-icons-outlined color-pink pointer direction-place">place</i>
                            </label>
                        </div>
                    </div>
                    <div class="col field" field="direccion2_centro_fourCv" status="unlock" isActive="1">
                        <h4 class="subtitle normal"><strong>Dirección del centro</strong> <small>(Línea 2)</small></h4>
                        <div class="input-form user-data normal-my">
                            <label class="txt-field">
                                <span class="input-normal"></span>
                                <input type="text" name="linkVideoName" placeholder="Especifica datos adicionales" class="val-input-text-4"/>
                            </label>
                        </div>
                    </div>
                    <div class="col field" field="codigo_postal_fourCv" status="unlock" isActive="1">
                        <h4 class="subtitle normal"><strong>Código postal</strong></h4>
                        <div class="input-form user-data normal-my">
                            <label class="txt-field">
                                <span class="input-normal"></span>
                                <input type="number" name="linkVideoName" placeholder="Especifica el código postal" class="val-input-text-4"/>
                            </label>
                        </div>
                    </div>
                    <div class="col field" field="poblacion_fourCv" status="unlock" isActive="1">
                        <h4 class="subtitle normal"><strong>Población</strong></h4>
                        <div class="input-form user-data normal-my">
                            <label class="txt-field">
                                <span class="input-normal"></span>
                                <input type="text" name="linkVideoName" placeholder="Especifica la población" class="val-input-text-4"/>
                            </label>
                        </div>
                    </div>
                    <div class="col yes-direction field" field="provincia_fourCv" status="unlock" isActive="1">
                        <h4 class="subtitle normal"><strong>Provincia</strong></h4>
                        <div class="input-form user-data normal-my">
                            <label class="txt-field">
                                <span class="input-normal"></span>
                                <input type="text" name="linkVideoName" placeholder="Especifica la provincia" class="val-input-text-4"/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid-inputs-2">
                <div class="col field" field="web_centro_fourCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Sitio web del centro</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field icon-right">
                            <span class="input-normal"></span>
                            <input type="text" name="linkVideoName" placeholder="Especifica el sitio web" class="val-input-text-4"/>
                            <i class="icon-right material-icons-outlined">link</i>
                        </label>
                    </div>
                </div>
                <div class="col field" field="tel_centro_fourCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Teléfono del centro</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field input-line icon-right icon-left">
                            <span></span>
                            <input type="number" name="linkVideoName"
                                placeholder="Especifica el teléfono del centro"/ maxLength="12" class="val-input-text-4">
                            <i class="icon-right material-icons">phone</i>
                            <i class="icon-left">
                                <img src="${BASE_URL}Assets/img/lang/flag-fr.jpg">
                            </i>
                        </label>
                    </div>
                </div>
                <div class="col field" field="email_centro_fourCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Email del centro</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field icon-right">
                            <span class="input-normal"></span>
                            <input type="text" name="linkVideoName"
                                placeholder="Especifica el email del centro" class="val-input-text-4"/>
                            <i class="icon-right material-icons-outlined">email</i>
                        </label>
                    </div>
                </div>
            </div>
            <div class="field" field="diplomas_fourCv" status="unlock" isActive="1">
                <h4 class="subtitle normal"><strong>Diplomas, Premios y Honores</strong></h4>
                <div class="main-file-upload-step4-cv">
                    <div id="galleryStep4Cv" class="galleryStep4Cv"  style="display: flex; justify-content: space-around;">
                        <div class="add-more addMoreStep4Cv">
                            <input type="file" id="addMoreArticles4${ indexItemExpand4 }" style="display: none;" multiple accept="application/pdf,image/*">
                            <label for="addMoreArticles4${ indexItemExpand4 }" class="title-drag">
                                <i class="material-icons">add</i> <br> Añadir más</label>
                        </div>
                    </div>
                    <div class="dropBoxStep4Cv">
                        <i class="material-icons">photo_camera</i>
                        <p class="title-drag">Arrastra imágenes o PDF aquí</p>
                        <p class="subtitle-drag">- o -</p>
                        <form class="imgUploader" style="display: flex; justify-content: space-around;">
                            <input type="file" id="imgUploadArticles4${ indexItemExpand4 }" style="display: none;" multiple accept="application/pdf,image/*">
                            <label class="button" for="imgUploadArticles4${ indexItemExpand4 }">Seleccionalas desde tu ordenador</label>
                        </form>
                    </div>
                </div>
            </div>
            <div class="field" field="observaciones_fourCv" status="unlock" isActive="1">
                <div class="d-flex jcsb baseline fw-w">
                    <div class="col">
                        <h4 class="subtitle normal"><strong>Observaciones</strong></h4>
                    </div>
                    <div class="col">
                        <h4 class="subtitle small">
                            max. 600 carácteres
                        </h4>
                    </div>
                </div>
                <!--<div class="input-form user-data ads">
                    <label class="txt-field">
                        <textarea name="description" cols="30" rows="10"
                            placeholder="Añade información complementaria explicativa si es necesario"></textarea>
                    </label>
                </div>-->
                <!-- Start Editor -->
                <div class="main-editors field" field="observaciones_threeCv" status="unlock" isActive="1">
                <!-- Start autocomplete -->
                <div class="main-autocomplete">
                    <i class="material-icons-outlined close-autocomplete">close</i>
                    <div class="content-autocomplete">
                        <h3 class="h3-title mr-2"><strong>AÑADIR CONTENIDO PREESCRITO</strong></h3>
                        <h4 class="subtitle normal">Busca descripciones por nombre del cargo</h4>
                        <h4 class="subtitle normal mt-3"><strong>Cargo</strong></h4>
                        <div class="input-form user-data normal-my search-autocomplete">
                            <label class="txt-field icon-right">
                                <span class="input-normal"></span>
                                <input type="text" name="text" placeholder="Jardinero" class="input-autocomplete"/>
                                <i class="icon-right material-icons-outlined">search</i>
                            </label>
                            <div class="search-match" type="list"></div>
                        </div>
                        <h4 class="subtitle normal">Haz click para añadir contenido a tu CV</h4>
                        <div class="list-prefix-autocomplete"></div>
                        <div class="main-btn-autocomplete"> 
                            <div class="btn-autocomplete-next">
                                Continuar
                            </div>
                        </div>
                    </div>
                </div>  
                <!-- End autocomplete -->
                <div class="head-editors">
                    <div class="functions-editors">
                        <button class="item-editors bold tooltip">
                            <i class="material-icons-outlined">format_bold</i>
                            <span class="tooltiptext">Negrita</span>
                        </button>
                        <button class="item-editors italic tooltip">
                            <i class="material-icons-outlined">format_italic</i>
                            <span class="tooltiptext">Itálica</span>
                        </button>
                        <button class="item-editors underlined tooltip">
                            <i class="material-icons-outlined">format_underlined</i>
                            <span class="tooltiptext">Subrayar</span>
                        </button>
                        <div class="dropdown-editors">
                            <div class="main-dropdown-editors">
                                <button class="item-editors tooltip">
                                    <i class="material-icons-outlined">format_align_left</i>
                                    <span class="tooltiptext">Texto alineado</span>
                                </button>
                            </div>
                            <div class="content-dropdown-editors">
                                <button class="item-editors align-left">
                                    <i class="material-icons-outlined">format_align_left</i>
                                </button>
                                <button class="item-editors align-center">
                                    <i class="material-icons-outlined">format_align_center</i>
                                </button>
                                <button class="item-editors align-right">
                                    <i class="material-icons-outlined">format_align_right</i>
                                </button>
                                <button class="item-editors align-justify">
                                    <i class="material-icons-outlined">format_align_justify</i>
                                </button>
                            </div>
                        </div>
                        <button class="item-editors bulleted tooltip">
                            <i class="material-icons-outlined">format_list_bulleted</i>
                            <span class="tooltiptext">Lista</span>
                        </button>
                        <button class="item-editors remove-format tooltip">
                            <i class="material-icons-outlined">format_clear</i>
                            <span class="tooltiptext">Borrar estilo</span>
                        </button>
                    </div>
                    <div class="btn-autocomplete">
                        <i class="material-icons-outlined">add</i>
                        <h6>Autocompletar esta sección</h6>
                    </div>
                </div>
                <hr class="mx-1">
                <div class="content-textarea">
                    <div contenteditable="true" class="textarea"></div>
                </div>
            </div>
            <!-- End Editor -->
            </div>
        </div>
        <div class="main-map-direction">
        <div class="card-map-direction">
            <div class="header-map">
                <h3>Crear</h3>
                <h2>Direcciones</h2>
                <hr class="divider bg-mantis">
            </div>
            <div class="content-map">
                <div class="main-content-map">
                    <div class="search-content-map">
                        <div class="user-data search-location search-location-map">
                            <label class="txt-field location directions">
                                <span class="directions input-normal" >Buscar una localización</span>
                                <input type="text" name="locationName"/>
                                <div class="detect-location location-map">
                                    <i class="material-icons">my_location</i>
                                    Detectar mi ubicación
                                </div>
                            </label>
                            <div class="icons iconsMap">
                                <i id="searchMap" class="material-icons">search</i>
                            </div>
                            <div class="time-real-location time-map-direction"></div>
                        </div>
                    </div>
                </div>
                <h1 class="location-map-direction"></h1>
                <h1 class="loc-map-direction"></h1>
            </div>
            <div class="footer-map">
                <div class="action cancel" onclick="this.parentElement.parentElement.parentElement.style.display = 'none'">
                    cancelar
                </div>
                <div class="action apply">
                    aplicar
                </div>
            </div>
        </div>
    </div>
    <div class="main-map-direction">
        <div class="card-map-direction">
            <div class="header-map">
                <h3>Crear</h3>
                <h2>Direcciones</h2>
                <hr class="divider bg-mantis">
            </div>
            <div class="content-map">
                <div class="main-content-map">
                    <div class="search-content-map">
                        <div class="user-data search-location search-location-map">
                            <label class="txt-field location directions">
                                <span class="directions input-normal" >Buscar una localización</span>
                                <input type="text" name="locationName"/>
                                <div class="detect-location location-map">
                                    <i class="material-icons">my_location</i>
                                    Detectar mi ubicación
                                </div>
                            </label>
                            <div class="icons iconsMap">
                                <i id="searchMap" class="material-icons">search</i>
                            </div>
                            <div class="time-real-location time-map-direction"></div>
                        </div>
                    </div>
                </div>
                <h1 class="location-map-direction"></h1>
                <h1 class="loc-map-direction"></h1>
            </div>
            <div class="footer-map">
                <div class="action cancel" onclick="this.parentElement.parentElement.parentElement.style.display = 'none'">
                    cancelar
                </div>
                <div class="action apply">
                    aplicar
                </div>
            </div>
        </div>
    </div>`
    let div = document.createElement('div')
    div.classList.add('item-expand-more')
    div.innerHTML = item
    mainItemsExpandMoreOptions4.appendChild(div)
    setTimeout(() => {
        let addItems = [...div.querySelectorAll('.more-expand-item')]
        let delItems = [...div.querySelectorAll('.delete')]
        let expandMore = [...div.querySelectorAll('.expand')]
        let editItem = [...div.querySelectorAll('.edit')]
        let optionOneTypeStudy = [...div.querySelectorAll('.typeStudy-1')]
        let optionTwoTypeStudy = [...div.querySelectorAll('.typeStudy-2')]
        let directionPlace = [...div.querySelectorAll('.direction-place')]
        let allFieldsDinamic = [...div.querySelectorAll('.field')] // Selected All Fields Dinamic
        editorMainFunction('step-4')
        
        // Start autocomplete
        let mainAutocomplete = div.querySelector('.main-editors')

        let triggerAutocomplete = mainAutocomplete.querySelector('.btn-autocomplete');
        let autocomplete = mainAutocomplete.querySelector('.main-autocomplete');
        let closeAutocomplete = autocomplete.querySelector('.close-autocomplete');
        let listAutocomplete = autocomplete.querySelector('.list-prefix-autocomplete');
        let textarea = mainAutocomplete.querySelector('.textarea');
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
        });
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
        // end autocomplete


        
        addItems.map(el => { el.onclick = addOtherOptionExpandMore4 })
        delItems.map(el => { 
            el.onclick = () => {
                if (confirm('¿Está seguro de eliminar este trabajo realizado?')) {
                    el.parentElement.parentElement.parentElement.remove()
                    indexItemExpand4 -= 1
                    // Reload Numbers Position
                    let items = [...document.querySelectorAll('.step-4 .item-expand-more')]
                    items.map((item, index) => {
                        let reloadNumbersSpan = item.children[0].children[0].children[0]
                        reloadNumbersSpan.textContent = `${index + 1}`
                    })
                } 
            } 
        })
        expandMore.map(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                let content = el.parentElement.parentElement.parentElement.children[1]
                let expand = el.parentElement.parentElement.parentElement.children[0]
                let itemsExpand = [...document.querySelectorAll('.step-4 .item-expand-more')]
                if (content.style.display == '' || content.style.display == 'none') {
                    content.style.display = 'block'
                    el.style.rotate = '180deg'
                } else {
                    content.style.display = 'none'
                    el.style.rotate = '0deg'
                }
            })  
        })
        directionPlace.map(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const mainMapDirection = document.querySelector('.step-4 .main-map-direction')
                mainMapDirection.style.display = 'flex'
            })
        })
        // Edit Work
        editItem.map(el => {
            let input = el.parentElement.parentElement.children[0].querySelector('input')
            el.addEventListener('click', (e) => {
                e.preventDefault()
                if (input.value == '') {
                    alert('Debe llenar el campo...')
                } else {
                    if (input.disabled) {
                        el.style.transform = 'rotateX(180deg)'
                        el.style.rotate = '180deg'
                        el.children[0].textContent = 'save'
                        input.style.fontWeight = 'normal'
                        input.disabled = false
                        // Save 
                        el.parentElement.parentElement.querySelector('.item span').style.background = '#f5f5f5'
                        el.parentElement.children[0].style.display = 'none'
                        el.parentElement.children[2].style.display = 'none'
                        if (el.parentElement.parentElement.querySelector('.item span').textContent > 1) {
                            el.parentElement.querySelector('.delete').style.display = 'none'
                        }
                        el.parentElement.style.paddingRight = '0'
                        el.parentElement.style.display = 'block'
                        el.style.fontSize = '2em'
                        el.style.padding = '20px'
                        el.style.background = 'var(--pink)'
                        el.style.borderRadius = '6px 0 0 6px'
                        el.style.height = '72.5px'
                        el.style.width = '100px'
                    } else {
                        el.style.transform = 'rotateX(0deg)'
                        el.style.rotate = '0deg'
                        el.children[0].textContent = 'drive_file_rename_outline'
                        input.style.fontWeight = 'bold'
                        input.disabled = true
                        // Save
                        el.parentElement.parentElement.querySelector('.item span').style.background = '#fff'
                        if (el.parentElement.parentElement.querySelector('.item span').textContent > 1) {
                            el.parentElement.querySelector('.delete').style.display = 'flex'
                        }
                        el.parentElement.children[0].style.display = 'flex'
                        el.parentElement.children[2].style.display = 'flex'
                        el.parentElement.style.paddingRight = '20px'
                        el.parentElement.style.display = 'flex'
                        el.style.fontSize = '1.6em'
                        el.style.padding = '6px'
                        el.style.background = 'var(--color-text)'
                        el.style.borderRadius = '6px'
                        el.style.width = '100%'
                        el.style.height = '100%'
                    }
                }
            })
        })
        // Yes Present
        // NONE TWO
        optionOneTypeStudy.map((typeStudy, iTypeStudy) => {
            typeStudy.children[0].style.background = colorPrimaryLight
            typeStudy.children[1].style.fontWeight = 'bold'
            let two = typeStudy.parentElement.querySelector('.typeStudy-2')
            let yesDirection = [...typeStudy.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.yes-direction')]
            two.children[0].style.background = '#0000'
            two.children[1].style.fontWeight = 'normal'
            yesDirection.map(direction => {
                direction.style.display = 'block'
            })
           
            typeStudy.addEventListener('click', function(e) {
                // Presencial
                e.preventDefault();
                typeStudy.children[0].style.background = colorPrimaryLight
                typeStudy.children[1].style.fontWeight = 'bold'
                let two = typeStudy.parentElement.querySelector('.typeStudy-2')
                two.children[0].style.background = '#0000'
                two.children[1].style.fontWeight = 'normal'
                yesDirection.map(direction => {
                    direction.style.display = 'block'
                })
               
            })
        })
        // NONE ONE
        optionTwoTypeStudy.map((typeStudy, iTypeStudy) => {
            typeStudy.addEventListener('click', function(e) {
                // Distancia
                e.preventDefault();
                typeStudy.children[0].style.background = colorPrimaryLight
                typeStudy.children[1].style.fontWeight = 'bold'
                let two = typeStudy.parentElement.querySelector('.typeStudy-1')
                two.children[0].style.background = '#0000'
                two.children[1].style.fontWeight = 'normal'
                let yesDirection = [...typeStudy.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.yes-direction')]
                yesDirection.map(direction => {
                    direction.style.display = 'none'
                })
               
            })
        })
        // Upload Logo
        // ONLY DRAG AND DROP----------------------------------------------------------------------------
            // ONLY DRAG AND DROP----------------------------------------------------------------------------
        let dragSrcLogoCv = undefined;
        // DROPBOX AND INPUT FILE ---------------------------------------------
        ;
        let mainFileUploadStep4CvAll = [...document.querySelectorAll(`.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv`)]
        mainFileUploadStep4CvAll.map((__, index) => {
            let __addMore = __.parentElement.children[0].children[0]
            let __input = __.querySelector('input')
            let __addMoreInput = __addMore.querySelector('input')

            // ONLY DRAG AND DROP----------------------------------------------------------------------------
            let dragSrcArticle4 = undefined;

            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
                __.addEventListener(evt, function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }, false);
                __addMore.addEventListener(evt, function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }, false);
            });


            ['dragenter', 'dragover'].forEach(evt => {
                __.addEventListener(evt, function(e){
                    __.classList.add('hover');
                    __addMore.classList.add('hover');
                }, false);
                __addMore.addEventListener(evt, function(e){
                    __.classList.add('hover');
                    __addMore.classList.add('hover');
                }, false);
            });
            ['dragleave', 'drop'].forEach(evt => {
                __.addEventListener(evt, function(e){
                    __.classList.remove('hover');
                    __addMore.classList.remove('hover');
                }, false);
                __addMore.addEventListener(evt, function(e){
                    __.classList.remove('hover');
                    __addMore.classList.remove('hover');
                }, false);
            });

            __.addEventListener('drop', function(e) {
                let dataTrans = e.dataTransfer;
                let files = dataTrans.files;
                files = [...files]
                files.forEach(file => {
                    let imageType = /image.*/;
                     let PDFType = /application.pdf.*/;
                    if (file.type.match(imageType) || file.type.match(PDFType)) {
                        let url = 'HTTP/HTTPS URL TO SEND THE DATA TO';
                        let formData = new FormData();
                        formData.append('file', file);
                        // fetch(url, {
                        // 	method: 'put',
                        // 	body: formData
                        // })
                        // .then(response => response.json())
                        // .then(result => { console.log('Success:', result); })
                        // .catch(error => { console.error('Error:', error); });
                    } else {
                        console.error("Err...", file);
                    }
                });
                files.forEach(file => {
                    let imageType = /image.*/;
                     let PDFType = /application.pdf.*/;
                    if (file.type.match(imageType) || file.type.match(PDFType)) {
                        let fReader = new FileReader();
                        let gallery = __.parentElement.children[0];
                        console.log(gallery)
                        fReader.readAsDataURL(file);
                        console.log(file)
                        fReader.onloadend = function () {
                            let wrap = document.createElement('div');
                            let buttonsModify = document.createElement('div');
                            wrap.classList.add('column')
                            wrap.draggable = true
                            let numberImg = document.createElement('div')
                            numberImg.classList.add('number-img')
                           
                            buttonsModify.classList.add('actions-img-articles')
                            
                            if (file.type.match(PDFType)) {
                                let namePdf = file.name
                                console.log(URL.createObjectURL(file))
                                let namePdfRemasted = namePdf.length > 15 ? namePdf.slice(0, 15)+'... .pdf' : namePdf
                                wrap.style.setProperty('--bg-img-articles', `#0000`)
                                wrap.innerHTML = `
                                <div class="icon-pdf-preview">
                                    <i class="material-icons-outlined">picture_as_pdf</i>
                                    <span style="color: var(--color-text);">
                                        ${ namePdfRemasted } 
                                    </span>
                                </div>
                                
                                `
                                buttonsModify.innerHTML = `<div class="delete">
                                <i class="material-icons-outlined">delete_forever</i>
                                </div><div class="rotate" style="display: none;">
                                    <i class="material-icons-outlined">rotate_90_degrees_ccw</i>
                                </div>
                                <div class="preview">
                                    <i class="material-icons-outlined">visibility</i>
                                </div>
                               `
                               wrap.innerHTML += `<div class="preview-pdf">
                                    <embed src="${URL.createObjectURL(file)}" type="application/pdf" width="400" height="500">
                                    <button class="btn-primary-light mt-5">
                                        Cerrar Previsualización
                                    </button>
                                </div>`
                            } else {
                                buttonsModify.innerHTML = `<div class="delete">
                                    <i class="material-icons-outlined">delete_forever</i>
                                </div>
                                <div class="rotate">
                                    <i class="material-icons-outlined">rotate_90_degrees_ccw</i>
                                </div>
                                <div style="display: none;" class="preview">
                                    <i class="material-icons-outlined">visibility</i>
                                </div>`
                                wrap.innerHTML += `<div style="display: none;" class="preview-pdf">
                                    <embed src="${URL.createObjectURL(file)}" type="application/pdf" width="400" height="500">
                                    <button class="btn-primary-light mt-5">
                                        Cerrar Previsualización
                                    </button>
                                </div>`
                                wrap.style.setProperty('--bg-img-articles', `url(${fReader.result})`)
                            }
                            


                            gallery.appendChild(wrap).appendChild(numberImg);
                            gallery.appendChild(wrap).appendChild(buttonsModify);
                            document
                                .querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')
                                .forEach(col => {
                                    col.addEventListener('dragstart', function(e) {
                                        e.target.classList.add('dragging');
                                        dragSrcArticle4 = e.target;
                                        e.dataTransfer.effectAllowed = 'move';
                                        e.dataTransfer.setData('text/html', e.target.innerHTML);
                                    }, false);
                                    col.addEventListener('dragenter', function(e) {
                                        e.target.classList.add('over');
                                    }, false);
                                    col.addEventListener('dragover', function(e) {
                                        if (e.preventDefault) {
                                            e.preventDefault();
                                        }
                                        e.dataTransfer.dropEffect = 'move';
                                        return false;
                                    }, false);
                                    col.addEventListener('dragleave', function(e) {
                                        e.target.classList.remove('over');
                                    }, false);
                                    col.addEventListener('drop', function(e) {
                                        if (e.stopPropagation) {
                                            e.stopPropagation();
                                        }
                                        if (dragSrcArticle4 !== e.target) {
                                            let dragSrcOrder = dragSrcArticle4.style.order;
                                            dragSrcArticle4.style.order = e.target.style.order;
                                            e.target.style.order = dragSrcOrder;
                                            let toNumber = dragSrcArticle4.querySelector('.number-img').textContent
                                            dragSrcArticle4.querySelector('.number-img').textContent = e.target.querySelector('.number-img').textContent
                                            e.target.querySelector('.number-img').textContent = toNumber
                                        }
                                    
                                        return false;
                                    }, false);
                                    col.addEventListener('dragend', function(e) {
                                        document
                                            .querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')
                                            .forEach(col => {
                                                col.classList.remove('over');
                                            });
                                        e.target.classList.remove('dragging');
                                        return false;
                                    }, false);
                                });
                        }
                    } else {
                        console.error("Err... ||", file);
                    }
                });
                setTimeout(() => {
                    setTimeout(() => {
                        let itemsImg = [...__.parentElement.querySelectorAll('.galleryStep4Cv .column')]
                        const countItems = itemsImg.length
                        if (countItems == 0) {
                            __addMore.style.display = 'none'
                            __.style.display = 'flex'
                        }
                        itemsImg.map((el, index) => {
                            let orderItem = index + 1
                            el.style.order = orderItem
                            if (orderItem == 1) {
                                orderItem = 'Principal'
                                el.querySelector('.number-img').textContent = orderItem
                            } else {
                                el.querySelector('.number-img').textContent = orderItem
                            }
                            if (orderItem > 30) {
                                el.remove()
                            }
                            if (countItems >= 30) {
                                __addMore.style.display = 'none'
                                __.style.display = 'none'
                            }  else  {
                                __addMore.style.display = 'flex'
                                __.style.display = 'none'
                            }
                            __addMore.style.order = countItems + 1
                        });
                    }, 100);
                    setTimeout(() => {
                        let itemsImg = [...__.parentElement.querySelectorAll('.galleryStep4Cv .column')]
                        itemsImg.map((el, index) => {
                            const deleteImgAds = el.querySelector('.actions-img-articles .delete')
                            const rotateImgAds = el.querySelector('.actions-img-articles .rotate')
                            const previewPDF = el.querySelector('.actions-img-articles .preview')
                            const closePreviewPDF = el.querySelector('.preview-pdf .btn-primary-light')
                            console.log(closePreviewPDF)
                            
                            deleteImgAds.addEventListener('click', (x) => {
                                x.preventDefault();
                                el.remove();
                                setTimeout(() => {
                                    let itemsImg = [...__.parentElement.querySelectorAll('.galleryStep4Cv .column')]
                                    const countItems = itemsImg.length
                                    if (countItems == 0) {
                                        __addMore.style.display = 'none'
                                        __.style.display = 'flex'
                                    }
                                    itemsImg.map((el, index) => {
                                        let orderItem = index + 1
                                        el.style.order = orderItem
                                        if (orderItem == 1) {
                                            orderItem = 'Principal'
                                            el.querySelector('.number-img').textContent = orderItem
                                        } else {
                                            el.querySelector('.number-img').textContent = orderItem
                                        }
                                        if (orderItem > 30) {
                                            el.remove()
                                        }
                                        if (countItems >= 30) {
                                            __addMore.style.display = 'none'
                                            __.style.display = 'none'
                                        }  else  {
                                            __addMore.style.display = 'flex'
                                            __.style.display = 'none'
                                        }
                                        __addMore.style.order = countItems + 1
                                    });
                                }, 100);
                            })
                            let deg = 0
                            rotateImgAds.addEventListener('click', (f) => {
                                f.preventDefault()
                                deg += 90
                                el.style.setProperty('--rotate-img-articles', `rotate(${deg}deg)`) 
                            })
                            previewPDF.addEventListener('click', function(preview) {
                                console.log('Preview PDF Activo!!')
                                console.log(previewPDF.parentElement.parentElement)
                                previewPDF.parentElement.parentElement.querySelector('.preview-pdf').style.display = 'flex'
                            })
                            closePreviewPDF.addEventListener('click', function(closePreview) {
                                console.log('vale')
                                previewPDF.parentElement.parentElement.querySelector('.preview-pdf').style.display = 'none'
                            })
                        })
                    }, 100);
                }, 200);
            }, false);
            __addMore.addEventListener('drop', function(e) {
                let dataTrans = e.dataTransfer;
                let files = dataTrans.files;
                files = [...files]
                files.forEach(file => {
                    let imageType = /image.*/;
                     let PDFType = /application.pdf.*/;
                    if (file.type.match(imageType) || file.type.match(PDFType)) {
                        let url = 'HTTP/HTTPS URL TO SEND THE DATA TO';
                        let formData = new FormData();
                        formData.append('file', file);
                        // fetch(url, {
                        // 	method: 'put',
                        // 	body: formData
                        // })
                        // .then(response => response.json())
                        // .then(result => { console.log('Success:', result); })
                        // .catch(error => { console.error('Error:', error); });
                    } else {
                        console.error("Err...", file);
                    }
                });
                files.forEach(file => {
                    let imageType = /image.*/;
                     let PDFType = /application.pdf.*/;
                    if (file.type.match(imageType) || file.type.match(PDFType)) {
                        let fReader = new FileReader();
                        let gallery = __.parentElement.children[0];
                        console.log(gallery)
                        fReader.readAsDataURL(file);
                        console.log(file)
                        fReader.onloadend = function () {
                            let wrap = document.createElement('div');
                            let buttonsModify = document.createElement('div');
                            wrap.classList.add('column')
                            wrap.draggable = true
                            let numberImg = document.createElement('div')
                            numberImg.classList.add('number-img')
                           
                            buttonsModify.classList.add('actions-img-articles')
                            
                            if (file.type.match(PDFType)) {
                                let namePdf = file.name
                                console.log(URL.createObjectURL(file))
                                let namePdfRemasted = namePdf.length > 15 ? namePdf.slice(0, 15)+'... .pdf' : namePdf
                                wrap.style.setProperty('--bg-img-articles', `#0000`)
                                wrap.innerHTML = `
                                <div class="icon-pdf-preview">
                                    <i class="material-icons-outlined">picture_as_pdf</i>
                                    <span style="color: var(--color-text);">
                                        ${ namePdfRemasted } 
                                    </span>
                                </div>
                                
                                `
                                buttonsModify.innerHTML = `<div class="delete">
                                <i class="material-icons-outlined">delete_forever</i>
                                </div><div class="rotate" style="display: none;">
                                    <i class="material-icons-outlined">rotate_90_degrees_ccw</i>
                                </div>
                                <div class="preview">
                                    <i class="material-icons-outlined">visibility</i>
                                </div>
                               `
                               wrap.innerHTML += `<div class="preview-pdf">
                                    <embed src="${URL.createObjectURL(file)}" type="application/pdf" width="400" height="500">
                                    <button class="btn-primary-light mt-5">
                                        Cerrar Previsualización
                                    </button>
                                </div>`
                            } else {
                                buttonsModify.innerHTML = `<div class="delete">
                                    <i class="material-icons-outlined">delete_forever</i>
                                </div>
                                <div class="rotate">
                                    <i class="material-icons-outlined">rotate_90_degrees_ccw</i>
                                </div>
                                <div style="display: none;" class="preview">
                                    <i class="material-icons-outlined">visibility</i>
                                </div>`
                                wrap.innerHTML += `<div style="display: none;" class="preview-pdf">
                                    <embed src="${URL.createObjectURL(file)}" type="application/pdf" width="400" height="500">
                                    <button class="btn-primary-light mt-5">
                                        Cerrar Previsualización
                                    </button>
                                </div>`
                                wrap.style.setProperty('--bg-img-articles', `url(${fReader.result})`)
                            }
                            


                            gallery.appendChild(wrap).appendChild(numberImg);
                            gallery.appendChild(wrap).appendChild(buttonsModify);
                            document
                                .querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')
                                .forEach(col => {
                                    col.addEventListener('dragstart', function(e) {
                                        e.target.classList.add('dragging');
                                        dragSrcArticle4 = e.target;
                                        e.dataTransfer.effectAllowed = 'move';
                                        e.dataTransfer.setData('text/html', e.target.innerHTML);
                                    }, false);
                                    col.addEventListener('dragenter', function(e) {
                                        e.target.classList.add('over');
                                    }, false);
                                    col.addEventListener('dragover', function(e) {
                                        if (e.preventDefault) {
                                            e.preventDefault();
                                        }
                                        e.dataTransfer.dropEffect = 'move';
                                        return false;
                                    }, false);
                                    col.addEventListener('dragleave', function(e) {
                                        e.target.classList.remove('over');
                                    }, false);
                                    col.addEventListener('drop', function(e) {
                                        if (e.stopPropagation) {
                                            e.stopPropagation();
                                        }
                                        if (dragSrcArticle4 !== e.target) {
                                            let dragSrcOrder = dragSrcArticle4.style.order;
                                            dragSrcArticle4.style.order = e.target.style.order;
                                            e.target.style.order = dragSrcOrder;
                                            let toNumber = dragSrcArticle4.querySelector('.number-img').textContent
                                            dragSrcArticle4.querySelector('.number-img').textContent = e.target.querySelector('.number-img').textContent
                                            e.target.querySelector('.number-img').textContent = toNumber
                                        }
                                    
                                        return false;
                                    }, false);
                                    col.addEventListener('dragend', function(e) {
                                        document
                                            .querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')
                                            .forEach(col => {
                                                col.classList.remove('over');
                                            });
                                        e.target.classList.remove('dragging');
                                        return false;
                                    }, false);
                                });
                        }
                    } else {
                        console.error("Err... ||", file);
                    }
                });
                setTimeout(() => {
                    setTimeout(() => {
                        let itemsImg = [...__.parentElement.querySelectorAll('.galleryStep4Cv .column')]
                        const countItems = itemsImg.length
                        if (countItems == 0) {
                            __addMore.style.display = 'none'
                            __.style.display = 'flex'
                        }
                        itemsImg.map((el, index) => {
                            let orderItem = index + 1
                            el.style.order = orderItem
                            if (orderItem == 1) {
                                orderItem = 'Principal'
                                el.querySelector('.number-img').textContent = orderItem
                            } else {
                                el.querySelector('.number-img').textContent = orderItem
                            }
                            if (orderItem > 30) {
                                el.remove()
                            }
                            if (countItems >= 30) {
                                __addMore.style.display = 'none'
                                __.style.display = 'none'
                            }  else  {
                                __addMore.style.display = 'flex'
                                __.style.display = 'none'
                            }
                            __addMore.style.order = countItems + 1
                        });
                    }, 100);
                    setTimeout(() => {
                        let itemsImg = [...__.parentElement.querySelectorAll('.galleryStep4Cv .column')]
                        itemsImg.map((el, index) => {
                            const deleteImgAds = el.querySelector('.actions-img-articles .delete')
                            const rotateImgAds = el.querySelector('.actions-img-articles .rotate')
                            const previewPDF = el.querySelector('.actions-img-articles .preview')
                            const closePreviewPDF = el.querySelector('.preview-pdf .btn-primary-light')
                            console.log(closePreviewPDF)
                            
                            deleteImgAds.addEventListener('click', (x) => {
                                x.preventDefault();
                                el.remove();
                                setTimeout(() => {
                                    let itemsImg = [...__.parentElement.querySelectorAll('.galleryStep4Cv .column')]
                                    const countItems = itemsImg.length
                                    if (countItems == 0) {
                                        __addMore.style.display = 'none'
                                        __.style.display = 'flex'
                                    }
                                    itemsImg.map((el, index) => {
                                        let orderItem = index + 1
                                        el.style.order = orderItem
                                        if (orderItem == 1) {
                                            orderItem = 'Principal'
                                            el.querySelector('.number-img').textContent = orderItem
                                        } else {
                                            el.querySelector('.number-img').textContent = orderItem
                                        }
                                        if (orderItem > 30) {
                                            el.remove()
                                        }
                                        if (countItems >= 30) {
                                            __addMore.style.display = 'none'
                                            __.style.display = 'none'
                                        }  else  {
                                            __addMore.style.display = 'flex'
                                            __.style.display = 'none'
                                        }
                                        __addMore.style.order = countItems + 1
                                    });
                                }, 100);
                            })
                            let deg = 0
                            rotateImgAds.addEventListener('click', (f) => {
                                f.preventDefault()
                                deg += 90
                                el.style.setProperty('--rotate-img-articles', `rotate(${deg}deg)`) 
                            })
                            previewPDF.addEventListener('click', function(preview) {
                                console.log('Preview PDF Activo!!')
                                console.log(previewPDF.parentElement.parentElement)
                                previewPDF.parentElement.parentElement.querySelector('.preview-pdf').style.display = 'flex'
                            })
                            closePreviewPDF.addEventListener('click', function(closePreview) {
                                console.log('vale')
                                previewPDF.parentElement.parentElement.querySelector('.preview-pdf').style.display = 'none'
                            })
                        })
                    }, 100);
                }, 200);
                        
            }, false);

           
            // Start FilesUpload
            __input.addEventListener('change', (e) => {
                e.preventDefault()
                let files = e.target.files
                files = [...files]
                files.forEach(file => {
                    let imageType = /image.*/;
                     let PDFType = /application.pdf.*/;
                    if (file.type.match(imageType) || file.type.match(PDFType)) {
                        let url = 'HTTP/HTTPS URL TO SEND THE DATA TO';
                        let formData = new FormData();
                        formData.append('file', file);
                        // fetch(url, {
                        // 	method: 'put',
                        // 	body: formData
                        // })
                        // .then(response => response.json())
                        // .then(result => { console.log('Success:', result); })
                        // .catch(error => { console.error('Error:', error); });
                    } else {
                        console.error("Err...", file);
                    }
                });
                files.forEach(file => {
                    let imageType = /image.*/;
                     let PDFType = /application.pdf.*/;
                    if (file.type.match(imageType) || file.type.match(PDFType)) {
                        let fReader = new FileReader();
                        let gallery = __.parentElement.children[0];
                        console.log(gallery)
                        fReader.readAsDataURL(file);
                        console.log(file)
                        fReader.onloadend = function () {
                            let wrap = document.createElement('div');
                            let buttonsModify = document.createElement('div');
                            wrap.classList.add('column')
                            wrap.draggable = true
                            let numberImg = document.createElement('div')
                            numberImg.classList.add('number-img')
                           
                            buttonsModify.classList.add('actions-img-articles')
                            
                            if (file.type.match(PDFType)) {
                                let namePdf = file.name
                                console.log(URL.createObjectURL(file))
                                let namePdfRemasted = namePdf.length > 15 ? namePdf.slice(0, 15)+'... .pdf' : namePdf
                                wrap.style.setProperty('--bg-img-articles', `#0000`)
                                wrap.innerHTML = `
                                <div class="icon-pdf-preview">
                                    <i class="material-icons-outlined">picture_as_pdf</i>
                                    <span style="color: var(--color-text);">
                                        ${ namePdfRemasted } 
                                    </span>
                                </div>
                                
                                `
                                buttonsModify.innerHTML = `<div class="delete">
                                <i class="material-icons-outlined">delete_forever</i>
                                </div><div class="rotate" style="display: none;">
                                    <i class="material-icons-outlined">rotate_90_degrees_ccw</i>
                                </div>
                                <div class="preview">
                                    <i class="material-icons-outlined">visibility</i>
                                </div>
                               `
                               wrap.innerHTML += `<div class="preview-pdf">
                                    <embed src="${URL.createObjectURL(file)}" type="application/pdf" width="400" height="500">
                                    <button class="btn-primary-light mt-5">
                                        Cerrar Previsualización
                                    </button>
                                </div>`
                            } else {
                                buttonsModify.innerHTML = `<div class="delete">
                                    <i class="material-icons-outlined">delete_forever</i>
                                </div>
                                <div class="rotate">
                                    <i class="material-icons-outlined">rotate_90_degrees_ccw</i>
                                </div>
                                <div style="display: none;" class="preview">
                                    <i class="material-icons-outlined">visibility</i>
                                </div>`
                                wrap.innerHTML += `<div style="display: none;" class="preview-pdf">
                                    <embed src="${URL.createObjectURL(file)}" type="application/pdf" width="400" height="500">
                                    <button class="btn-primary-light mt-5">
                                        Cerrar Previsualización
                                    </button>
                                </div>`
                                wrap.style.setProperty('--bg-img-articles', `url(${fReader.result})`)
                            }
                            


                            gallery.appendChild(wrap).appendChild(numberImg);
                            gallery.appendChild(wrap).appendChild(buttonsModify);
                            document
                                .querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')
                                .forEach(col => {
                                    col.addEventListener('dragstart', function(e) {
                                        e.target.classList.add('dragging');
                                        dragSrcArticle4 = e.target;
                                        e.dataTransfer.effectAllowed = 'move';
                                        e.dataTransfer.setData('text/html', e.target.innerHTML);
                                    }, false);
                                    col.addEventListener('dragenter', function(e) {
                                        e.target.classList.add('over');
                                    }, false);
                                    col.addEventListener('dragover', function(e) {
                                        if (e.preventDefault) {
                                            e.preventDefault();
                                        }
                                        e.dataTransfer.dropEffect = 'move';
                                        return false;
                                    }, false);
                                    col.addEventListener('dragleave', function(e) {
                                        e.target.classList.remove('over');
                                    }, false);
                                    col.addEventListener('drop', function(e) {
                                        if (e.stopPropagation) {
                                            e.stopPropagation();
                                        }
                                        if (dragSrcArticle4 !== e.target) {
                                            let dragSrcOrder = dragSrcArticle4.style.order;
                                            dragSrcArticle4.style.order = e.target.style.order;
                                            e.target.style.order = dragSrcOrder;
                                            let toNumber = dragSrcArticle4.querySelector('.number-img').textContent
                                            dragSrcArticle4.querySelector('.number-img').textContent = e.target.querySelector('.number-img').textContent
                                            e.target.querySelector('.number-img').textContent = toNumber
                                        }
                                    
                                        return false;
                                    }, false);
                                    col.addEventListener('dragend', function(e) {
                                        document
                                            .querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')
                                            .forEach(col => {
                                                col.classList.remove('over');
                                            });
                                        e.target.classList.remove('dragging');
                                        return false;
                                    }, false);
                                });
                        }
                    } else {
                        console.error("Err... ||", file);
                    }
                });
                setTimeout(() => {
                    setTimeout(() => {
                        let itemsImg = [...__.parentElement.querySelectorAll('.galleryStep4Cv .column')]
                        const countItems = itemsImg.length
                        if (countItems == 0) {
                            __addMore.style.display = 'none'
                            __.style.display = 'flex'
                        }
                        itemsImg.map((el, index) => {
                            let orderItem = index + 1
                            el.style.order = orderItem
                            if (orderItem == 1) {
                                orderItem = 'Principal'
                                el.querySelector('.number-img').textContent = orderItem
                            } else {
                                el.querySelector('.number-img').textContent = orderItem
                            }
                            if (orderItem > 30) {
                                el.remove()
                            }
                            if (countItems >= 30) {
                                __addMore.style.display = 'none'
                                __.style.display = 'none'
                            }  else  {
                                __addMore.style.display = 'flex'
                                __.style.display = 'none'
                            }
                            __addMore.style.order = countItems + 1
                        });
                    }, 100);
                    setTimeout(() => {
                        let itemsImg = [...__.parentElement.querySelectorAll('.galleryStep4Cv .column')]
                        itemsImg.map((el, index) => {
                            const deleteImgAds = el.querySelector('.actions-img-articles .delete')
                            const rotateImgAds = el.querySelector('.actions-img-articles .rotate')
                            const previewPDF = el.querySelector('.actions-img-articles .preview')
                            const closePreviewPDF = el.querySelector('.preview-pdf .btn-primary-light')
                            console.log(closePreviewPDF)
                            
                            deleteImgAds.addEventListener('click', (x) => {
                                x.preventDefault();
                                el.remove();
                                setTimeout(() => {
                                    let itemsImg = [...__.parentElement.querySelectorAll('.galleryStep4Cv .column')]
                                    const countItems = itemsImg.length
                                    if (countItems == 0) {
                                        __addMore.style.display = 'none'
                                        __.style.display = 'flex'
                                    }
                                    itemsImg.map((el, index) => {
                                        let orderItem = index + 1
                                        el.style.order = orderItem
                                        if (orderItem == 1) {
                                            orderItem = 'Principal'
                                            el.querySelector('.number-img').textContent = orderItem
                                        } else {
                                            el.querySelector('.number-img').textContent = orderItem
                                        }
                                        if (orderItem > 30) {
                                            el.remove()
                                        }
                                        if (countItems >= 30) {
                                            __addMore.style.display = 'none'
                                            __.style.display = 'none'
                                        }  else  {
                                            __addMore.style.display = 'flex'
                                            __.style.display = 'none'
                                        }
                                        __addMore.style.order = countItems + 1
                                    });
                                }, 100);
                            })
                            let deg = 0
                            rotateImgAds.addEventListener('click', (f) => {
                                f.preventDefault()
                                deg += 90
                                el.style.setProperty('--rotate-img-articles', `rotate(${deg}deg)`) 
                            })
                            previewPDF.addEventListener('click', function(preview) {
                                console.log('Preview PDF Activo!!')
                                console.log(previewPDF.parentElement.parentElement)
                                previewPDF.parentElement.parentElement.querySelector('.preview-pdf').style.display = 'flex'
                            })
                            closePreviewPDF.addEventListener('click', function(closePreview) {
                                console.log('vale')
                                previewPDF.parentElement.parentElement.querySelector('.preview-pdf').style.display = 'none'
                            })
                        })
                    }, 100);
                }, 200);
            }); 
            __addMoreInput.addEventListener('change', (e) => {
                e.preventDefault()
                let files = e.target.files
                files = [...files]
                files.forEach(file => {
                    let imageType = /image.*/;
                     let PDFType = /application.pdf.*/;
                    if (file.type.match(imageType) || file.type.match(PDFType)) {
                        let url = 'HTTP/HTTPS URL TO SEND THE DATA TO';
                        let formData = new FormData();
                        formData.append('file', file);
                        // fetch(url, {
                        // 	method: 'put',
                        // 	body: formData
                        // })
                        // .then(response => response.json())
                        // .then(result => { console.log('Success:', result); })
                        // .catch(error => { console.error('Error:', error); });
                    } else {
                        console.error("Err...", file);
                    }
                });
                files.forEach(file => {
                    let imageType = /image.*/;
                     let PDFType = /application.pdf.*/;
                    if (file.type.match(imageType) || file.type.match(PDFType)) {
                        let fReader = new FileReader();
                        let gallery = __.parentElement.children[0];
                        console.log(gallery)
                        fReader.readAsDataURL(file);
                        console.log(file)
                        fReader.onloadend = function () {
                            let wrap = document.createElement('div');
                            let buttonsModify = document.createElement('div');
                            wrap.classList.add('column')
                            wrap.draggable = true
                            let numberImg = document.createElement('div')
                            numberImg.classList.add('number-img')
                           
                            
                            buttonsModify.classList.add('actions-img-articles')
                            
                            if (file.type.match(PDFType)) {
                                let namePdf = file.name
                                console.log(URL.createObjectURL(file))
                                let namePdfRemasted = namePdf.length > 15 ? namePdf.slice(0, 15)+'... .pdf' : namePdf
                                wrap.style.setProperty('--bg-img-articles', `#0000`)
                                wrap.innerHTML = `
                                <div class="icon-pdf-preview">
                                    <i class="material-icons-outlined">picture_as_pdf</i>
                                    <span style="color: var(--color-text);">
                                        ${ namePdfRemasted } 
                                    </span>
                                </div>`
                                buttonsModify.innerHTML = `<div class="delete">
                                <i class="material-icons-outlined">delete_forever</i>
                                </div><div class="rotate" style="display: none;">
                                    <i class="material-icons-outlined">rotate_90_degrees_ccw</i>
                                </div>
                                <div class="preview">
                                    <i class="material-icons-outlined">visibility</i>
                                </div>
                               `
                               wrap.innerHTML += `<div class="preview-pdf">
                                        <embed src="${URL.createObjectURL(file)}" type="application/pdf" width="400" height="500">
                                        <button class="btn-primary-light mt-5">
                                            Cerrar Previsualización
                                        </button>
                                    </div>`
                            } else {
                                buttonsModify.innerHTML = `<div class="delete">
                                    <i class="material-icons-outlined">delete_forever</i>
                                </div>
                                <div class="rotate">
                                    <i class="material-icons-outlined">rotate_90_degrees_ccw</i>
                                </div>
                                <div style="display: none;" class="preview">
                                    <i class="material-icons-outlined">visibility</i>
                                </div>`
                                wrap.innerHTML += `<div style="display: none;" class="preview-pdf">
                                    <embed src="${URL.createObjectURL(file)}" type="application/pdf" width="400" height="500">
                                    <button class="btn-primary-light mt-5">
                                        Cerrar Previsualización
                                    </button>
                                </div>`
                                wrap.style.setProperty('--bg-img-articles', `url(${fReader.result})`)
                            }


                            gallery.appendChild(wrap).appendChild(numberImg);
                            gallery.appendChild(wrap).appendChild(buttonsModify);
                            document
                                .querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')
                                .forEach(col => {
                                    col.addEventListener('dragstart', function(e) {
                                        e.target.classList.add('dragging');
                                        dragSrcArticle4 = e.target;
                                        e.dataTransfer.effectAllowed = 'move';
                                        e.dataTransfer.setData('text/html', e.target.innerHTML);
                                    }, false);
                                    col.addEventListener('dragenter', function(e) {
                                        e.target.classList.add('over');
                                    }, false);
                                    col.addEventListener('dragover', function(e) {
                                        if (e.preventDefault) {
                                            e.preventDefault();
                                        }
                                        e.dataTransfer.dropEffect = 'move';
                                        return false;
                                    }, false);
                                    col.addEventListener('dragleave', function(e) {
                                        e.target.classList.remove('over');
                                    }, false);
                                    col.addEventListener('drop', function(e) {
                                        if (e.stopPropagation) {
                                            e.stopPropagation();
                                        }
                                        if (dragSrcArticle4 !== e.target) {
                                            let dragSrcOrder = dragSrcArticle4.style.order;
                                            dragSrcArticle4.style.order = e.target.style.order;
                                            e.target.style.order = dragSrcOrder;
                                            let toNumber = dragSrcArticle4.querySelector('.number-img').textContent
                                            dragSrcArticle4.querySelector('.number-img').textContent = e.target.querySelector('.number-img').textContent
                                            e.target.querySelector('.number-img').textContent = toNumber
                                        }
                                    
                                        return false;
                                    }, false);
                                    col.addEventListener('dragend', function(e) {
                                        document
                                            .querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')
                                            .forEach(col => {
                                                col.classList.remove('over');
                                            });
                                        e.target.classList.remove('dragging');
                                        return false;
                                    }, false);
                                });
                        }
                    } else {
                        console.error("Err... ||", file);
                    }
                });
                setTimeout(() => {
                    setTimeout(() => {
                        let itemsImg = [...__.parentElement.querySelectorAll('.galleryStep4Cv .column')]
                        const countItems = itemsImg.length
                        if (countItems == 0) {
                            __addMore.style.display = 'none'
                            __.style.display = 'flex'
                        }
                        itemsImg.map((el, index) => {
                            let orderItem = index + 1
                            el.style.order = orderItem
                            if (orderItem == 1) {
                                orderItem = 'Principal'
                                el.querySelector('.number-img').textContent = orderItem
                            } else {
                                el.querySelector('.number-img').textContent = orderItem
                            }
                            if (orderItem > 30) {
                                el.remove()
                            }
                            if (countItems >= 30) {
                                __addMore.style.display = 'none'
                                __.style.display = 'none'
                            }  else  {
                                __addMore.style.display = 'flex'
                                __.style.display = 'none'
                            }
                            __addMore.style.order = countItems + 1
                        });
                    }, 100);
                    setTimeout(() => {
                        let itemsImg = [...__.parentElement.querySelectorAll('.galleryStep4Cv .column')]
                        itemsImg.map((el, index) => {
                            const deleteImgAds = el.querySelector('.actions-img-articles .delete')
                            const rotateImgAds = el.querySelector('.actions-img-articles .rotate')
                            const previewPDF = el.querySelector('.actions-img-articles .preview')
                            const closePreviewPDF = el.querySelector('.preview-pdf .btn-primary-light')
                            console.log(closePreviewPDF)
                            
                            deleteImgAds.addEventListener('click', (x) => {
                                x.preventDefault();
                                el.remove();
                                setTimeout(() => {
                                    let itemsImg = [...__.parentElement.querySelectorAll('.galleryStep4Cv .column')]
                                    const countItems = itemsImg.length
                                    if (countItems == 0) {
                                        __addMore.style.display = 'none'
                                        __.style.display = 'flex'
                                    }
                                    itemsImg.map((el, index) => {
                                        let orderItem = index + 1
                                        el.style.order = orderItem
                                        if (orderItem == 1) {
                                            orderItem = 'Principal'
                                            el.querySelector('.number-img').textContent = orderItem
                                        } else {
                                            el.querySelector('.number-img').textContent = orderItem
                                        }
                                        if (orderItem > 30) {
                                            el.remove()
                                        }
                                        if (countItems >= 30) {
                                            __addMore.style.display = 'none'
                                            __.style.display = 'none'
                                        }  else  {
                                            __addMore.style.display = 'flex'
                                            __.style.display = 'none'
                                        }
                                        __addMore.style.order = countItems + 1
                                    });
                                }, 100);
                            })
                            let deg = 0
                            rotateImgAds.addEventListener('click', (f) => {
                                f.preventDefault()
                                deg += 90
                                el.style.setProperty('--rotate-img-articles', `rotate(${deg}deg)`) 
                            })
                            previewPDF.addEventListener('click', function(preview) {
                                console.log('Preview PDF Activo!!')
                                console.log(previewPDF.parentElement.parentElement)
                                previewPDF.parentElement.parentElement.querySelector('.preview-pdf').style.display = 'flex'
                            })
                            closePreviewPDF.addEventListener('click', function(closePreview) {
                                console.log('vale')
                                previewPDF.parentElement.parentElement.querySelector('.preview-pdf').style.display = 'none'
                            })
                        })
                    }, 100);
                }, 200);
            }); 
            // End FilesUpload
            // END ONLY DRAG AND DROP
        });
        // End Only drop
        // Function Inputs Forms 
        let inputsFormUser = [...document.querySelectorAll('.input-form.user-data input')]
        inputsFormUser.map(el => {
            let span = el.parentElement.children[0]
            el.addEventListener('focus', (e) => {
                span.style.top = '-15px'
                span.style.color = 'mediumvioletred'
            })
            el.addEventListener('blur', (e) => {
                if (el.value.trim( ).length == 0) {
                    span.style.top = '8px'
                    span.style.color = 'silver'
                } else {
                    span.style.top = '-15px'
                    span.style.color = 'mediumvioletred'
                }
            })
        })    
        // End function inputs forms

          // Process All fields
          if (validationsFunctionsStep4 != undefined) {
            allFieldsDinamic.map((field, index) => {
                validationsFunctionsStep4.map((validation, index) => {
                    if (validation.field == field.attributes.field.textContent) {
                        if (validation.isActive == '0') {
                            field.attributes.isActive.textContent = validation.isActive
                            field.style.display = 'none'
                        } else {
                            field.attributes.isActive.textContent = validation.isActive
                            field.style.display = 'block'
                        }
                    }
                })
            })
            // console.log(validationsFunctionsStep4,'Este es pana')
        }

       
    }, 200);
    // mainItemsExpandMoreOptions4.innerHTML += item;
}