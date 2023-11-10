<div class="container-general-gj8 create-widgets">
    <div class="d-flex aic jcsb">
        <div>
            <h2 class="h2-title">Crea un resultado</h2>
            <h4 class="subtitle small"><span class="step-cv-number">1</span>/1: <span class="current-step-name">Widgets</span></h4>
        </div>
        <div>
            <button class="btn btn--small mr-5px">
                <i class="material-icons-outlined">file_download</i>
            </button>
            <button class="btn btn--small">
                <i class="material-icons-outlined">file_upload</i>
            </button>
        </div>
    </div>


    <form method="POST" id="form-widgets">
        <div class="bars-steps-gj8">
            <div class="bar-gj8 parent-tooltip-bar-gj8 active step-trigger" step="1">
                <div class="tooltip-bar-gj8">
                    <i class="material-icons-outlined">search</i>
                    <span>Filtros de Búsqueda</span>
                </div>
            </div>
        </div>
        <h4 class="subtitle small">Publicando anuncio en: <strong>Widgets</strong></h4>
        <h4 class="subtitle normal">Crear</h4>
        <div class="radio-wrapper normal-my">
            <input type="radio" name="typeBusiness" id="typeBusiness-1" checked>
            <input type="radio" name="typeBusiness" id="typeBusiness-2">
            <label for="typeBusiness-1" class="option typeBusiness-1 radio-trigger-gj8 option-active-gj8">
                <div class="dot"></div>
                <span>Widget</span>
            </label>
            <label for="typeBusiness-2" class="option typeBusiness-2 radio-trigger-gj8">
                <div class="dot"></div>
                <span>Empresa / Sitio Web</span>
            </label>
        </div>
        <div class="radio-content widget fadeInLeft" isActive>
            <h1>Aqui vamos a crear los Widgets</h1>

        </div>
        <div class="radio-content business-web fadeInLeft">
            <h4 class="subtitle normal mt-4"><strong>Cargar en widget/s</strong></h4>
            <div class="section-articles-ads">
                <div class="select-form-gloobal-checkbox">
                    <div class="main">
                        <span>Selecciona widgets:</span>
                        <div class="arrow-select"></div>
                    </div>
                    <div class="options">
                        <hr>
                        <div class="content-options">
                            <div class="option">
                                <div class="checkbox-article-ads">
                                    <i class="material-icons">done</i>
                                </div>
                                <img src="<?php echo BASE_URL;?>Assets/img/app/header.jpg">
                                <div class="description">
                                    <div class="title">Widget del mundo de la Jardinería</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sequi.</p>
                                    <div class="city">
                                        <i class="material-icons">place</i>
                                        Ciudad
                                    </div>
                                </div>
                            </div>
                            <div class="option">
                                <div class="checkbox-article-ads">
                                    <i class="material-icons">done</i>
                                </div>
                                <img src="<?php echo BASE_URL;?>Assets/img/app/header.jpg">
                                <div class="description">
                                    <div class="title">Widget del mundo de la Jardinería</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sequi.</p>
                                    <div class="city">
                                        <i class="material-icons">place</i>
                                        País
                                    </div>
                                </div>
                            </div>
                            <div class="option">
                                <div class="checkbox-article-ads">
                                    <i class="material-icons">done</i>
                                </div>
                                <img src="<?php echo BASE_URL;?>Assets/img/app/header.jpg">
                                <div class="description">
                                    <div class="title">Widget del mundo de la Jardinería</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sequi.</p>
                                    <div class="city">
                                        <i class="material-icons">place</i>
                                        Provincia
                                    </div>
                                </div>
                            </div>
                            <div class="option">
                                <div class="checkbox-article-ads">
                                    <i class="material-icons">done</i>
                                </div>
                                <img src="<?php echo BASE_URL;?>Assets/img/app/header.jpg">
                                <div class="description">
                                    <div class="title">Widget del mundo de la Jardinería</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sequi.</p>
                                    <div class="city">
                                        <i class="material-icons">place</i>
                                        Ciudad
                                    </div>
                                </div>
                            </div>
                            <div class="option">
                                <div class="checkbox-article-ads">
                                    <i class="material-icons">done</i>
                                </div>
                                <img src="<?php echo BASE_URL;?>Assets/img/app/header.jpg">
                                <div class="description">
                                    <div class="title">Widget del mundo de la Jardinería</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sequi.</p>
                                    <div class="city">
                                        <i class="material-icons">place</i>
                                        País
                                    </div>
                                </div>
                            </div>
                            <div class="option">
                                <div class="checkbox-article-ads">
                                    <i class="material-icons">done</i>
                                </div>
                                <img src="<?php echo BASE_URL;?>Assets/img/app/header.jpg">
                                <div class="description">
                                    <div class="title">Widget del mundo de la Jardinería</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sequi.</p>
                                    <div class="city">
                                        <i class="material-icons">place</i>
                                        Ciudad
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid-inputs-2">
                <div class="col">
                    <h4 class="subtitle normal mt-4"><strong>Añadir logotipo</strong></h4>
                    <div class="main-file-reader main-file-upload-logo-cv mt-3">
                        <div class="galleryLogoCv"></div>
                        <div class="dropBoxLogoCv">
                            <i class="material-icons">photo_camera</i>
                            <p class="title-drag">Arrastra una imagen aquí</p>
                            <p class="subtitle-drag">- o -</p>
                            <form class="imgUploader" style="display: flex; justify-content: center;">
                                <input type="file" id="imgUploadLogoCv1" accept="image/*"
                                    onchange="fileReader(this.files, 'galleryLogoCv', 'dropBoxLogoCv')"
                                    style="display: none;">
                                <label class="button" for="imgUploadLogoCv1">Seleccionala de tu ordenador</label>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <p class="subtitle normal mt-6">Carga del logotipo asociado a la empresa o al sitio web.</p>
                    <p class="subtitle normal">De preferencia un tamaño de 70px (ancho) x 70px (alto) y fondo
                        transparente (png).</p>
                </div>
            </div>

            <h4 class="subtitle normal mt-4"><strong>Título</strong></h4>
            <div class="input-form user-data normal-my fadeInLeft">
                <label class="txt-field icon-right">
                    <span class="input-normal"></span>
                    <input type="text" name="input" class="input__title__widget" placeholder="Específica un título" />
                </label>
            </div>
            <h4 class="subtitle normal mt-4"><strong>Descripción</strong></h4>
            <div class="input-form user-data mt-2 fadeInLeft">
                <label class="txt-field">
                    <textarea class="input__description__widget" name="description" cols="30" rows="10"
                        placeholder="Especifíca una descripción"></textarea>
                </label>
            </div>
            <h4 class="subtitle normal mt-4"><strong>URL</strong></h4>
            <div class="input-form user-data normal-my fadeInLeft">
                <label class="txt-field icon-right">
                    <span class="input-normal"></span>
                    <input type="text" name="input" placeholder="Específica una URL" />
                </label>
            </div>
            <h4 class="subtitle normal mt-4"><strong>Palabras clave</strong></h4>
            <div class="input-form user-data normal-my">
                <label class="txt-field">
                    <span></span>
                    <input type="text" id="keywords" />
                </label>
            </div>
            <h4 class="subtitle normal mt-4"><strong>Mapa de Categorías</strong></h4>
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


            <h4 class="subtitle normal mt-4"><strong>Dirección asociada</strong></h4>
            <div class="radio-wrapper normal-my">
                <input type="radio" name="typeBusiness" id="typeBusiness_-1" checked>
                <input type="radio" name="typeBusiness_" id="typeBusiness_-2">
                <label for="typeBusiness_-1" class="option typeBusiness_-1 radio-trigger-gj8 option-active-gj8">
                    <div class="dot"></div>
                    <span>No tiene dirección física asociada</span>
                </label>
                <label for="typeBusiness_-2" class="option typeBusiness_-2 radio-trigger-gj8">
                    <div class="dot"></div>
                    <span>Si tiene dirección física asociada</span>
                </label>
            </div>

            <div class="radio-content locations-map">
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
                                <span class="chevrondown-radio-button not active" item="26"></span>
                                <span class="current__country">ESPAÑA</span>
                            </div>
                            <div class="chevrondown-content-gj8 not" id="locations-tree"></div>
                        </div>
                    </div>
                </div>
            </div>


            <h4 class="subtitle normal mt-4"><strong>Etiqueta rel para el enlace</strong></h4>
            <div class="radio-wrapper normal-my">
                <input type="radio" name="typeBusiness" id="typeBusiness_-1" checked>
                <input type="radio" name="typeBusiness_" id="typeBusiness_-2">
                <label for="typeBusiness_-1" class="option typeBusiness_-1 radio-trigger-gj8 option-active-gj8">
                    <div class="dot"></div>
                    <span>DoFollow</span>
                </label>
                <label for="typeBusiness_-2" class="option typeBusiness_-2 radio-trigger-gj8">
                    <div class="dot"></div>
                    <span>NoFollow</span>
                </label>
            </div>
            <h4 class="subtitle normal mt-4"><strong>Seleccionar un estado</strong></h4>
            <div class="switch-main-gj8 mt-2">
                <label class="switch-gj8">
                    <span class="slider-gj8">
                        <span class="active">Activo</span>
                        <span class="inactive">Inactivo</span>
                    </span>
                </label>
            </div>
            <h4 class="subtitle normal mt-4"><strong>Vista previa</strong></h4>
            <div class="preview__widget card__widget">
                <img class="card__widget__logo" id="imagePreviewWidget" src="<?php echo BASE_URL;?>Assets/img/app/gloobal-jardins-logo.png"
                    alt="">
                <div class="card__widget__content">
                    <h4 class="card__widget__content__title" id="titlePreviewWidget">Gloobal Jardins</h4>
                    <p class="card__widget__content__paragraph" id="descriptionPreviewWidget">
                        Portal de profesionales del mundo de la Jardineria
                    </p>
                </div>
            </div>
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