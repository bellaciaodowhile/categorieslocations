<div class="step-2">
    <h4 class="subtitle small">Publicando anuncio en: <strong>Invernaderos</strong></h4>
    <h3 class="h3-title">DATOS DE TU ANUNCIO</h3>
    <h4 class="subtitle normal"><strong>Fotografías del anuncio</strong></h4>
    <div class="alert-g success">
        Arrastra y organiza las fotos como te gustaría que aparecieran en tu anuncio.
        <i class="material-icons">close</i>
    </div>

    <div class="main-file-upload">
        <div id="galleryAds">
            <div class="add-more" id="add-more" >
                <input type="file" id="addMore" multiple accept="image/*" onchange="filesManager(this.files)">
                <label for="addMore" class="title-drag">
                <i class="material-icons">add</i> <br> Añadir más</label>
            </div>
        </div>
        <div id="dropBox">
            <i class="material-icons">photo_camera</i>
            <p class="title-drag">Arrastra hasta 9 fotos aquí</p>
            <p class="subtitle-drag">- o -</p>
            <form class="imgUploader">
                <input type="file" id="imgUpload" multiple accept="image/*" onchange="filesManager(this.files)">
                <label class="button" for="imgUpload">Seleccionalas desde tu ordenador</label>
            </form>
        </div>
    </div>



    <h4 class="subtitle normal"><strong>Tipo de anuncio</strong></h4>
    <div class="radio-wrapper">
        <input type="radio" name="selectAd" id="option-1">
        <input type="radio" name="selectAd" id="option-2">
        <label for="option-1" class="option option-1">
            <div class="dot"></div>
            <span>Ofrezco o Vendo</span>
        </label>
        <label for="option-2" class="option option-2">
            <div class="dot"></div>
            <span>Busco o Compro</span>
        </label>
    </div>

    <h4 class="subtitle normal"><strong>Título</strong></h4>
    <div class="input-form user-data ads">
        <label class="txt-field">
            <span class="input-normal">¿Qué vendes u ofreces?</span>
            <input type="text" name="qvuo" />
        </label>
    </div>

    <h4 class="subtitle normal"><strong>Descripción</strong></h4>
    <div class="input-form user-data ads">
        <label class="txt-field">
            <textarea name="description" cols="30" rows="10"
                placeholder="Añade información detallada y características concretas de tu anuncio"></textarea>
        </label>
    </div>
    <h4 class="subtitle normal"><strong>Estado del producto</strong></h4>
    <div class="select-form-gloobal">
        <div class="main">
            <span>No especificado</span>
            <i class="material-icons-outlined">expand_more</i>
        </div>
        <div class="options">
            <hr>
            <div class="content-options">
                <div class="option">
                    <div class="active">No especificado</div>
                </div>
                <div class="option">
                    <div>Sin estrenar</div>
                    <span>Conserva la etiqueta, el ticket y/o el packaging</span>
                </div>
                <div class="option">
                    <div>Prácticamente nuevo</div>
                    <span>Usado tan solo un par de veces</span>
                </div>
                <div class="option">
                    <div>En buen estado</div>
                    <span>Tratado siempre con mucho mimo</span>
                </div>
                <div class="option">
                    <div>Aceptable</div>
                    <span>Usado pero aun se le puede sacar partido</span>
                </div>
                <div class="option">
                    <div>Mejorable</div>
                    <span>Quizás necesite algún pequeño arreglo</span>
                </div>
            </div>
        </div>
    </div>

    <h4 class="subtitle normal"><strong>Precio</strong></h4>
    <div class="input-form user-data ads price">
        <label class="txt-field">
            <div></div>
            <input type="number" min="0" name="price" />
            <div class="currency">eur</div>
        </label>
    </div>

    <h4 class="subtitle normal"><strong>Ubicación del anuncio</strong></h4>
    <div class="input-form user-data search-location ads">
        <label class="txt-field location">
            <span class="input-normal">Buscar una localización</span>
            <input type="text" name="searchLocation" />
            <div class="detect-location">
                <i class="material-icons">my_location</i>
                Detectar mi ubicación
            </div>
        </label>
        <div class="icons iconsForm">
            <i id="search" class="material-icons">search</i>
        </div>
        <div class="time-real-location time-create-direction"></div>
    </div>
    <h4 class="subtitle small last-small">Para conservar tu privacidad, tu ubicación exacta nunca será pública.</h4>

    <div class="d-flex">
        <div class="btn-icon-left prevStep">
            <i class="material-icons">arrow_back</i>
            Atras
        </div>
        <div class="btn-primary-light done-ad">
            Publicar
        </div>
    </div>





</div>