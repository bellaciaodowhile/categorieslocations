<div class="main-table">
    <?php include_once 'helpers/components/CreateDirection.php'; ?>
    <?php include_once 'helpers/components/MapDirection.php'; ?>
    <div class="btn-top-absolute modal-form create-direction">
        <i class="material-icons-outlined">add_circle_outline</i>
        Crear
    </div>
    <div class="btn-top-absolute map">
        <i class="material-icons-outlined">place</i>
        Mapa
    </div>
    <div class="main-scroll indication">
        <table class="table-simple table-general directions">
            <thead>
                <tr>
                    <th></th>
                    <th class="th"><label class="checkbox-table"> <input type="checkbox"> <span class="checkmark"></span> </label></th>
                    <th class="th">#</th>
                    <th class="th">Posición</th>
                    <th class="th">Nombre</th>
                    <th class="th">Dirección</th>
                    <th class="th">Dirección (Línea 2)</th>
                    <th class="th">Código Postal</th>
                    <th class="th">Población</th>
                    <th class="th">Provincia</th>
                    <th class="th">Acciones</th>
                    <th class="eye-position">
                        <div class="show-visibility-table directions">
                            <i class="material-icons">visibility</i>
                        </div>

                        <div class="main-box directions">
                            <div class="box-list-items directions">
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>

            
            
            <tbody></tbody>
        </table>
        <div class="arrows-indication">
            <div class="text">
                Filas por página: 
            </div>

            <div class="select-form table">
                <select>
                    <option value="0">10</option>
                    <option value="1">10</option>
                    <option value="2">25</option>
                    <option value="3">50</option>
                    <option value="4">75</option>
                    <option value="5">100</option>
                </select>
            </div>
           
            <div class="current-total">
                10 of 100
            </div>
            <div class="icons-arrows">
                <i class="material-icons">first_page</i>
                <i class="material-icons">chevron_left</i>
                <i class="material-icons">chevron_right</i>
                <i class="material-icons">last_page</i>
            </div>
        </div>

        <div class="dropdown-table selected">
            <div class="action">
                Selección 
                <i class="material-icons">arrow_drop_down</i>
            </div>
            <div class="items-actions">
                <div class="item">
                    Página actual 
                </div>
                <div class="item">
                    Todos 
                </div>
                <div class="item">
                    Inactivos 
                </div>
                <div class="item">
                    Activos
                </div>
            </div>
        </div>
        
        <div class="dropdown-table actions">
            <div class="action">
                Acción
                <i class="material-icons">arrow_drop_down</i>
            </div>
            <div class="items-actions">
                <div class="item">
                    Eliminar 
                </div>
                <div class="item">
                    Desactivar 
                </div>
                <div class="item">
                    Activar 
                </div>
                <div class="item">
                    Duplicar 
                </div>
                <div class="item">
                    Mover 
                </div>
            </div>
        </div>


    </div>
</div>