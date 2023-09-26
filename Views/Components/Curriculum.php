<div class="main-tabs-cv">
    <div class="tab-cv add post-cv">
        <i class="material-icons-outlined">add_circle_outline</i>Crear Curriculum
    </div>
</div>

<div class="posting-cv">
    <div class="d-flex jcsb">
        <div class="container-cv">
            <div class="sub-container-cv">
                <div class="main-menu-cv">
                    <div class="menu-trigger">
                        <i class="material-icons-outlined">menu</i>
                    </div>
                    <div class="edit-preview">
                        <div class="edit-trigger active">
                            EDITAR
                        </div>
                        <div class="preview-trigger">
                            VISTA PREVIA
                        </div>
                    </div>
                    <div class="fullscreen-trigger">
                        <i class="material-icons-outlined">fullscreen</i>
                    </div>
                </div>
                <div class="settings-data-personal">
                    <h2 class="h2-title">Crea gratis tu Curriculum Vitae</h2>
                    <h4 class="subtitle small"><span class="step-cv-number">1</span>/8: <span
                            class="current-step-name">Datos personales</span></h4>
                    <div class="bars-cv">
                        <div class="bar active step-trigger" step="1">
                            <div class="tooltip-bar">
                                <i class="material-icons-outlined">person_outline</i>
                                <span>Datos personales</span>
                            </div>
                        </div>
                        <div class="bar step-trigger" step="2">
                            <div class="tooltip-bar">
                                <i class="material-icons-outlined">video_camera_front</i>
                                <span>Presentación personal</span>
                            </div>
                        </div>
                        <div class="bar step-trigger" step="3">
                            <div class="tooltip-bar">
                                <i class="material-icons-outlined">work_outline</i>
                                <span>Experiencia laboral</span>
                            </div>
                        </div>
                        <div class="bar step-trigger" step="4">
                            <div class="tooltip-bar">
                                <i class="material-icons-outlined">school</i>
                                <span>Formación académica reglada</span>
                            </div>
                        </div>
                        <div class="bar step-trigger" step="5">
                            <div class="tooltip-bar">
                                <i class="material-icons-outlined">auto_stories</i>
                                <span>Cursos adicionales</span>
                            </div>
                        </div>
                        <div class="bar step-trigger" step="6">
                            <div class="tooltip-bar">
                                <i class="material-icons-outlined">translate</i>
                                <span>Idiomas</span>
                            </div>
                        </div>
                        <div class="bar step-trigger" step="7">
                            <div class="tooltip-bar">
                                <i class="material-icons-outlined">alarm_on</i>
                                <span>Disponibilidades</span>
                            </div>
                        </div>
                        <div class="bar step-trigger" step="8">
                            <div class="tooltip-bar">
                                <i class="material-icons-outlined">anchor</i>
                                <span>Hobbies / Hábitos</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Steps -->
                <div class="settings-data-personal">
                    <?php include 'helpers/components/StepOneCv.php'; ?>
                    <?php include 'helpers/components/StepTwoCv.php'; ?>
                    <?php include 'helpers/components/StepThreeCv.php'; ?>
                    <?php include 'helpers/components/StepFourCv.php'; ?>
                    <?php include 'helpers/components/StepFiveCv.php'; ?>
                    <?php include 'helpers/components/StepSixCv.php'; ?>
                    <?php include 'helpers/components/StepSevenCv.php'; ?>
                    <?php include 'helpers/components/StepEightCv.php'; ?>
                </div>
                <!-- End Steps -->
            </div>

            <!-- Start Settings Data Personal -->
            <?php include 'helpers/components/SettingsStepOneCv.php'; ?>
            <?php include 'helpers/components/SettingsStepTwoCv.php'; ?>
            <?php include 'helpers/components/SettingsStepThreeCv.php'; ?>
            <?php include 'helpers/components/SettingsStepFourCv.php'; ?>
            <?php include 'helpers/components/SettingsStepFiveCv.php'; ?>
            <?php include 'helpers/components/SettingsStepSixCv.php'; ?>
            <?php include 'helpers/components/SettingsStepSevenCv.php'; ?>
            <?php include 'helpers/components/SettingsStepEightCv.php'; ?>
            <!-- End Settings Data Personal -->

        </div>



        <div class="main-sidebar-cv">
            <div class="logo">
                <div class="icon-close">
                    <i class="material-icons-outlined">close</i>
                </div>
                <img src="<?php echo BASE_URL;?>Assets/img/app/gloobal-jardins-logo-light.png" alt="img">
                <h3>Curriculum<span>Vitae</span></h3>
            </div>
            <div class="main-items-sidebar">
                <div class="line-v"></div>
                <div class="items-sidebar-cv">
                    <div class="block-active"></div>
                    <div class="item-sidebar-cv step-trigger active" step="1">
                        <i class="material-icons-outlined">person</i>
                        <span>Datos personales</span>
                    </div>
                    <div class="item-sidebar-cv step-trigger" step="2">
                        <i class="material-icons-outlined">video_camera_front</i>
                        <span>Presentación personal</span>
                    </div>
                    <div class="item-sidebar-cv step-trigger" step="3">
                        <i class="material-icons-outlined">work_outline</i>
                        <span>Experiencia laboral</span>
                    </div>
                    <div class="item-sidebar-cv step-trigger" step="4">
                        <i class="material-icons-outlined">school</i>
                        <span>Formación académica reglada</span>
                    </div>
                    <div class="item-sidebar-cv step-trigger" step="5">
                        <i class="material-icons-outlined">auto_stories</i>
                        <span>Cursos adicionales</span>
                    </div>
                    <div class="item-sidebar-cv step-trigger" step="6">
                        <i class="material-icons-outlined">translate</i>
                        <span>Idiomas</span>
                    </div>
                    <div class="item-sidebar-cv step-trigger" step="7">
                        <i class="material-icons-outlined">alarm_on</i>
                        <span>Disponibilidades</span>
                    </div>
                    <div class="item-sidebar-cv step-trigger" step="8">
                        <i class="material-icons-outlined">anchor</i>
                        <span>Hobbies / Hábitos</span>
                    </div>
                    <div class="item-sidebar-cv">
                        <i class="material-icons-outlined">file_download</i>
                        <span>Revisar y descargar</span>
                    </div>

                </div>
            </div>
            <hr>
        </div>
    </div>
    <footer class="footer-section cv">
        <div class="item-footer">
            <i class="material-icons-outlined">edit_note</i>
            <div class="title">
                Curriculum Gratis
            </div>
            <div class="description">
                Crea tu curriculum Vitae gratis, pudiendo compartirlo a través de un enlace, imprimirlo en color o
                blanco y negro
            </div>
        </div>
        <div class="item-footer">
            <i class="material-icons-outlined">electric_bolt</i>
            <div class="title">
                Fácil y rápido
            </div>
            <div class="description">
                Ponemos a tu disposición una serie de herramientas que te permitirán llegar a miles de profesionales
                interesados en tu candidatura
            </div>
        </div>
        <div class="item-footer">
            <i class="material-icons-outlined">settings</i>
            <div class="title">
                Personaliza tu curriculum
            </div>
            <div class="description">
                Personaliza y edita tu curriculum en todo momento a través de tu panel de control. Tu decides si hacerlo
                público o privado!!
            </div>
        </div>
    </footer>
</div>