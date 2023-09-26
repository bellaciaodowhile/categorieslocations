<div class="main-tabs-articles">
    <div class="tab-articles add post-articles">
        <i class="material-icons-outlined">add_circle_outline</i>Publicar un Artículo
    </div>
    <div class="tab-articles trigger-my-articles">
        Mis artículos
    </div>
</div>


<div class="posting-articles">
    <div class="container-articles">
        <h2 class="h2-title">Publica gratis un artículo y gana créditos</h2>
        <h4 class="subtitle small"><span class="step-articles-number">1</span>/3: Elige la categoría de tu artículo</h4>
        <div class="bars-articles">
            <div class="active"></div>
            <div></div>
            <div></div>
        </div>

        <?php include 'helpers/components/StepOneArticles.php'; ?>
        <?php include 'helpers/components/StepTwoArticles.php'; ?>
        <?php include 'helpers/components/StepThirdArticles.php'; ?>
        
    </div>

    <footer class="footer-section">
        <div class="item-footer">
            <i class="material-icons-outlined">edit_note</i>
            <div class="title">
                Artículos gratis
            </div>
            <div class="description">
                Publicar artículos es gratis y te permitirá ganar créditos para usarlos en servicios de pago de <strong>Gloobal Jardins.</strong>
            </div>
        </div>
        <div class="item-footer">
            <i class="material-icons-outlined">electric_bolt</i>
            <div class="title">
               Fácil y rápido
            </div>
            <div class="description">
                Sube unas fotos, escribe el contenido del artículo, asígnalo a una categoría y ¡listos! ...a ganar créditos!
            </div>
        </div>
        <div class="item-footer">
            <i class="material-icons-outlined">settings</i>
            <div class="title">
                Personaliza tu artículo
            </div>
            <div class="description">
                Incorpora elementos personalizados a tus artículos (encuestas, acciones e interacciones, tu lista de anuncios y mucho más...)
            </div>
        </div>
    </footer>
</div>
<?php include 'helpers/components/MyArticles.php'; ?>