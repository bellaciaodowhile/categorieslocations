console.log('Expand More')


const mainItemsExpandMoreOptions = document.querySelector('.step-3 .items-expand-more-options')

function itemsExpandMoreFunc() {
    const itemsExpandMore = [...document.querySelectorAll('.step-3 .item-expand-more')]
    
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
                    triggerEditItemExpandMore.style.rotate = '180deg'
                    triggerEditItemExpandMore.style.transform = 'rotateX(180deg)'
                    triggerEditItemExpandMore.children[0].textContent = 'save'
                    input.style.fontWeight = 'normal'
                    input.disabled = false
                    // New
                    triggerEditItemExpandMore.parentElement.parentElement.querySelector('.item span').style.background = '#f5f5f5'
                    triggerEditItemExpandMore.parentElement.children[0].style.display = 'none'
                    triggerEditItemExpandMore.parentElement.children[2].style.display = 'none'
                    triggerEditItemExpandMore.parentElement.style.paddingRight = '0'
                    triggerEditItemExpandMore.parentElement.style.display = 'block'
                    triggerEditItemExpandMore.style.fontSize = '2em'
                    triggerEditItemExpandMore.style.width = '100px'
                    triggerEditItemExpandMore.style.height = '72.5px'
                    triggerEditItemExpandMore.style.background = 'var(--pink)'
                    triggerEditItemExpandMore.style.borderRadius = '6px 0 0 6px'
                } else {
                    triggerEditItemExpandMore.parentElement.parentElement.querySelector('.item span').style.background = '#fff'
                    triggerEditItemExpandMore.style.rotate = '0deg'
                    triggerEditItemExpandMore.style.transform = 'rotateX(0deg)'
                    triggerEditItemExpandMore.children[0].textContent = 'drive_file_rename_outline'
                    input.style.fontWeight = 'bold'
                    input.disabled = true
                    // New
                    triggerEditItemExpandMore.parentElement.children[0].style.display = 'flex'
                    triggerEditItemExpandMore.parentElement.children[2].style.display = 'flex'
                    triggerEditItemExpandMore.parentElement.style.paddingRight = '20px'
                    triggerEditItemExpandMore.parentElement.style.display = 'flex'
                    triggerEditItemExpandMore.style.fontSize = '1.6em'
                    triggerEditItemExpandMore.style.width = '100%'
                    triggerEditItemExpandMore.style.height = '100%'
                    triggerEditItemExpandMore.style.background = 'var(--color-text)'
                    triggerEditItemExpandMore.style.borderRadius = '6px'
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
            addOtherOptionExpandMore()
        })
    });
}

itemsExpandMoreFunc()
let indexItemExpand = 1

// Start Validations
let validationsFunctionsStep3;
function validationsArrStep3(x) {
    validationsFunctionsStep3 = x
}

// End Validations






