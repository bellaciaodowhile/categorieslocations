<div class="container-general-gj8 create-filters">
    <h2 class="h2-title">Crea gratis tu Curriculum Vitae</h2>
    <h4 class="subtitle small"><span class="step-cv-number">1</span>/1: <span class="current-step-name">Filtros de
            Búsqueda</span></h4>
    <form method="POST" id="form-filters">
        <div class="bars-steps-gj8">
            <div class="bar-gj8 parent-tooltip-bar-gj8 active step-trigger" step="1">
                <div class="tooltip-bar-gj8">
                    <i class="material-icons-outlined">search</i>
                    <span>Filtros de Búsqueda</span>
                </div>
            </div>
        </div>
        <h4 class="subtitle small">Publicando anuncio en: <strong>Categorías</strong></h4>
        <h4 class="subtitle normal mt-4"><strong>CATEGORÍAS</strong></h4>
        <div class="grid-inputs-2">
            <div class="col">
                <h4 class="subtitle normal mt-4"><strong>Tipo de filtro</strong></h4>
                <div class="radio-wrapper normal-my">
                    <input type="radio" name="typeFilter" id="typeFilter-1" checked>
                    <input type="radio" name="typeFilter" id="typeFilter-2">
                    <label for="typeFilter-1" class="option typeFilter-1 radio-trigger-gj8 option-active-gj8">
                        <div class="dot"></div>
                        <span>Categorías</span>
                    </label>
                    <label for="typeFilter-2" class="option typeFilter-2 radio-trigger-gj8">
                        <div class="dot"></div>
                        <span>Localizaciones</span>
                    </label>
                </div>
            </div>
            <!-- Categories -->
            <div class="col radio-content categories" isActive>
                <h4 class="subtitle normal mt-4"><strong>Tipo de subida</strong></h4>
                <div class="radio-wrapper normal-my">
                    <input type="radio" name="typeUpload" id="typeUpload-1" checked>
                    <input type="radio" name="typeUpload" id="typeUpload-2">
                    <label for="typeUpload-1" class="option typeUpload-1 radio-trigger-gj8 option-active-gj8">
                        <div class="dot"></div>
                        <span>Único</span>
                    </label>
                    <label for="typeUpload-2" class="option typeUpload-2 radio-trigger-gj8">
                        <div class="dot"></div>
                        <span>Lista</span>
                    </label>
                </div>
            </div>
            <!-- Locations -->
            <div class="col radio-content locations">
                <h4 class="subtitle normal mt-4"><strong>Tipo de subida loca...</strong></h4>
                <div class="radio-wrapper normal-my">
                    <input type="radio" name="typeUploadLocations" id="typeUploadLocations-1" checked>
                    <input type="radio" name="typeUploadLocations" id="typeUploadLocations-2">
                    <label for="typeUploadLocations-1"
                        class="option typeUploadLocations-1 radio-trigger-gj8 option-active-gj8">
                        <div class="dot"></div>
                        <span>Único</span>
                    </label>
                    <label for="typeUploadLocations-2" class="option typeUploadLocations-2 radio-trigger-gj8">
                        <div class="dot"></div>
                        <span>Lista</span>
                    </label>
                </div>
            </div>
        </div>
        <!-- Categories -->
        <div class="radio-content categories" isActive>
            <div class="grid-inputs-2">
                <div class="col">
                    <h4 class="subtitle normal mt-4"><strong>Tipo de Categoría</strong></h4>
                    <div class="radio-wrapper normal-my">
                        <input type="radio" name="typeCategorie" id="typeCategorie-1" checked>
                        <input type="radio" name="typeCategorie" id="typeCategorie-2">
                        <label for="typeCategorie-1" class="option typeCategorie-1 radio-trigger-gj8 option-active-gj8">
                            <div class="dot"></div>
                            <span>Categoría</span>
                        </label>
                        <label for="typeCategorie-2" class="option typeCategorie-2 radio-trigger-gj8">
                            <div class="dot"></div>
                            <span>Subcategoría</span>
                        </label>
                    </div>
                </div>
                <div class="col radio-content categories" isActive>
                    <div class="radio-content type-unique" isActive>
                        <h4 class="subtitle normal mt-4"><strong>Nombre</strong></h4>
                        <div class="input-form user-data normal-my fadeInLeft">
                            <label class="txt-field icon-right">
                                <span class="input-normal"></span>
                                <input type="text" name="input" placeholder="Especifica el nombre de la Categoría" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Categories -->
        <div class="radio-content categories" isactive>
            <div class="radio-content type-list">
                <h4 class="subtitle normal mt-4"><strong>Nombre</strong></h4>
                <div class="categories-repeat">
                    <h4 class="subtitle normal mt-4"><strong>Categorías repetidas (pulse para eliminar la
                            repetida)</strong></h4>
                    <div class="d-flex"></div>
                </div>
                <div class="input-form user-data mt-2 fadeInLeft">
                    <label class="txt-field">
                        <textarea name="description" cols="30" rows="10"
                            placeholder="Especifica el Nombre para cada categoría por fila"></textarea>
                    </label>
                </div>
            </div>
        </div>
        <!-- Mapa de categorías -->
        <div class="radio-content categories" isActive>
            <div class="radio-content subcategories">
                <h4 class="subtitle normal mt-4"><strong>Mapa de categorías</strong></h4>
                <div class="main-chevrondown-gj8 mt-2" id="categories-tree-main">
                    <div class="d-flex jcsb aic size-normal pt-1 mb-05">
                        <div class="d-flex expand-less-gj8">
                            <i class="material-icons-outlined">expand_less</i>
                            Contraer todo
                        </div>
                        <div class="d-flex expand-more-gj8">
                            <i class="material-icons-outlined">expand_more</i>
                            Expandir todo
                        </div>
                    </div>
                    <hr>
                    <div class="chevrondown-gj8">
                        <div class="chevrondown-item-gj8">
                            <div class="chevrondown-head-gj8">
                                <i class="material-icons">chevron_right</i>
                                <span class="chevrondown-radio-button not active" item="base"></span>
                                Todas las categorías
                            </div>
                            <div class="chevrondown-content-gj8 not"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Locations -->
        <div class="radio-content locations">
            <div class="grid-inputs-2">
                <div class="col">
                    <h4 class="subtitle normal mt-4"><strong>Tipo de Localización</strong></h4>
                    <div class="radio-wrapper normal-my">
                        <input type="radio" name="typeLocation" id="typeLocation-1" checked>
                        <input type="radio" name="typeLocation" id="typeLocation-2">
                        <label for="typeLocation-1" class="option typeLocation-1 radio-trigger-gj8 option-active-gj8">
                            <div class="dot"></div>
                            <span>País</span>
                        </label>
                        <label for="typeLocation-2" class="option typeLocation-2 radio-trigger-gj8">
                            <div class="dot"></div>
                            <span>División administrativa</span>
                        </label>
                    </div>
                </div>
                <div class="col radio-content locations" isActive>
                    <div class="radio-content type-unique-country" isActive>
                        <h4 class="subtitle normal mt-4"><strong>Nombre</strong></h4>
                        <div class="input-form user-data normal-my fadeInLeft">
                            <label class="txt-field icon-right">
                                <span class="input-normal"></span>
                                <input type="text" name="input" placeholder="Especifica el nombre del País" />
                            </label>
                        </div>
                    </div>
                    
                </div>
                <div class="col radio-content locations" isActive>
                    <div class="radio-content type-division" notActive>
                        <h4 class="subtitle normal mt-4 mb-1"><strong>País</strong></h4>
                        <div class="select-gj8 fadeInLeft select-country">
                            <div class="select-gj8__title">
                                <div class="select-gj8__title__current" id="select_country_current">españa</div>
                                <i class="material-icons select-gj8__title__arrow">expand_more</i>
                            </div>
                            <div class="select-gj8__content" id="select-gj8__countrys">
                                <div class="select-gj8__option">Blanco</div>
                                <div class="select-gj8__option">Azul</div>
                                <div class="select-gj8__option">Amarillo</div>
                                <div class="select-gj8__option">Verde</div>
                                <div class="select-gj8__option">Morado</div>
                                <div class="select-gj8__option">Negro</div>
                                <div class="select-gj8__option">Rojo</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col radio-content locations" isActive>
                    <div class="radio-content type-division" notActive>
                        <div class="select-gj8 select-gj8--edit fadeInLeft mt-4">
                            <div class="select-gj8__label">
                                <div class="select-gj8__label__text">
                                    división administrativa
                                </div>
                                <div class="select-gj8__label__action">
                                    <i class="material-icons-outlined select-gj8__label__action__icon">drive_file_rename_outline</i>
                                    <span class="select-gj8__label__action__text">Editar</span>
                                </div>
                            </div>
                            <div class="select-gj8__title">
                                <div class="select-gj8__title__current" id="select_divition_current">Seleccione una opción:</div>
                                <i class="material-icons select-gj8__title__arrow">expand_more</i>
                            </div>
                            <div class="select-gj8__content">
                                <div class="select-gj8__content__subtitle">
                                    divisiones administrativas: <span
                                        class="select-gj8__content__subtitle__current">españa</span>
                                </div>
                                <div class="select-gj8__content__add">
                                    <div class="select-gj8__content__add__form">
                                        <input type="text" class="select-gj8__content__add__input"
                                            placeholder="nueva división administrativa" required autocomplete="off">
                                        <button type="button" class="select-gj8__btn select-gj8__btn--add">
                                            agregar
                                        </button>
                                    </div>
                                </div>
                                <div id="select-gj8__administrative_divition" class="select-gj8__content__options"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col radio-content locations" isActive>
                    <!-- Locations type-unique -->
                    <div class="radio-content type-unique">
                        <h4 class="subtitle normal mt-2"><strong>Nombre</strong></h4>
                        <div class="input-form user-data normal-my fadeInLeft">
                            <label class="txt-field icon-right">
                                <span class="input-normal"></span>
                                <input type="text" name="input" placeholder="Especifica el nombre de la Localización" />
                            </label>
                        </div>
                    </div>
                </div>




            </div>
        </div>

        <!-- Locations type-list Country-->
        <div class="radio-content locations">
            <div class="radio-content type-list-country" notActive>
                <h4 class="subtitle normal mt-2"><strong>Nombre</strong></h4>
                <div class="categories-repeat">
                    <h4 class="subtitle normal mt-4"><strong>Localizaciones repetidas (pulse para eliminar la
                            repetida)</strong></h4>
                    <div class="d-flex"></div>
                </div>
                <div class="input-form user-data mt-2 fadeInLeft">
                    <label class="txt-field">
                        <textarea name="description" cols="30" rows="10"
                            placeholder="Especifica el Nombre para cada País por fila"></textarea>
                    </label>
                </div>
            </div>
        </div>
        <!-- Mapa de localizaciones -->
        <div class="radio-content locations" isActive>
            <div class="radio-content administrative-divition">
                <h4 class="subtitle normal mt-4"><strong>Mapa de localizaciones</strong></h4>
                <div class="main-chevrondown-gj8 mt-2">
                    <div class="d-flex jcsb aic size-normal pt-1 mb-05">
                        <div class="d-flex expand-less-gj8">
                            <i class="material-icons-outlined">expand_less</i>
                            Contraer todo
                        </div>
                        <div class="d-flex expand-more-gj8">
                            <i class="material-icons-outlined">expand_more</i>
                            Expandir todo
                        </div>
                    </div>
                    <hr>
                    <div class="chevrondown-gj8" id="locations-tree-main">
                        <div class="chevrondown-item-gj8">
                            <div class="chevrondown-head-gj8">
                                <i class="material-icons">chevron_right</i>
                                <span class="chevrondown-radio-button not active" item="base"></span>
                                Todas las localizaciones
                            </div>
                            <div class="chevrondown-content-gj8 not" id="locations-tree"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Active / Inactive -->
        <h4 class="subtitle normal mt-4"><strong>Seleccionar un estado para el filtro</strong></h4>
        <div class="switch-main-gj8 mt-2">
            <label class="switch-gj8">
                <span class="slider-gj8">
                    <span class="active">Activo</span>
                    <span class="inactive">Inactivo</span>
                </span>
            </label>
        </div>
    </form>
    <div class="d-flex jcsb mt-5 buttons-fixed  ">
        <div class="d-flex jcsb grow-1 p-buttons-fixed">
            <div class="btn-icon-left btn-step step-trigger" step="7">
                <i class="material-icons-outlined">restart_alt</i>
                Borrar
            </div>
            <div class="btn-icon-right btn-step step-trigger save-filter">
                <i class="material-icons-outlined">file_upload</i>
                Publicar
            </div>
        </div>
        <div class="sidebar-hidden-active"></div>
    </div>
</div>