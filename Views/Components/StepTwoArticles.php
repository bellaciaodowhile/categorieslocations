<div class="step-2">
    <h4 class="subtitle small">Publicando artículo en: <strong>Invernaderos</strong></h4>
    <h3 class="h3-title">DATOS DE TU ARTÍCULO</h3>
    <h4 class="subtitle normal"><strong>Tipo de artículo</strong></h4>
    <div class="radio-wrapper articles">
        <input type="radio" name="selectTypeArticle" checked id="optionArticle-1">
        <input type="radio" name="selectTypeArticle" id="optionArticle-2">
        <label for="optionArticle-1" class="option optionArticle-1">
            <div class="dot"></div>
            <span>Imágenes</span>
        </label>
        <label for="optionArticle-2" class="option optionArticle-2">
            <div class="dot"></div>
            <span>Vídeo</span>
        </label>
    </div>

    <div class="section-img-article">
        <div class="alert-g success">
            Arrastra y organiza las fotos como te gustaría que aparecieran en tu anuncio.
            <i class="material-icons">close</i>
        </div>

        <div class="main-file-upload-articles">
            <div id="galleryArticles">
                <div class="add-more" id="add-more-articles">
                    <input type="file" id="addMoreArticles" multiple accept="image/*"
                        onchange="filesManagerArticles(this.files)">
                    <label for="addMoreArticles" class="title-drag">
                        <i class="material-icons">add</i> <br> Añadir más</label>
                </div>
            </div>
            <div id="dropBoxArticles">
                <i class="material-icons">photo_camera</i>
                <p class="title-drag">Arrastra tus fotos aquí</p>
                <p class="subtitle-drag">- o -</p>
                <form class="imgUploader">
                    <input type="file" id="imgUploadArticles" multiple accept="image/*"
                        onchange="filesManagerArticles(this.files)">
                    <label class="button" for="imgUploadArticles">Seleccionalas desde tu ordenador</label>
                </form>
            </div>
        </div>

        <h4 class="subtitle normal"><strong>Título</strong></h4>
        <div class="input-form user-data normal-my">
            <label class="txt-field">
                <span class="input-normal">Título del artículo</span>
                <input type="text" name="linkVideoName" />
            </label>
        </div>

        <h4 class="subtitle normal"><strong>Descripción</strong></h4>
        <div class="input-form user-data normal-my">
            <label class="txt-field">
                <textarea name="description" cols="30" rows="10"
                    placeholder="Añade una breve descripción de tu artículo"></textarea>
            </label>
        </div>
    </div>

    <div class="section-video-article">
        <h4 class="subtitle normal"><strong>Añadir miniatura</strong></h4>

        <div class="grid-section-video">
            <div class="main-file-upload-articles-mini">
                <div id="galleryArticles"></div>
                <div id="dropBoxArticles">
                    <i class="material-icons">photo_camera</i>
                    <p class="title-drag">Arrastra una imágen aquí</p>
                    <p class="subtitle-drag">- o -</p>
                    <form class="imgUploader">
                        <input type="file" id="imgUploadArticlesMini" accept="image/*"
                            onchange="filesManagerArticlesMini(this.files)">
                        <label class="button" for="imgUploadArticlesMini">Seleccionalas desde tu ordenador</label>
                    </form>
                </div>
            </div>
            <section>
                <p>Una <strong>miniatura</strong> sirve para identificar mejor el contenido de un vídeo. Cuanto más
                    <strong>explícita y esquemática</strong> sea la miniatura <strong>mejores resultados y mayor número
                        de visualizaciones</strong> se podrán conseguir.</p>

                <p class="text-italic"><strong>¿Te gustaría crear una miniatura profesional?</strong></p>
                <p class="">Te ponemos en contacto con editores profesionales!</p>
                <div class="btn-primary-light">
                    Buscar profesionales
                </div>
            </section>
        </div>
        <div class="section-mt-articles">
            <h4 class="subtitle normal"><strong>Tipo de carga del vídeo</strong></h4>
            <div class="radio-wrapper articles">
                <input type="radio" name="loadVideoArticle" id="loadVideoArticle-1" checked>
                <input type="radio" name="loadVideoArticle" id="loadVideoArticle-2">
                <label for="loadVideoArticle-1" class="option loadVideoArticle-1">
                    <div class="dot"></div>
                    <span>Cargar un Vídeo</span>
                </label>
                <label for="loadVideoArticle-2" class="option loadVideoArticle-2">
                    <div class="dot"></div>
                    <span>Enlace de un Vídeo</span>
                </label>
            </div>
            <div class="load-video">
              <h1>Aquí es donde se va a cargar el vídeo</h1>
            </div>      
            <div class="link-video">
                <h4 class="subtitle normal"><strong>Enlace del Vídeo</strong></h4>
                <div class="radio-wrapper articles normal-my">
                    <input type="radio" name="linkVideo" id="linkVideo-1">
                    <input type="radio" name="linkVideo" id="linkVideo-2">
                    <input type="radio" name="linkVideo" id="linkVideo-3">
                    <label for="linkVideo-1" class="option linkVideo-1">
                        <div class="dot"></div>
                        <span>You Tube</span>
                    </label>
                    <label for="linkVideo-2" class="option linkVideo-2">
                        <div class="dot"></div>
                        <span>Vimeo</span>
                    </label>
                    <label for="linkVideo-3" class="option linkVideo-3">
                        <div class="dot"></div>
                        <span>Facebook</span>
                    </label>
                </div>
                <div class="input-form user-data normal-m0">
                    <label class="txt-field">
                        <span class="input-normal">Inserta el enlace del Vídeo</span>
                        <input type="text" name="linkVideoName" />
                    </label>
                </div>
            </div>

            <h4 class="subtitle normal"><strong>Título</strong></h4>
            <div class="input-form user-data normal-my">
                <label class="txt-field">
                    <span class="input-normal">Título del artículo</span>
                    <input type="text" name="linkVideoName" />
                </label>
            </div>

            <h4 class="subtitle normal"><strong>Descripción</strong></h4>
            <div class="input-form user-data normal-my">
                <label class="txt-field">
                    <textarea name="description" cols="30" rows="10"
                        placeholder="Añade una breve descripción de tu artículo"></textarea>
                </label>
            </div>
        </div>
    </div>



    <div class="d-flex">
        <div class="block">
            <h4 class="subtitle normal"><strong>Comentarios</strong></h4>
            <div class="checkbox-main-normal">
                <div class="checkbox">
                    <div>
                        <i class="material-icons">done</i>
                    </div>
                    <span>Permitir comentarios</span>
                </div>
            </div>
        </div>
        <div class="block ml-5">
            <h4 class="subtitle normal"><strong>Donaciones</strong></h4>
            <div class="checkbox-main-normal">
                <div class="checkbox">
                    <div>
                        <i class="material-icons">done</i>
                    </div>
                    <span>Activar donaciones</span>
                </div>
            </div>
        </div>
    </div>
    <h4 class="subtitle normal mt-5"><strong>Datos del contacto</strong></h4>
    <div class="checkbox-main-normal articles grid-checkbox">
        <div class="checkbox all">
            <div>
                <i class="material-icons">done</i>
            </div>
            <span>Todo</span>
        </div>
        <div class="checkbox">
            <div>
                <i class="material-icons">done</i>
            </div>
            <span>Mensajes</span>
        </div>
        <div class="checkbox">
            <div>
                <i class="material-icons">done</i>
            </div>
            <span>Email</span>
        </div>
        <div class="checkbox">
            <div>
                <i class="material-icons">done</i>
            </div>
            <span>Teléfono</span>
        </div>
        <div class="checkbox">
            <div>
                <i class="material-icons">done</i>
            </div>
            <span>Redes sociales</span>
        </div>
        <div class="checkbox">
            <div>
                <i class="material-icons">done</i>
            </div>
            <span>Sitio web</span>
        </div>
    </div>

    <h4 class="subtitle normal mt-5"><strong>Encuesta</strong></h4>
    <div class="checkbox-main-normal">
        <div class="checkbox trigger-survey">
            <div>
                <i class="material-icons">done</i>
            </div>
            <span>Quiero crear una encuesta</span>
        </div>
    </div>

    <div class="section-articles-surveys">
        <h4 class="subtitle normal mt-5"><strong>Formúla una pregunta</strong></h4>
        <div class="input-form user-data normal-my">
            <label class="txt-field">
                <textarea name="description" cols="30" rows="3"
                    placeholder="Escribe aquí la pregunta de tu encuesta"></textarea>
            </label>
        </div>


        <h4 class="subtitle normal mt-5"><strong>Opciones de la encuesta</strong></h4>
        <div id="mainSurveysSurveys" class="main-surveys surveys">
            <div class="option-survey">
                <i class="material-icons icon-drag">drag_indicator</i>
                <div class="input-form user-data group-my">
                    <label class="txt-field">
                        <input placeholder="Escribe aquí una de las opciones" type="text" name="linkVideoName" class="color-text"/>
                    </label>
                </div>
            </div>
            <div class="option-survey fisrt">
                <i class="material-icons icon-drag">drag_indicator</i>
                <div class="input-form user-data group-my">
                    <label class="txt-field">
                        <input placeholder="Escribe aquí una de las opciones" type="text" name="linkVideoName" class="color-text"/>
                    </label>
                </div>
                <div class="btn-light addMoreOptionSurvey">
                    <i class="material-icons-outlined">add_circle_outline</i>
                </div>
            </div>
        </div>
    </div>




    <h4 class="subtitle normal mt-5"><strong>Anuncios</strong></h4>
    <div class="radio-wrapper articles normal-my">
        <input type="radio" name="adArticles" id="adArticles-1">
        <input type="radio" name="adArticles" id="adArticles-2">
        <label for="adArticles-1" class="option adArticles-1">
            <div class="dot"></div>
            <span>Cargar todos mis anuncios</span>
        </label>
        <label for="adArticles-2" class="option adArticles-2">
            <div class="dot"></div>
            <span>Cargar algunos de mis anuncios</span>
        </label>
    </div>

    <div class="section-articles-ads">
        <div class="select-form-gloobal-checkbox">
            <div class="main">
                <span>Selecciona anuncios</span>
                <i class="material-icons-outlined">expand_more</i>
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
                            <div class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis doloremque rerum...</div>
                            <div class="city">
                                <i class="material-icons">place</i>
                                Ciudad, Provincia, País
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="checkbox-article-ads">
                            <i class="material-icons">done</i>
                        </div>
                        <img src="<?php echo BASE_URL;?>Assets/img/app/header.jpg">
                        <div class="description">
                            <div class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis doloremque rerum...</div>
                            <div class="city">
                                <i class="material-icons">place</i>
                                Ciudad, Provincia, País
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="checkbox-article-ads">
                            <i class="material-icons">done</i>
                        </div>
                        <img src="<?php echo BASE_URL;?>Assets/img/app/header.jpg">
                        <div class="description">
                            <div class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis doloremque rerum...</div>
                            <div class="city">
                                <i class="material-icons">place</i>
                                Ciudad, Provincia, País
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="checkbox-article-ads">
                            <i class="material-icons">done</i>
                        </div>
                        <img src="<?php echo BASE_URL;?>Assets/img/app/header.jpg">
                        <div class="description">
                            <div class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis doloremque rerum...</div>
                            <div class="city">
                                <i class="material-icons">place</i>
                                Ciudad, Provincia, País
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="checkbox-article-ads">
                            <i class="material-icons">done</i>
                        </div>
                        <img src="<?php echo BASE_URL;?>Assets/img/app/header.jpg">
                        <div class="description">
                            <div class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis doloremque rerum...</div>
                            <div class="city">
                                <i class="material-icons">place</i>
                                Ciudad, Provincia, País
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="checkbox-article-ads">
                            <i class="material-icons">done</i>
                        </div>
                        <img src="<?php echo BASE_URL;?>Assets/img/app/header.jpg">
                        <div class="description">
                            <div class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis doloremque rerum...</div>
                            <div class="city">
                                <i class="material-icons">place</i>
                                Ciudad, Provincia, País
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>






    <h4 class="subtitle normal mt-5"><strong>Curriculum Vitae</strong></h4>
    <div class="checkbox-main-normal">
        <div class="checkbox">
            <div>
                <i class="material-icons">done</i>
            </div>
            <span>Quiero incorporar mi CV</span>
        </div>
    </div>

    <div class="d-flex jcsb mt-5">
        <div class="btn-icon-left prevStepArticleOne">
            <i class="material-icons">arrow_back</i>
            Atras
        </div>
        <div class="btn-icon-right nextStepArticle">
            Siguiente
            <i class="material-icons-outlined">arrow_forward</i>
        </div>
    </div>



</div>