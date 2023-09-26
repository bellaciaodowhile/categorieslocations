// DROPBOX AND INPUT FILE ---------------------------------------------
let dropBoxVideoCv = document.querySelector('.main-file-upload-video-cv #dropBoxVideoCv');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
	dropBoxVideoCv.addEventListener(evt, prevDefault, false);
});

function prevDefault(e) {
	e.preventDefault();
	e.stopPropagation();
}
['dragenter', 'dragover'].forEach(evt => {
	dropBoxVideoCv.addEventListener(evt, hoverVideoCv, false);
});
['dragleave', 'drop'].forEach(evt => {
	dropBoxVideoCv.addEventListener(evt, unhoverVideoCv, false);
});

function hoverVideoCv(e) {
	dropBoxVideoCv.classList.add('hover');
}

function unhoverVideoCv(e) {
	dropBoxVideoCv.classList.remove('hover');
}

dropBoxVideoCv.addEventListener('drop', mngDropVideoCv, false);

function mngDropVideoCv(e) {
	let dataTrans = e.dataTransfer;
	let files = dataTrans.files;
	filesManagerVideoCv(files);
}

function upFileVideoCv(file) {
	let imageType = /video.*/;
	if (file.type.match(imageType)) {
		let url = 'HTTP/HTTPS URL TO SEND THE DATA TO';
		let formData = new FormData();
		formData.append('file', file);
		// fetch(url, {
		// 	method: 'put',
		// 	body: formData
		// })
		// .then(response => response.json())
		// .then(result => { console.log('Success:', result); })
		// .catch(error => { console.error('Error:', error); });
	} else {
		console.error("Err...", file);
	}
}

function previewFileVideoCv(file) {
	let imageType = /video.*/;
	if (file.type.match(imageType)) {
		let fReader = new FileReader();
        // console.log(fReader)
		console.log('fReader Video')
		let gallery = document.querySelector('.main-file-upload-video-cv #galleryVideoCv');
		fReader.readAsDataURL(file);
		fReader.onloadend = function () {
			let wrap = document.createElement('div');
			let buttonsModify = document.createElement('div');
			wrap.classList.add('column')
			buttonsModify.classList.add('actions-img-imgs-cv')
			buttonsModify.innerHTML = `<div class="delete">
				<i class="material-icons-outlined">delete_forever</i>
			</div>`
            const videoCv = document.createElement('video')
            videoCv.controls = true
            videoCv.classList.add('video-preview')
            const videourl = URL.createObjectURL(file);
            videoCv.setAttribute("src", videourl);
            gallery.appendChild(wrap).appendChild(videoCv)
			gallery.appendChild(wrap).appendChild(buttonsModify);
		}
	} else {
		console.error("Err... ||", file);
	}
}
function filesManagerVideoCv(files) {
	files = [...files]
	files.forEach(upFileVideoCv);
	files.forEach(previewFileVideoCv);
	setTimeout(() => {
		function ActionsVideoCv() {
			setTimeout(() => {
				let itemsImg = [...document.querySelectorAll('.main-file-upload-video-cv #galleryVideoCv .column')]
				const countItems = itemsImg.length
                console.log(countItems)
				if (countItems == 0) {
					dropBoxVideoCv.style.display = 'flex'
				} else {
                    dropBoxVideoCv.style.display = 'none'
                }
			}, 200);
		}
		ActionsVideoCv()
		setTimeout(() => {
			let itemsImg = [...document.querySelectorAll('.main-file-upload-video-cv #galleryVideoCv .column')]
			itemsImg.map((el, index) => {
				const deleteImgAds = el.querySelector('.actions-img-imgs-cv .delete')
				deleteImgAds.addEventListener('click', (x) => {
					x.preventDefault();
					el.remove();
					ActionsVideoCv();
				})
			})
		}, 100);
	}, 200);
	
}