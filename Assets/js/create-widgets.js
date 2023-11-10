console.log('Create Widgets')
const inputTitleWidget = document.querySelector('.input__title__widget');
const inputDescriptionWidget = document.querySelector('.input__description__widget');
const titlePreviewWidget = document.getElementById('titlePreviewWidget');
const descriptionPreviewWidget = document.getElementById('descriptionPreviewWidget');

inputTitleWidget.addEventListener('keyup', function(e) {
    titlePreviewWidget.textContent = e.target.value;
});
inputDescriptionWidget.addEventListener('keyup', function(e) {
    descriptionPreviewWidget.textContent = e.target.value;
});