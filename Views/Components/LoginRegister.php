<div class="container-login">
    <div class="login-register">
        <div class="banner-user">
            <div class="logo-trans">
                <span class="close-login-register">
                    <i class="material-icons">close</i>
                </span>
                <img
                src="<?php echo BASE_URL;?>Assets/img/app/gloobal-jardins-logo-light.png"
                alt="Nombre de la empresa o usuario"
                />
            </div>
            <div class="container-ready" style="display: none;">
                <div class="main">
                    <div class="name-user">
                        Name User
                    </div>
                    <div class="email-user">
                        email@email.com
                    </div>
                </div>
                <div class="others-professional-accounts">
                    <div class="trigger-more">
                        <i class="material-icons">cached</i>
                        <div class="text">
                            Otras cuentas profesionales
                        </div>
                        <i class="material-icons">expand_more</i>
                    </div>
                    <div class="content-professional-accounts">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cum quisquam nihil corporis blanditiis? Suscipit sint a recusandae iusto impedit nam placeat expedita, cupiditate tempora voluptate fugiat sit eaque non.
                    </div>
                </div>
                <div class="accounts">
                    <div class="item-account">
                        <div class="main-account">
                            <i class="material-icons">person</i>
                            <div class="text">Particular</div>
                            <div class="status particular">
                                <div></div>
                                Activo
                            </div>
                        </div>
                        <div class="options-accounts">
                            <div class="d-flex">
                                <a href="#" class="item accounts-messages active">
                                    <i class="material-icons">forum</i> 1
                                </a>
                                <a href="#" class="item accounts-profile">
                                    <i class="material-icons">visibility</i> Perfil
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="item-account">
                        <div class="main-account">
                            <i class="material-icons">person</i>
                            <div class="text">Particular</div>
                            <div class="status professional">
                                <div></div>
                                Darse de alta
                            </div>
                        </div>
                        <div class="options-accounts">
                            <div class="d-flex">
                                <a href="#" class="item accounts-messages">
                                    <i class="material-icons">forum</i> 1
                                </a>
                                <a href="#" class="item accounts-profile">
                                    <i class="material-icons">visibility</i> Perfil
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="center">
                    <button type="submit" class="btn-login">CERRAR SESIÓN</button>
                </div>
            </div>
            <div class="container-tab" >
                <div class="tab">
                    <button
                    class="tablinks animated-line"
                    onclick="openTab(event, 'login')"
                    id="defaultOpen"
                    >
                            Iniciar Sesión
                        </button>
                        <button
                        class="tablinks animated-line"
                        onclick="openTab(event, 'register')"
                        >
                        Registrarse
                    </button>
                </div>
        
                <div id="login" class="tabcontent">
                    <form class="form-login" action="#" method="post">
                        <div>
                            <i class="material-icons-outlined">email</i>
                            <label>
                                <span>E-mail*</span>
                                <input
                                type="text"
                                autocomplete="off"
                                spellcheck="false"
                                name="email"
                                />
                            </label>
                        </div>
                        <div>
                            <i class="material-icons-outlined">lock</i>
                            <label>
                                <span> Contraseña*</span>
                                <input
                                type="password"
                                autocomplete="off"
                                spellcheck="false"
                                name="password"
                                />
                            </label>
                        </div>
                        
                        <div class="lost-pass">
                            <p>¿Ha olvidado su contraseña?</p>
                            <a
                            href="#"
                            class="animated-line"
                            title="Pulse aquí para recuperar su contraseña"
                            >Recuperar contraseña</a
                            >
                        </div>
                        <div class="center">
                            <button type="submit" class="btn-login">Identificarse</button>
                        </div>
                    </form>
                </div>
                
                <div id="register" class="tabcontent">
                    <form class="form-register" action="#" method="post">
                        <div>
                            <i class="material-icons">person</i>
                            <label>
                                <span>Nombre*</span>
                                <input
                                type="text"
                                autocomplete="off"
                                spellcheck="false"
                                name="nombre"
                                />
                            </label>
                        </div>
                        <div>
                            <i class="material-icons">person</i>
                            <label>
                                <span>Apellido*</span>
                                <input
                                type="text"
                                autocomplete="off"
                                spellcheck="false"
                                name="apellido"
                                />
                            </label>
                        </div>
                        <div>
                            <i class="material-icons-outlined">email</i>
                            <label>
                                <span>E-mail*</span>
                                <input
                                type="text"
                                autocomplete="off"
                                spellcheck="false"
                                name="email"
                                />
                            </label>
                        </div>
                        <div>
                            <i class="material-icons">phone</i>
                            <label>
                                <span>Teléfono*</span>
                                <input
                                type="text"
                                autocomplete="off"
                                spellcheck="false"
                                name="telefono"
                                />
                            </label>
                        </div>
                        <div>
                            <i class="material-icons-outlined">lock</i>
                            <label>
                                <span> Contraseña*</span>
                                <input
                                type="password"
                                autocomplete="off"
                                spellcheck="false"
                                name="password"
                                />
                            </label>
                        </div>
                        <div>
                            <i class="material-icons-outlined">lock</i>
                            <label>
                                <span> Repetir contraseña*</span>
                                <input
                                type="password"
                                autocomplete="off"
                                spellcheck="false"
                                name="password"
                                />
                            </label>
                        </div>
                        <div class="grid-last">
                            <input type="checkbox" id="activate">
                            <label for="activate" class="cg-cookies"><span>Aceptar condiciones generales y cookies*</span></label>
                        </div>
                    </form>
                    <div class="center register">
                        <a href="#" class="btn-login">Registrarse</a>
                    </div>
                </div>
            </div>
            <div class="privacy">
                <div>
                    <a class="animated-line2" href="#" title="Politicas de privacidad">
                        Politicas de privacidad
                    </a>
                </div>
                <div>
                    <a class="animated-line2" href="#" title="Términos del servicio">
                        Términos del servicio
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
