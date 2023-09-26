// ONLY DRAG AND DROP----------------------------------------------------------------------------
let dragSrcCvProfile = undefined;

const handleDragStartCvProfile = (e) => {
	e.target.classList.add('dragging');
	dragSrcCvProfile = e.target;
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', e.target.innerHTML);
}

const handleDragOverCvProfile = (e) => {
	if (e.preventDefault) {
		e.preventDefault();
	}
	e.dataTransfer.dropEffect = 'move';
	return false;
}

const handleDragEnterCvProfile = (e) => {
	e.target.classList.add('over');
}

const handleDragLeaveCvProfile = (e) => {
	e.target.classList.remove('over');
}

const handleDropCvProfile = (e) => {
	if (e.stopPropagation) {
		e.stopPropagation();
	}
	if (dragSrcCvProfile !== e.target) {
		let dragSrcOrder = dragSrcCvProfile.style.order;
		dragSrcCvProfile.style.order = e.target.style.order;
		e.target.style.order = dragSrcOrder;
		let toNumber = dragSrcCvProfile.querySelector('.number-img').textContent
		dragSrcCvProfile.querySelector('.number-img').textContent = e.target.querySelector('.number-img').textContent
		e.target.querySelector('.number-img').textContent = toNumber
	}

	return false;
}

const handleDragEndCvProfile = (e) => {
	document
		.querySelectorAll('.main-file-upload-cv #galleryCv .column')
		.forEach(col => {
			col.classList.remove('over');
		});
	e.target.classList.remove('dragging');
	return false;
}

// DROPBOX AND INPUT FILE ---------------------------------------------
let dropBoxCvProfile = document.querySelector('.main-file-upload-cv #dropBoxCv');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
	dropBoxCvProfile.addEventListener(evt, prevDefault, false);
});

function prevDefault(e) {
	e.preventDefault();
	e.stopPropagation();
}
['dragenter', 'dragover'].forEach(evt => {
	dropBoxCvProfile.addEventListener(evt, hoverCvProfile, false);
});
['dragleave', 'drop'].forEach(evt => {
	dropBoxCvProfile.addEventListener(evt, unhoverCvProfile, false);
});

function hoverCvProfile(e) {
	dropBoxCvProfile.classList.add('hover');
}

function unhoverCvProfile(e) {
	dropBoxCvProfile.classList.remove('hover');
}

dropBoxCvProfile.addEventListener('drop', mngDropCvProfile, false);

function mngDropCvProfile(e) {
	let dataTrans = e.dataTransfer;
	let files = dataTrans.files;
	filesManagerCvProfile(files);
}

function upFileCvProfile(file) {
	let imageType = /image.*/;
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

function previewFileCvProfile(file) {
	let imageType = /image.*/;
	if (file.type.match(imageType)) {
		let fReader = new FileReader();
		console.log('fReader')
		let gallery = document.querySelector('.main-file-upload-cv #galleryCv');
		fReader.readAsDataURL(file);
		fReader.onloadend = function () {
			let wrap = document.createElement('div');
			let buttonsModify = document.createElement('div');
			wrap.classList.add('column')
			wrap.draggable = true
			let numberImg = document.createElement('div')
			numberImg.classList.add('number-img')
			wrap.style.setProperty('--bg-img-cv', `url(${fReader.result})`)
			buttonsModify.classList.add('actions-img-cv')
			buttonsModify.innerHTML = `<div class="delete">
				<i class="material-icons-outlined">delete_forever</i>
			</div>
			<div class="rotate">
				<i class="material-icons-outlined">rotate_90_degrees_ccw</i>
			</div>`
			gallery.appendChild(wrap).appendChild(numberImg);
			gallery.appendChild(wrap).appendChild(buttonsModify);
			document
				.querySelectorAll('.main-file-upload-cv #galleryCv .column')
				.forEach(col => {
					col.addEventListener('dragstart', handleDragStartCvProfile, false);
					col.addEventListener('dragenter', handleDragEnterCvProfile, false);
					col.addEventListener('dragover', handleDragOverCvProfile, false);
					col.addEventListener('dragleave', handleDragLeaveCvProfile, false);
					col.addEventListener('drop', handleDropCvProfile, false);
					col.addEventListener('dragend', handleDragEndCvProfile, false);
				});
		}
	} else {
		console.error("Err... ||", file);
	}
}
function filesManagerCvProfile(files) {
	files = [...files]
	files.forEach(upFileCvProfile);
	files.forEach(previewFileCvProfile);
	setTimeout(() => {
		function ActionsCvProfile() {
			setTimeout(() => {
				let itemsImg = [...document.querySelectorAll('.main-file-upload-cv #galleryCv .column')]
				const countItems = itemsImg.length
				if (countItems == 0) {
					dropBoxCvProfile.style.display = 'flex'
				}
				itemsImg.map((el, index) => {
					let orderItem = index + 1
					el.style.order = orderItem
					if (orderItem == 1) {
						orderItem = 'Foto de perfil'
						el.querySelector('.number-img').textContent = orderItem
					} else {
						// el.querySelector('.number-img').textContent = orderItem
					}
					if (orderItem > 1) {
						el.remove()
					}
					if (countItems >= 1) {
						dropBoxCvProfile.style.display = 'none'
					} 
				});
			}, 100);
			
		}
		ActionsCvProfile()
		setTimeout(() => {
			let itemsImg = [...document.querySelectorAll('.main-file-upload-cv #galleryCv .column')]
			itemsImg.map((el, index) => {
				const deleteImgAds = el.querySelector('.actions-img-cv .delete')
				const rotateImgAds = el.querySelector('.actions-img-cv .rotate')
				deleteImgAds.addEventListener('click', (x) => {
					x.preventDefault();
					el.remove();
					ActionsCvProfile();
					document.getElementById('imgUploadCv').value = ''
				})
				let deg = 0
				rotateImgAds.addEventListener('click', (f) => {
					f.preventDefault()
					deg += 90
					el.style.setProperty('--rotate-img-cv', `rotate(${deg}deg)`) 
				})
			})
		}, 100);
	}, 200);
	
}