<div class="main-settings-step-2">
    <div class="main-settings-data-personal settings-step-1">
        <div class="d-flex aic mt-1">
            <h3 class="h3-title mr-2"><strong>PRESENTACIÓN PERSONAL</strong></h3>
            <div class="btn-light p-1 mt-2 mr-1 flash-on-trigger-data-personal">
                <i class="material-icons-outlined">flash_on</i>
            </div>
            <div class="btn-pink p-1 mt-2 trigger-settings-data-personal">
                <i class="material-icons-outlined mr-5px">settings</i>
                <span class="size-normal bold">Configuración</span>
            </div>
        </div>
        <hr class="mt-1 mb-4">
        <div class="fadeInLeft">
            <h4 class="subtitle normal"><strong>Cambiar el nombre de la sección</strong></h4>
            <p class="mt-10">El nuevo nombre será visible en la vista previa del curriculum.</p>
            <hr class="hr-color-primary-light">
            <h4 class="subtitle normal mt-2"><strong>Nombre de la sección</strong></h4>
            <div class="input-form user-data normal-my">
                <label class="txt-field">
                    <span class="input-normal"></span>
                    <input type="text" name="linkVideoName" value="Presentación Personal"
                        style="color: silver; font-weight: bold;" />
                </label>
            </div>
            <h4 class="subtitle normal"><strong>Añadir más información</strong></h4>
            <p class="mt-10">Administrar datos en la sección de datos personales</p>
            <hr class="hr-color-primary-light">
            <h4 class="subtitle normal"><strong>Tipo de presentación</strong></h4>

            <div class="list-settings-step step-one-cv">
                <div class="item-list-settings-step">
                    <span class="title-list-settings-step">Tipo de presentación</span>
                    <div class="field-switch item-lock">
                        <i class="material-icons-outlined">lock</i>
                        <span>Bloqueado</span>
                    </div>
                </div>
                <div class="item-list-settings-step">
                    <span class="title-list-settings-step">Presentación escrita</span>
                    <div class="field-switch item-lock">
                        <i class="material-icons-outlined">lock</i>
                        <span>Bloqueado</span>
                    </div>
                </div>
                <!-- <div class="item-list-settings-step">
                    <span class="title-list-settings-step">Fecha de nacimiento</span>
                    <label class="field-switch switch-normal" field="fecha_nacimiento">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div> -->
            </div>


        </div>
        <div class="d-flex jcsb mt-5 buttons-fixed">
            <div class="d-flex jcsb grow-1 p-buttons-fixed">
                <div class="btn-icon-right btn-step hidden-settings-data-personal">
                    <i class="material-icons">arrow_back</i>
                    Volver
                </div>
            </div>
            <div class="sidebar-hidden-active"></div>
        </div>
    </div>
    <div class="settings-item">
        <div class="tabs-settings-item">
            <div class="tab-settings-item active">
                <i class="material-icons-outlined">flash_on</i>
                consejos
            </div>
            <div class="tab-settings-item">
                <i class="material-icons-outlined">search</i>
                verificar
            </div>
        </div>
        <div class="tabs-content-settings">
            <div class="tab-content-settings">


                <div class="card-primary-light mt-3">
                    Completa solo la información que quieras que aparezca en tu currículum. Deja los otros
                    campos vacíos. <i class="sub">¡También debes tener en cuenta que existen algunos campos
                        obligatorios!</i>
                </div>

                <h4 class="subtitle normal"><strong>Tipo de presentación</strong></h4>
                <hr class="my-2">
                <p>La imagen que vas a proyectar es esencial a la hora de buscar un trabajo, ya que, la persona
                    que va a evaluar tu curriculum va a tener muy en cuenta esta información para hacerse un
                    mapa mental de tu propia personalidad. Por esta razón, la imagen que selecciones debe estar
                    alineada al puesto por el que postulas y el tipo de empresa al que te diriges.
                </p>
                <p class="mb-0">
                    <strong class="color-primary-light font-bold"><i>A tener en cuenta</i></strong>
                </p>
                <p>Asegúrate de que la foto esté tomada frente a un fondo claro, fotografía luminosa, aspecto
                    personal neutro, vestimenta no discordante, ligera sonrisa y un enfoque que abarque el busto
                    y la cara. <i class="color-primary-light">¡Y sobre todo no incluyas fotos informales o con
                        aspecto descuidado!</i></p>

                <h4 class="subtitle normal"><strong>Presentación escrita</strong></h4>
                <hr class="my-2">
                <p>El nombre es un campo obligatorio en el Curriculum Vitae. Por ese motivo no se puede dejar
                    este campo en blanco, ni eliminarse, ni mover su posición.</p>
            </div>
            <div class="tab-content-settings">
                <div class="process-cv" style="display: none;">
                    <div class="card-pink mt-3">
                        <i class="material-icons-outlined mr-10">error_outline</i>
                        <span>
                            En la sección <strong>Presentación Personal</strong> faltan algunos datos. Para mejorar
                            tu documento añade la información que falta.
                        </span>
                    </div>
                    <div class="d-flex aic size-normal p-10 mt-3">
                        <i class="material-icons-outlined mr-10">person</i>
                        <strong>Presentación Personal</strong>
                    </div>
                    <div class="toast-small">
                        <i class="material-icons-outlined mr-10">error_outline</i>
                        Añade tu nombre en Presentación Personal
                    </div>
                    <div class="toast-small">
                        <i class="material-icons-outlined mr-10">error_outline</i>
                        Añade tus apellidos en Presentación Personal
                    </div>
                </div>
                <hr class="my-3">
                <div class="cv-completed">
                    <div class="card-primary-light flex">
                        <i class="material-icons-outlined mr-10">check_circle</i>
                        <span><strong>¡Lo lograste! - ¡Ya se nos acabaron las sugerencias!</strong></span>
                    </div>
                    <div class="mt-2 size-normal text-center p-10">
                        Mira los <strong>Consejos</strong> de nuestros expertos en reclutamiento en la siguiente
                        pestaña o sigue rellenando tu <strong>Curriculum Vitae.</strong>
                    </div>
                    <img class="mt-3" src="<?php echo BASE_URL;?>Assets/img/app/verificar.png" alt="img">
                </div>

                <div class="btn-outlined-primary-light mt-5">
                    <i class="material-icons-outlined">refresh</i>
                    Actualizar
                </div>
            </div>
        </div>
        <div class="d-flex jcsb mt-5 buttons-fixed">
            <div class="d-flex jcsb grow-1 p-buttons-fixed">
                <div class="btn-icon-right btn-step hidden-settings-item">
                    <i class="material-icons">arrow_back</i>
                    Volver
                </div>
            </div>
            <div class="sidebar-hidden-active"></div>
        </div>
    </div>
</div>