function addOtherOptionExpandMore() {
    let deleteBtn = indexItemExpand >= 1 ? `<div class="btn-pink only-icon delete">
        <i class="material-icons-outlined" style="padding: 0 5px;">close</i>
    </div>` : ''
    let item = /*html*/ `
        <div class="main-item-expand-more" item="${ indexItemExpand += 1 }">
            <div class="item">
                <span>${ indexItemExpand }</span><input type="text" value="Trabajo realizado" disabled>
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
            <div class="field" field="cargo_threeCv" status="unlock" isActive="1">
                <div class="grid-inputs-2">
                    <div class="col">
                        <h4 class="subtitle normal"><strong>Cargo</strong></h4>
                        <div class="input-form user-data normal-my">
                            <label class="txt-field icon-right">
                                <span class="input-normal"></span>
                                <input type="text" name="cargoDesempenado" placeholder="Cargo desempeñado" />
                            </label>
                        </div>
                    </div>
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
                </div>
                <h4 class="subtitle normal"><strong>Otros cargos desempeñados en la empresa</strong></h4>
                <div id="mainSurveysActivitysCv" class="main-surveys activity-importants">
                    <div class="option-survey fisrt d-flex column">
                        <div class="d-flex">
                            <i class="material-icons icon-drag">drag_indicator</i>
                            <div class="input-form user-data group-my">
                                <label class="txt-field">
                                    <input placeholder="Indica otro cargo desempeñado" type="text"
                                        name="linkVideoName" class="color-text" />
                                </label>
                            </div>
                            <div class="btn-light addMoreOptionActivity">
                                <i class="material-icons-outlined">add_circle_outline</i>
                            </div>
                        </div>
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
                </div>
            </div>
            <div class="field" field="tipo_contrato_threeCv" status="unlock" isActive="1">
                <h4 class="subtitle normal"><strong>Tipo de contrato</strong></h4>
                <div class="radio-wrapper articles normal-my">
                    <input type="radio" name="typeContract" id="typeContract-1" checked>
                    <input type="radio" name="typeContract" id="typeContract-2">
                    <input type="radio" name="typeContract" id="typeContract-3">
                    <label for="typeContract-1" class="option typeContract-1">
                        <div class="dot"></div>
                        <span>Contrato temporal</span>
                    </label>
                    <label for="typeContract-2" class="option typeContract-2">
                        <div class="dot"></div>
                        <span>Contrato fin de obra</span>
                    </label>
                    <label for="typeContract-3" class="option typeContract-3">
                        <div class="dot"></div>
                        <span>Contrato indefinido</span>
                    </label>
                </div>
            </div>
            <div class="grid-inputs-2">
                <div class="col field" field="horas_mes_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Horas trabajadas al mes</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field">
                            <span class="input-normal"></span>
                            <input type="number" name="linkVideoName" placeholder="Especifica el número de horas" />
                        </label>
                    </div>
                </div>
                <div class="col field" field="nombre_empresa_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Nombre de la empresa</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field">
                            <span class="input-normal"></span>
                            <input type="text" name="linkVideoName"
                                placeholder="Especifica el nombre de la empresa" />
                        </label>
                    </div>
                </div>
                <div class="col field" field="direccion_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Dirección</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field icon-right">
                            <span class="input-normal"></span>
                            <input type="text" name="linkVideoName" placeholder="Especifica la dirección" />
                            <i class="icon-right material-icons-outlined color-pink direction-place pointer">place</i>
                        </label>
                    </div>
                </div>
                <div class="col field" field="direccion2_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Dirección</strong> <small>(Línea 2)</small></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field">
                            <span class="input-normal"></span>
                            <input type="text" name="linkVideoName" placeholder="Especifica datos adicionales" />
                        </label>
                    </div>
                </div>
                <div class="col field" field="codigo_postal_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Código postal</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field">
                            <span class="input-normal"></span>
                            <input type="number" name="linkVideoName" placeholder="Especifica el código postal" />
                        </label>
                    </div>
                </div>
                <div class="col field" field="poblacion_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Población</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field">
                            <span class="input-normal"></span>
                            <input type="text" name="linkVideoName" placeholder="Especifica la población" />
                        </label>
                    </div>
                </div>
                <div class="col field" field="provincia_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Provincia</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field">
                            <span class="input-normal"></span>
                            <input type="text" name="linkVideoName" placeholder="Especifica la provincia" />
                        </label>
                    </div>
                </div>
                <div class="col field" field="sitio_web_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Sitio web de la empresa</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field icon-right">
                            <span class="input-normal"></span>
                            <input type="text" name="linkVideoName" placeholder="Especifica el sitio web" />
                            <i class="icon-right material-icons-outlined">link</i>
                        </label>
                    </div>
                </div>
            </div>
            <div class="field" field="logotipo_threeCv" status="unlock" isActive="1">
                <h4 class="subtitle normal"><strong>Logotipo de la empresa</strong></h4>
                <div class="grid-section-video">
                    <div class="main-file-upload-logo-cv item${ indexItemExpand }">
                        <div class="galleryLogoCv item1"></div>
                        <div class="dropBoxLogoCv item1">
                            <img src="${BASE_URL}Assets/img/app/gloobal-jardins-logo.png" alt="Frances">
                            <p class="title-drag">Arrastra un logo aquí</p>
                            <p class="subtitle-drag">- o -</p>
                            <form class="imgUploader" style="display: flex; justify-content: center;">
                                <input type="file" id="imgUploadLogoCv${ indexItemExpand }" accept="image/*"
                                    onchange="filesTestMe(this.files)" style="display: none;">
                                <label class="button" for="imgUploadLogoCv${ indexItemExpand }">Seleccionalo desde tu ordenador</label>
                            </form>
                        </div>
                    </div>
                    <section>
                        <p>Incorporar el logotipo de la empresa en la que has trabajado permitirá al evaluador ver
                            un rasgo de minuciosidad en tu caracter y aparte poder valorar a su vez la relevancia de
                            la empresa para la que trabajaste.</p>

                        <p>Parece un elemento subjetivo y de poca importancia pero el ser humano reacciona
                            positivamente de manera inconsciente a este tipo de estímulos visuales y relevancia.</p>
                    </section>
                </div>
            </div>
            <div class="grid-inputs-2">
                <div class="col field" field="telefonoEmpresa_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Teléfono de la empresa</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field input-line icon-right icon-left">
                            <span></span>
                            <input type="number" name="linkVideoName"
                                placeholder="Especifica el teléfono de la empresa"/ maxLength="12">
                            <i class="icon-right material-icons">phone</i>
                            <i class="icon-left">
                                <img src="${BASE_URL}Assets/img/lang/flag-fr.jpg"" alt=" img">
                            </i>
                        </label>
                    </div>
                </div>
                <div class="col field" field="emailEmpresa_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Email de la empresa</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field icon-right">
                            <span class="input-normal"></span>
                            <input type="text" name="linkVideoName"
                                placeholder="Especifica el email de la empresa" />
                            <i class="icon-right material-icons-outlined">email</i>
                        </label>
                    </div>
                </div>
                <div class="col field" field="nombreSupervisor_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Nombre de tu supervisor</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field">
                            <span class="input-normal"></span>
                            <input type="text" name="linkVideoName"
                                placeholder="Especifica el nombre de tu supervisor" />
                        </label>
                    </div>
                </div>
                <div class="col field" field="apellidoSupervisor_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Apellido de tu supervisor</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field">
                            <span class="input-normal"></span>
                            <input type="text" name="linkVideoName"
                                placeholder="Especifica el apellido de tu supervisor" />
                        </label>
                    </div>
                </div>
                <div class="col field" field="telefonoSupervisor_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Teléfono de tu supervisor</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field input-line icon-right icon-left">
                            <span></span>
                            <input type="number" name="linkVideoName"
                                placeholder="Especifica el teléfono de tu supervisor"/ maxLength="12">
                            <i class="icon-right material-icons">phone</i>
                            <i class="icon-left">
                                <img src="${BASE_URL}Assets/img/lang/flag-fr.jpg"" alt=" img">
                            </i>
                        </label>
                    </div>
                </div>
                <div class="col field" field="emailSupervisor_threeCv" status="unlock" isActive="1">
                    <h4 class="subtitle normal"><strong>Email de tu supervisor</strong></h4>
                    <div class="input-form user-data normal-my">
                        <label class="txt-field icon-right">
                            <span class="input-normal"></span>
                            <input type="text" name="linkVideoName"
                                placeholder="Especifica el email de tu supervisor" />
                            <i class="icon-right material-icons-outlined">email</i>
                        </label>
                    </div>
                </div>
            </div>

            <div class="field" field="motivoBaja_threeCv" status="unlock" isActive="1">
                <h4 class="subtitle normal"><strong>Motivo de la baja</strong></h4>
                <div class="radio-wrapper articles normal-my">
                    <input type="radio" name="motivoBaja" id="motivoBaja-1" checked>
                    <input type="radio" name="motivoBaja" id="motivoBaja-2">
                    <input type="radio" name="motivoBaja" id="motivoBaja-3">
                    <input type="radio" name="motivoBaja" id="motivoBaja-4">
                    <input type="radio" name="motivoBaja" id="motivoBaja-5">
                    <label for="motivoBaja-1" class="option motivoBaja-1">
                        <div class="dot"></div>
                        <span>Fin de contrato</span>
                    </label>
                    <label for="motivoBaja-2" class="option motivoBaja-2">
                        <div class="dot"></div>
                        <span>Despido procedente</span>
                    </label>
                    <label for="motivoBaja-3" class="option motivoBaja-3">
                        <div class="dot"></div>
                        <span>Despido improcedente</span>
                    </label>
                    <label for="motivoBaja-4" class="option motivoBaja-4">
                        <div class="dot"></div>
                        <span>Motivos personales</span>
                    </label>
                    <label for="motivoBaja-5" class="option motivoBaja-5">
                        <div class="dot"></div>
                        <span>Otros</span>
                    </label>
                </div>
            </div>
            <div class="field" field="observaciones_threeCv" status="unlock" isActive="1">
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
        mainItemsExpandMoreOptions.appendChild(div)

    setTimeout(() => {
        let addItems = [...div.querySelectorAll('.more-expand-item')]
        let delItems = [...div.querySelectorAll('.delete')]
        let expandMore = [...div.querySelectorAll('.expand')]
        let editItem = [...div.querySelectorAll('.edit')]
        let directionPlace = [...div.querySelectorAll('.direction-place')]
        let typeContract = [...div.querySelectorAll('.typeContract')]
        let motivoDeLaBaja = [...div.querySelectorAll('.motivoBaja')]
        let allFieldsDinamic = [...div.querySelectorAll('.field')] // Selected All Fields Dinamic
        editorMainFunction('step-3')

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






        addItems.map(el => { el.onclick = addOtherOptionExpandMore })
        delItems.map(el => { 
            el.onclick = () => {
                if (confirm('¿Está seguro de eliminar este trabajo realizado?')) {
                    el.parentElement.parentElement.parentElement.remove()
                    indexItemExpand -= 1
                    // Reload Numbers Position
                    let items = [...document.querySelectorAll('.step-3 .item-expand-more')]
                    items.map((item, index) => {
                        let reloadNumbersSpan = item.children[0].children[0].children[0]
                        reloadNumbersSpan.textContent = `${index + 1}`
                    })
                } 
            } 
        })
        directionPlace.map(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const mainMapDirection = document.querySelector('.step-3 .main-map-direction')
                mainMapDirection.style.display = 'flex'
            })
        })
        expandMore.map(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                let content = el.parentElement.parentElement.parentElement.children[1]
                let expand = el.parentElement.parentElement.parentElement.children[0]
                let itemsExpand = [...document.querySelectorAll('.step-3 .item-expand-more')]
                if (content.style.display == '' || content.style.display == 'none') {
                    content.style.display = 'block'
                    el.style.rotate = '180deg'
                } else {
                    content.style.display = 'none'
                    el.style.rotate = '0deg'
                }
            })
        })
         // Tipos de contrato
        typeContract.map((itemContract, indexItemContract) => {
            itemContract.addEventListener('click', (e) => {
                e.preventDefault();
                typeContract.map((itemContractDentro, indexContractDentro) => {
                    if (indexItemContract == indexContractDentro) {
                        itemContract.children[0].style.background = colorPrimaryLight
                        itemContract.children[1].style.fontWeight = 'bold'
                        itemContract.children[0].style.transition = 'var(--trs)'
                        itemContract.children[1].style.transition = 'var(--trs)'
                    } else {
                        itemContractDentro.children[0].style.background = '#0000'
                        itemContractDentro.children[1].style.fontWeight = 'normal'
                    }
                })
            })
        })
         // Motivo de la Baja
        motivoDeLaBaja.map((itemContract, indexItemContract) => {
            itemContract.addEventListener('click', (e) => {
                e.preventDefault();
                motivoDeLaBaja.map((itemContractDentro, indexContractDentro) => {
                    if (indexItemContract == indexContractDentro) {
                        itemContract.children[0].style.background = colorPrimaryLight
                        itemContract.children[1].style.fontWeight = 'bold'
                        itemContract.children[0].style.transition = 'var(--trs)'
                        itemContract.children[1].style.transition = 'var(--trs)'
                    } else {
                        itemContractDentro.children[0].style.background = '#0000'
                        itemContractDentro.children[1].style.fontWeight = 'normal'
                    }
                })
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
        // More Activity
        let addMoreOptionActivityImportants = [...document.querySelectorAll('.step-3 .main-surveys.activity-importants .option-survey .addMoreOptionActivity')]
        addMoreOptionActivityImportants.map((el, index) => {
            let parent = el.parentElement.parentElement.parentElement
            el.addEventListener('click', (e) => {
                parentAddMoreActivity()
            })
            function parentAddMoreActivity() {
                let item = `
                <div class="d-flex">
                    <i class="material-icons icon-drag">drag_indicator</i>
                    <div class="input-form user-data group-my">
                        <label class="txt-field">
                            <input placeholder="Indica otro cargo desempeñado" type="text" name="linkVideoName"
                                class="color-text" />
                        </label>
                    </div>
                    <div class="d-flex buttons">
                        <div class="btn-light addMoreOptionActivity">
                            <i class="material-icons-outlined">add_circle_outline</i>
                        </div>
                        <div class="btn-pink" onclick="this.parentElement.parentElement.parentElement.remove()">
                            <i class="material-icons-outlined">close</i>
                        </div>
                    </div>
                </div>
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
                </div>`
                let div = document.createElement('div')
                div.classList.add('option-survey', 'fisrt', 'd-flex', 'column', 'card-other')
                div.innerHTML = item
                div.children[0].children[2].children[0].onclick = parentAddMoreActivity
                parent.appendChild(div)
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
            }
        })

        // Process All fields
        if (validationsFunctionsStep3 != undefined) {
            allFieldsDinamic.map((field, index) => {
                validationsFunctionsStep3.map((validation, index) => {
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
            // console.log(validationsFunctionsStep3,'Este es pana')
        }
        // Upload Logo
        // ONLY DRAG AND DROP----------------------------------------------------------------------------
            // ONLY DRAG AND DROP----------------------------------------------------------------------------
        let dragSrcLogoCv = undefined;
        // DROPBOX AND INPUT FILE ---------------------------------------------
        ;





        let mainFileUploadLogoCvAll = [...document.querySelectorAll(`.step-3 .main-file-upload-logo-cv .dropBoxLogoCv`)]

        mainFileUploadLogoCvAll.map((__, index) => {

            
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
            __.addEventListener(evt, function(e) {
                e.preventDefault();
                e.stopPropagation();
            }, false);
        });
        ['dragenter', 'dragover'].forEach(evt => {
            __.addEventListener(evt, function(e) {
                __.classList.add('hover');
            }, false);
        });
        ['dragleave', 'drop'].forEach(evt => {
            __.addEventListener(evt, function(e) {
                __.classList.remove('hover');
            }, false);
        });

        __.addEventListener('drop', function(e) {
            let dataTrans = e.dataTransfer;
            let files = dataTrans.files;
            files = [...files]
            files.forEach(file => {
                let imageType = /image.*/;
                if (file.type.match(imageType)) {
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
            if (file.type.match(imageType)) {
                let fReader = new FileReader();
                console.log('fReader')
                let gallery = __.parentElement.children[0];
                fReader.readAsDataURL(file);
                fReader.onloadend = function () {
                    let wrap = document.createElement('div');
                    let buttonsModify = document.createElement('div');
                    wrap.classList.add('column')
                    wrap.draggable = true
                    let numberImg = document.createElement('div')
                    numberImg.classList.add('number-img')
                    wrap.style.setProperty('--bg-img-logoCv', `url(${fReader.result})`)
                    buttonsModify.classList.add('actions-img-logoCv')
                    buttonsModify.innerHTML = `<div class="delete">
                        <i class="material-icons-outlined">delete_forever</i>
                    </div>
                    <div class="rotate">
                        <i class="material-icons-outlined">rotate_90_degrees_ccw</i>
                    </div>`
                    gallery.appendChild(wrap).appendChild(numberImg);
                    gallery.appendChild(wrap).appendChild(buttonsModify);
                    document
                        .querySelectorAll(`.step-3 .main-file-upload-logo-cv .galleryLogoCv .column`)
                        .forEach(col => {
                            col.addEventListener('dragstart', function() {
                                e.target.classList.add('dragging');
                                dragSrcLogoCv = e.target;
                                e.dataTransfer.effectAllowed = 'move';
                                e.dataTransfer.setData('text/html', e.target.innerHTML);
                            }, false);
                            col.addEventListener('dragenter', function() {
                                e.target.classList.add('over');
                            }, false);
                            col.addEventListener('dragover', function() {
                                if (e.preventDefault) {
                                    e.preventDefault();
                                }
                                e.dataTransfer.dropEffect = 'move';
                                return false;
                            }, false);
                            col.addEventListener('dragleave', function() {
                                e.target.classList.remove('over');
                            }, false);
                            col.addEventListener('drop', function() {
                                if (e.stopPropagation) {
                                    e.stopPropagation();
                                }
                                if (dragSrcLogoCv !== e.target) {
                                    let dragSrcOrder = dragSrcLogoCv.style.order;
                                    dragSrcLogoCv.style.order = e.target.style.order;
                                    e.target.style.order = dragSrcOrder;
                                    let toNumber = dragSrcLogoCv.querySelector('.number-img').textContent
                                    dragSrcLogoCv.querySelector('.number-img').textContent = e.target.querySelector('.number-img').textContent
                                    e.target.querySelector('.number-img').textContent = toNumber
                                }
                            
                                return false;
                            }, false);
                            col.addEventListener('dragend', function() {
                                document
                                    .querySelectorAll(`.step-3 .main-file-upload-logo-cv .galleryLogoCv .column`)
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
            // Primera llamada
            setTimeout(() => {
                setTimeout(() => {
                    let itemsImg = [...__.parentElement.querySelectorAll(`.galleryLogoCv .column`)]
                    console.log(itemsImg)
                    const countItems = itemsImg.length
                    console.log(countItems, 'primera Este es el valor ============================================================ ')

                    itemsImg.map((el, index) => {
                        let orderItem = index + 1
                        el.style.order = orderItem
                        if (orderItem == 1) {
                            orderItem = 'Logo'
                            el.querySelector('.number-img').textContent = orderItem
                        }
                        if (orderItem > 1) { el.remove() }
                    });
                    if (countItems >= 1) { __.style.display = 'none' } 
                }, 200);
                setTimeout(() => {
                    let itemsImg = [...__.parentElement.querySelectorAll(`.galleryLogoCv .column`)]
                    itemsImg.map((el, index) => {
                        const deleteImgAds = el.querySelector('.actions-img-logoCv .delete')
                        const rotateImgAds = el.querySelector('.actions-img-logoCv .rotate')
                        deleteImgAds.addEventListener('click', (x) => {
                            x.preventDefault();
                            el.remove();
                            inputFileLogo.value = ''
                            setTimeout(() => {
                                let itemsImg = [...__.parentElement.querySelectorAll(`.galleryLogoCv .column`)]
                                const countItems = itemsImg.length
                                if (countItems == 0) {
                                    __.style.display = 'flex'
                                }
                                itemsImg.map((el, index) => {
                                    let orderItem = index + 1
                                    el.style.order = orderItem
                                    if (orderItem == 1) {
                                        orderItem = 'Logo'
                                        el.querySelector('.number-img').textContent = orderItem
                                    }
                                    if (orderItem > 1) { el.remove() }
                                });
                                if (countItems >= 1) { __.style.display = 'none' } 
                            }, 100);
                        })
                        let deg = 0
                        rotateImgAds.addEventListener('click', (f) => {
                            f.preventDefault()
                            deg += 90
                            el.style.setProperty('--rotate-img-logoCv', `rotate(${deg}deg)`) 
                        })
                    })
                }, 100);
            }, 200);
        }, false);
        
        // Inputs activando el change, por eso se repite esta instrucciíon
        let inputFileLogo = __.querySelector('input')
        inputFileLogo.addEventListener('change', (e) => {
            e.preventDefault()
            // console.log(e.target.files)
            let files = e.target.files
            files = [...files]
            files.forEach(file => {
                let imageType = /image.*/;
                if (file.type.match(imageType)) {
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
            if (file.type.match(imageType)) {
                let fReader = new FileReader();
                console.log('fReader')
                // 
                let gallery = __.parentElement.children[0];
                console.log(gallery)
                fReader.readAsDataURL(file);
                fReader.onloadend = function () {
                    let wrap = document.createElement('div');
                    let buttonsModify = document.createElement('div');
                    wrap.classList.add('column')
                    wrap.draggable = true
                    let numberImg = document.createElement('div')
                    numberImg.classList.add('number-img')
                    numberImg.textContent = 'Logo'
                    wrap.style.setProperty('--bg-img-logoCv', `url(${fReader.result})`)
                    buttonsModify.classList.add('actions-img-logoCv')
                    buttonsModify.innerHTML = `<div class="delete">
                        <i class="material-icons-outlined">delete_forever</i>
                    </div>
                    <div class="rotate">
                        <i class="material-icons-outlined">rotate_90_degrees_ccw</i>
                    </div>`
                    gallery.appendChild(wrap).appendChild(numberImg);
                    gallery.appendChild(wrap).appendChild(buttonsModify);
                }
            } else {
                console.error("Err... ||", file);
            }
            });
            // Segunda llamada
            setTimeout(() => {
                setTimeout(() => {
                    let itemsImg = [...__.parentElement.querySelectorAll(`.galleryLogoCv .column`)]
                    console.log(itemsImg)
                    const countItems = itemsImg.length
                    console.log(countItems, 'segunda Este es el valor ============================================================ ')

                    itemsImg.map((el, index) => {
                        let orderItem = index + 1
                        el.style.order = orderItem
                        if (orderItem == 1) {
                            orderItem = 'Logo'
                            el.querySelector('.number-img').textContent = orderItem
                        }
                        if (orderItem > 1) { el.remove() }
                        
                    });
                    if (countItems >= 1) { __.style.display = 'none' } 
                }, 200);
                setTimeout(() => {
                    let itemsImg = [...__.parentElement.querySelectorAll(`.galleryLogoCv .column`)]
                    itemsImg.map((el, index) => {
                        const deleteImgAds = el.querySelector('.actions-img-logoCv .delete')
                        const rotateImgAds = el.querySelector('.actions-img-logoCv .rotate')
                        deleteImgAds.addEventListener('click', (x) => {
                            x.preventDefault();
                            el.remove();
                            inputFileLogo.value = ''
                            setTimeout(() => {
                                let itemsImg = [...__.parentElement.querySelectorAll(`.galleryLogoCv .column`)]
                                const countItems = itemsImg.length
                                console.log(countItems)
                                if (countItems == 0) {
                                    __.style.display = 'flex'
                                }
                                itemsImg.map((el, index) => {
                                    let orderItem = index + 1
                                    el.style.order = orderItem
                                    if (orderItem == 1) {
                                        orderItem = 'Logo'
                                        el.querySelector('.number-img').textContent = orderItem
                                    }
                                    if (orderItem > 1) { el.remove() }
                                });
                                if (countItems >= 1) { __.style.display = 'none' } 
                            }, 100);
                        })
                        let deg = 0
                        rotateImgAds.addEventListener('click', (f) => {
                            f.preventDefault()
                            deg += 90
                            el.style.setProperty('--rotate-img-logoCv', `rotate(${deg}deg)`) 
                        })
                    })
                }, 100);
            }, 200);
        })

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
        // End functio inputs forms
    
    }, 200);
    // mainItemsExpandMoreOptions.innerHTML += item;
    // Sortable
    for (var i = 0; i < mainSurveysActivitysCv.length; i++) {
        new Sortable(mainSurveysActivitysCv[i], {
            group: 'nested',
            animation: 150,
            fallbackOnBody: true,
            swapThreshold: 0.65
        });
    }
}

