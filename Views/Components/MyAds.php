<div class="my-ads">
    <div class="header-my-ads">
        <div class="count-my-ads">
            <h3 class="title">Mis anuncios</h3>
            <h6 class="subtitle"><span class="color-primary-light first">6</span> anuncios</h6>
        </div>
        <div class="more-my-ads">
            <div class="item-more-my-ads">
                <h3 class="title">Mis Créditos -
                    <span class="color-primary-light more-view">
                        Ver más <i class="material-icons">arrow_forward</i>
                    </span>
                </h3>
                <h6 class="subtitle">Usa tus créditos para mejorar la visibilidad de tus anuncios</h6>
            </div>
            <div class="item-more-my-ads">
                <h3 class="title">Disponibles</h3>
                <div class="number color-primary-light">0</div>
            </div>
            <div class="item-more-my-ads">
                <h3 class="title">Reservados</h3>
                <div class="number color-primary-light">0</div>
            </div>
            <div class="btn-primary-light">
                Recargar
            </div>
        </div>
    </div>
    <div class="main-search-my-ads-tabs">
        <div class="search-my-ads-tabs">

            <div class="input-form user-data">
                <label class="txt-field icon-right">
                    <span class="input-normal">Buscar entre tus anuncios activos</span>
                    <input type="text" name="serachMyAds" class="search-cards-ads actives"/>
                    <i class="material-icons">search</i>
                </label>
            </div>

            <div class="input-form user-data" style="display: none">
                <label class="txt-field icon-right">
                    <span class="input-normal">Buscar entre tus anuncios vendidos</span>
                    <input type="text" name="serachMyAds" class="search-cards-ads sold"/>
                    <i class="material-icons">search</i>
                </label>
            </div>
            <div class="input-form user-data" style="display: none">
                <label class="txt-field icon-right">
                    <span class="input-normal">Buscar entre tus anuncios pausados</span>
                    <input type="text" name="serachMyAds" class="search-cards-ads paused"/>
                    <i class="material-icons">search</i>
                </label>
            </div>

            <div class="tabs-my-ads">
                <span class="bar"></span>
                <div class="tab-trigger-my-ads actives active">
                    Activos <span class="count-tab-my-ads actives"></span>
                </div>
                <div class="tab-trigger-my-ads sold">
                    Vendidos <span class="count-tab-my-ads sold"></span>
                </div>
                <div class="tab-trigger-my-ads paused">
                    Pausados <span class="count-tab-my-ads paused"></span>
                </div>
            </div>
        </div>
        <div class="tabs-content-my-ads">
            <div class="tab-item-my-ads">
                <div class="order-by">
                    <label for="orderBy">
                        Ordenado por <span>más baratos</span>
                        <i class="material-icons">expand_more</i>
                    </label>
                    <input type="checkbox" id="orderBy">
                    <div class="content-orderBy">
                        <div class="title-orderBy">
                            ordenado por
                        </div>
                        <div class="item-orderBy">
                            Relevancia
                        </div>
                        <div class="item-orderBy">
                            Más recientes primero
                        </div>
                        <div class="item-orderBy active">
                            Precio: más barato primero
                        </div>
                        <div class="item-orderBy">
                            Precio: más caro primero
                        </div>
                    </div>
                </div>
                <div class="main-cards-my-ads actives"></div>
                <div class="has-no-ads" style="display: none">
                    <img src="<?php echo BASE_URL;?>Assets/img/app/ausencia-productos.png" alt="ImgFooterBanner">
                    <div class="title">
                        Aún no tienes ningún anuncio
                    </div>
                    <div class="subtitle">
                        Si hay algo que ya no usas, véndelo. <br>Es rápido y fácil.
                    </div>
                </div>

            </div>
            <div class="tab-item-my-ads">
                <div class="order-by sold">
                    <label for="orderBySold">
                        Ordenado por <span>más baratos</span>
                        <i class="material-icons">expand_more</i>
                    </label>
                    <input type="checkbox" id="orderBySold">
                    <div class="content-orderBy">
                        <div class="title-orderBy">
                            ordenado por
                        </div>
                        <div class="item-orderBy">
                            Relevancia
                        </div>
                        <div class="item-orderBy">
                            Más recientes primero
                        </div>
                        <div class="item-orderBy active">
                            Precio: más barato primero
                        </div>
                        <div class="item-orderBy">
                            Precio: más caro primero
                        </div>
                    </div>
                </div>
                <div class="main-cards-my-ads sold"></div>
                <div class="has-no-ads" style="display: none">
                    <img src="<?php echo BASE_URL;?>Assets/img/app/ausencia-productos.png" alt="ImgFooterBanner">
                    <div class="title">
                        No tienes anuncios vendidos
                    </div>
                    <div class="subtitle">
                        Selecciona el estado Vendido en el desplegable de estados de un anuncio para que desaparezca del listado de búsqueda.
                    </div>
                </div>
            </div>
            <div class="tab-item-my-ads">
                <div class="order-by paused">
                    <label for="orderByPaused">
                        Ordenado por <span>más baratos</span>
                        <i class="material-icons">expand_more</i>
                    </label>
                    <input type="checkbox" id="orderByPaused">
                    <div class="content-orderBy">
                        <div class="title-orderBy">
                            ordenado por
                        </div>
                        <div class="item-orderBy">
                            Relevancia
                        </div>
                        <div class="item-orderBy">
                            Más recientes primero
                        </div>
                        <div class="item-orderBy active">
                            Precio: más barato primero
                        </div>
                        <div class="item-orderBy">
                            Precio: más caro primero
                        </div>
                    </div>
                </div>
                <div class="main-cards-my-ads paused"></div>
                <div class="has-no-ads" style="display: none">
                    <img src="<?php echo BASE_URL;?>Assets/img/app/ausencia-productos.png" alt="ImgFooterBanner">
                    <div class="title">
                        No tienes anuncios pausados
                    </div>
                    <div class="subtitle">
                        Selecciona el estado Pausado en el desplegable de estados de un anuncio para que no aparezca en el listado de búsqueda por un cierto tiempo.
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-banner">
            <img src="<?php echo BASE_URL;?>Assets/img/app/posicionar.png" alt="ImgFooterBanner">
            <div class="banner-content">
                <div class="title-footer-banner">¿Sabes cómo posicionar más arriba tus anuncios?</div>
                <div class="subtitle-footer-banner">Puedes utilizar distintos métodos para lograr que tus anuncios estén arriba durante más tiempo.</div>
                <div class="btn-primary-light">
                    Descrúbrelo
                    <i class="material-icons">arrow_forward</i>
                </div>
            </div>
        </div>
    </div>
</div>