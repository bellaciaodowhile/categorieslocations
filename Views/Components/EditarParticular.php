<div class="main-container-edit-personal-information">
    <div class="container-personal-data">
        <div class="wrap-form">
            <form class="personal-data" action="#" method="post">
                    <i class="material-icons close-modal-form">close</i>
                    <h3>Editar</h3>
                    <h2>Datos Personales</h2>
                    <hr class="divider bg-mantis">
                    <div class="radio">
                        <input type="radio" name="genero" id="Sr"/>
                        <label for="Sr">Sr.</label>
                        <input type="radio" name="genero" id="Sra"/>
                        <label for="Sra">Sra.</label>
                    </div>
                    <div class="user-data">
                        <label class="txt-field">
                            <span class="input-normal">Nombre*</span>
                            <input  type="text" name="Nombre"/>
                        </label>
                    </div>

                    <div class="user-data">
                        <label class="txt-field">
                            <span class="input-normal">Apellidos*</span>
                            <input  type="text" name="Apellidos"/>
                        </label>
                    </div>

                    <div class="user-data">
                        <label class="txt-field">
                            <span class="input-normal">Email*</span>
                            <input  type="text" name="Email"/>
                        </label>
                    </div>
                    
                    <div class="user-data">
                        <label class="txt-field">
                            <span class="input-normal">Teléfono*</span>
                            <input  type="text" name="Telefono"/>
                        </label>
                    </div>

                    <div class="user-data">
                        <label class="txt-field">
                            <span class="input-normal">DNI / NIE</span>
                            <input  type="text" name="DNI-NIE"/>
                        </label>
                    </div>



                    <div class="user-data datepicker-user-data">
                        <span class="date">Fecha de Nacimiento</span>    
                        
                        <div class="d-flex">
                            <div class="user-data">
                                <label class="txt-field">
                                    <span class="input-normal">Día</span>
                                    <input  type="text" name="DNI-NIE"/>
                                </label>
                            </div>
                            <div class="user-data">
                                <label class="txt-field">
                                    <span class="input-normal">Mes</span>
                                    <input  type="text" name="DNI-NIE"/>
                                </label>
                            </div>
                            <input type="date" id="dob">
                        </div>
                    </div>
                
                    <div class="user-data switch-main">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round">
                                <span class="active">Activo</span>
                                <span class="inactive">Inactivo</span>
                            </span>
                        </label>
                    </div>

                    <div class="user-data">
                        <label class="txt-field">
                            <span class="input-normal">Profesión</span>
                            <input  type="text"
                                    autocomplete="nope"
                                    spellcheck="false"
                                    name="Profesion"/>
                        </label>
                    </div>

                    <div class="checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox1"/>
                        <label for="checkbox1">Acepto los Términos y Condiciones</label>
                    </div>
                    
                    <div class="bottom-form">
                        <div class="action">
                            Borrar
                        </div>
                        <div class="action save">
                            Guardar
                        </div>
                    </div>

                </form>
                
        </div>
    </div>
</div>