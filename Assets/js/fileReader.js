console.log('FileReader JS')
let dropBoxLogoCv = document.querySelector(`.create-widgets .dropBoxLogoCv`);
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
    dropBoxLogoCv.addEventListener(evt, function (e) {
        e.preventDefault();
        e.stopPropagation();
    }, false);
});
dropBoxLogoCv.addEventListener('drop', function (e) {
    let dataTrans = e.dataTransfer;
    let files = dataTrans.files;
    fileReader(files, 'galleryLogoCv', 'dropBoxLogoCv');
}, false);



// Funcion reutilizable
function fileReader(files, galleryClass, dropZoneClass) {

    var selectedImage = files[0];
    var reader = new FileReader();
    let gallery = document.querySelector('.' + galleryClass);
    let dropZone = document.querySelector('.' + dropZoneClass);

    reader.onload = function (e) {
    
        let item = document.createElement('div');
        let close = document.createElement('div');
        gallery.innerHTML = '';
        item.className = 'item-file-reader';
        item.style.backgroundImage = 'url(' + e.target.result + ')';
        close.className = 'item-file-reader__close';
        close.innerHTML = '<span class="item-file-reader__close--text">Remover</span><span class="material-icons-outlined">remove_circle_outline</span>';
        item.appendChild(close);
        gallery.appendChild(item);
        imagePreviewWidget(e.target.result);
        
        dropZone.style.display = 'none';
        gallery.style.display = 'flex';
        const removeItem = gallery.querySelector('.item-file-reader__close');
        removeItem.onclick = function (x) {
            x.preventDefault();
            gallery.style.display = 'none';
            dropZone.style.display = 'flex';
            e.target.result = '';
            console.log(e.target)
            console.log(e.target.result)
            imagePreviewWidget(BASE_URL + 'Assets/img/app/gloobal-jardins-logo.png');
        }
    }

    reader.readAsDataURL(selectedImage);
}
// Preview Image
function imagePreviewWidget(image) {
    const imagePreviewWidget = document.getElementById('imagePreviewWidget');
    imagePreviewWidget.src = image;
}