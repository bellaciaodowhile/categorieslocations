<!-- ads.css - tabs-ads.css - search-input.css - chevrondown.css -->
<div class="main-parent-subtabs-gj8 main-global-users-subtabs-gj8">
    <div class="main-triggers-subtabs-gj8 main-subtabs-gj8">
        <div class="tab-trigger-subtabs-gj8 tab-admin-trigger">
            <i class="material-icons-outlined">add_circle_outline</i>Crear filtro
        </div>
        <div class="tab-trigger-subtabs-gj8">
            Categorías
        </div>
        <div class="tab-trigger-subtabs-gj8">
            Localizaciones
        </div>
    </div>
    <div class="toastGj8"></div>
    <div class="main-subtabs-content-gj8">
        <div class="tab-content-subtabs-gj8">
            <?php require 'Views/Components/CreateFilters.php'; ?>
        </div>
        <div class="tab-content-subtabs-gj8">
            <?php require 'Views/Components/BreadcumbCategories.php'; ?>
            <?php require 'Views/Components/TableAdminCategories.php'; ?>
        </div>
        <div class="tab-content-subtabs-gj8">
            <?php require 'Views/Components/BreadcumbLocations.php'; ?>
            <?php require 'Views/Components/TableAdminLocations.php'; ?>
        </div>
    </div>
</div>
<?php require 'Views/Components/UpdateCategorie.php'; ?>
<?php require 'Views/Components/UpdateLocation.php'; ?>
<?php require 'Views/Components/UpdateLocationCountry.php'; ?>