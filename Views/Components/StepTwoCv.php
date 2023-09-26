<div class="step-2">
    <h4 class="subtitle small">Publicando anuncio en: <strong>Empleos</strong></h4>
    <div class="d-flex aic mt-1">
        <h3 class="h3-title mr-2"><strong>PRESENTACIÓN PERSONAL</strong></h3>
        <div class="btn-light p-1 mt-2 mr-1 flash-on-trigger-data-personal">
            <i class="material-icons-outlined">flash_on</i>
        </div>
        <div class="btn-pink p-1 mt-2 trigger-settings-data-personal">
            <i class="material-icons-outlined">settings</i>
        </div>
    </div>
    <hr class="mt-1 mb-4">
    <h4 class="subtitle normal"><strong>Tipo de presentación</strong></h4>
    <div class="radio-wrapper articles normal-my">
        <input type="radio" name="imgsVideoCv" id="imgsVideoCv-1" checked>
        <input type="radio" name="imgsVideoCv" id="imgsVideoCv-2">
        <label for="imgsVideoCv-1" class="option imgsVideoCv-1">
            <div class="dot"></div>
            <span>Imágenes</span>
        </label>
        <label for="imgsVideoCv-2" class="option imgsVideoCv-2">
            <div class="dot"></div>
            <span>Vídeo</span>
        </label>
    </div>
    <div class="yes-imgsCv">
        <h4 class="subtitle normal"><strong>Añadir imágenes de presentación</strong></h4>
        <div class="main-file-upload-imgs-cv">
            <div id="galleryImgsCv">
                <div class="add-more" id="add-more">
                    <input type="file" id="addMoreImgsCv" multiple accept="image/*"
                        onchange="filesManagerImgsCv(this.files)">
                    <label for="addMoreImgsCv" class="title-drag">
                        <i class="material-icons">add</i> <br> Añadir más</label>
                </div>
            </div>
            <div id="dropBoxImgsCv">
                <i class="material-icons">photo_camera</i>
                <p class="title-drag">Arrastra hasta 9 fotos aquí</p>
                <p class="subtitle-drag">- o -</p>
                <form class="imgUploader">
                    <input type="file" id="imgUploadImgsCv" multiple accept="image/*"
                        onchange="filesManagerImgsCv(this.files)">
                    <label class="button" for="imgUploadImgsCv">Seleccionalas desde tu ordenador</label>
                </form>
            </div>
        </div>
    </div>
    <div class="yes-videoCv">
        <div class="grid-section-video mb-3">
            <div class="col">
                <h4 class="subtitle normal"><strong>Añadir vídeo de presentación</strong>
                    <br>
                    <small>
                        <span style="color: red;">
                            <strong>Leonel, quedas pendiente con la validación de este input vídeo y por supuesto el
                                HTML EDITOR que debe estar debajo. <br>NOTA: No me estanco acá para avanzar</strong>
                        </span>
                    </small>
                </h4>
                <div class="main-file-upload-video-cv">
                    <div id="galleryVideoCv"></div>
                    <div id="dropBoxVideoCv">
                        <i class="material-icons">videocam</i>
                        <p class="title-drag">Arrastra un vídeo aquí</p>
                        <p class="subtitle-drag">- o -</p>
                        <form class="imgUploader">
                            <input type="file" id="imgUploadVideoCv" accept="video/mp4,video/mkv, video/x-m4v,video/*"
                                onchange="filesManagerVideoCv(this.files)">
                            <label class="button" for="imgUploadVideoCv">Seleccionalo de tu ordenador</label>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col">
                <section>
                    <p>El <strong>vídeo de presentación</strong> es una de las mejores maneras de presentarse, aprte de
                        poder aportar información valiosa de tu candidatura, permite al evaluador conocer mejor a la
                        persona que hay detrás de un curriculum. Una manera de humanizar y personalizar un amasijo de
                        datos!</p>
                    <p class="text-italic"><strong>Vídeo breve y esquemático!</strong></p>
                    <p class=""><strong>Realiza una breve presentación que no se alargue más de un minuto </strong> y
                        procura resaltar tus virtudes de manera esquemática.</p>
                </section>
            </div>
        </div>
    </div>
    <div class="d-flex jcsb baseline fw-w field" field="pre_escrita_twoCV" status="unlock" isActive="1">
        <div class="col">
            <h4 class="subtitle normal"><strong>Presentación escrita</strong></h4>
        </div>
        <div class="col">
            <h4 class="subtitle small">
                carateres min. 300, <strong>recomendados 450 </strong>y max. 600
            </h4>
        </div>
    </div>

    
    <!-- Start Editor -->
    <div class="main-editors field" field="pre_escrita_twoCV" status="unlock" isActive="1">
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
                    <div class="search-match" type="presentation"></div>
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





    <div class="d-flex jcsb mt-5 buttons-fixed  ">
        <div class="d-flex jcsb grow-1 p-buttons-fixed">
            <div class="btn-icon-left btn-step step-trigger" step="1">
                <i class="material-icons">arrow_back</i>
                Atras
            </div>
            <div class="btn-icon-right btn-step step-trigger" step="3">
                Siguiente
                <i class="material-icons-outlined">arrow_forward</i>
            </div>
        </div>
        <div class="sidebar-hidden-active"></div>
    </div>
</div>