function loadImage(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
          continue; 
      }
      var reader = new FileReader();
      reader.onload = (function(theFile) {
          return function(e) {
            // Insertamos la imagen
           document.getElementById("user-banner-load").innerHTML =
            ['<img class="user-image-load" src="', e.target.result,'" />'].join('');
            // title="', String(theFile.name), '"
          };
      })(f);
      reader.readAsDataURL(f);
    }
}
function loadImagea(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
          continue; 
      }
      var reader = new FileReader();
      reader.onload = (function(theFile) {
          return function(e) {
            // Insertamos la imagen
           document.getElementById("user-thumb-load").innerHTML =
            ['<img class="user-image-load" src="', e.target.result,'" />'].join('');
            // title="', String(theFile.name), '"
          };
      })(f);
      reader.readAsDataURL(f);
    }
}
(function UserImageLoad() {
  const userBanner = document.getElementById('user-banner')
  const userThumb = document.getElementById('user-thumb')
  userBanner.addEventListener('change', loadImage, false);
  userThumb.addEventListener('change', loadImagea, false);
})();
