// ONLY DRAG AND DROP----------------------------------------------------------------------------
let dragSrcImgsCv = undefined;

const handleDragStartImgsCv = (e) => {
	e.target.classList.add('dragging');
	dragSrcImgsCv = e.target;
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', e.target.innerHTML);
}

const handleDragOverImgsCv = (e) => {
	if (e.preventDefault) {
		e.preventDefault();
	}
	e.dataTransfer.dropEffect = 'move';
	return false;
}

const handleDragEnterImgsCv = (e) => {
	e.target.classList.add('over');
}

const handleDragLeaveImgsCv = (e) => {
	e.target.classList.remove('over');
}

const handleDropImgsCv = (e) => {
	if (e.stopPropagation) {
		e.stopPropagation();
	}
	if (dragSrcImgsCv !== e.target) {
		let dragSrcOrderImgsCv = dragSrcImgsCv.style.order;
		dragSrcImgsCv.style.order = e.target.style.order;
		e.target.style.order = dragSrcOrderImgsCv;
		let toNumber = dragSrcImgsCv.querySelector('.number-img').textContent
		dragSrcImgsCv.querySelector('.number-img').textContent = e.target.querySelector('.number-img').textContent
		e.target.querySelector('.number-img').textContent = toNumber
	}

	return false;
}

const handleDragEndImgsCv = (e) => {
	document
		.querySelectorAll('.main-file-upload-imgs-cv #galleryImgsCv .column')
		.forEach(col => {
			col.classList.remove('over');
		});
	e.target.classList.remove('dragging');
	return false;
}

// DROPBOX AND INPUT FILE ---------------------------------------------
let dropBoxImgsCv = document.querySelector('.main-file-upload-imgs-cv #dropBoxImgsCv');
let addMoreImgsCv = document.querySelector('.main-file-upload-imgs-cv #add-more');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
	dropBoxImgsCv.addEventListener(evt, prevDefault, false);
	addMoreImgsCv.addEventListener(evt, prevDefault, false);
});

function prevDefault(e) {
	e.preventDefault();
	e.stopPropagation();
}
['dragenter', 'dragover'].forEach(evt => {
	dropBoxImgsCv.addEventListener(evt, hoverImgsCv, false);
	addMoreImgsCv.addEventListener(evt, hoverImgsCv, false);
});
['dragleave', 'drop'].forEach(evt => {
	dropBoxImgsCv.addEventListener(evt, unhoverImgsCv, false);
	addMoreImgsCv.addEventListener(evt, unhoverImgsCv, false);
});

function hoverImgsCv(e) {
	dropBoxImgsCv.classList.add('hover');
	addMoreImgsCv.classList.add('hover');
}

function unhoverImgsCv(e) {
	dropBoxImgsCv.classList.remove('hover');
	addMoreImgsCv.classList.remove('hover');
}

dropBoxImgsCv.addEventListener('drop', mngDropImgsCv, false);
addMoreImgsCv.addEventListener('drop', mngDropImgsCv, false);

function mngDropImgsCv(e) {
	let dataTrans = e.dataTransfer;
	let files = dataTrans.files;
	filesManagerImgsCv(files);
}

function upFileImgsCv(file) {
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

function previewFileImgsCv(file) {
	let imageType = /image.*/;
	if (file.type.match(imageType)) {
		let fReader = new FileReader();
		console.log('fReader')
		let gallery = document.querySelector('.main-file-upload-imgs-cv #galleryImgsCv');
		fReader.readAsDataURL(file);
		fReader.onloadend = function () {
			let wrap = document.createElement('div');
			let buttonsModify = document.createElement('div');
			wrap.classList.add('column')
			wrap.draggable = true
			let numberImg = document.createElement('div')
			numberImg.classList.add('number-img')
			wrap.style.setProperty('--bg-img-imgs-cv', `url(${fReader.result})`)
			buttonsModify.classList.add('actions-img-imgs-cv')
			buttonsModify.innerHTML = `<div class="delete">
				<i class="material-icons-outlined">delete_forever</i>
			</div>
			<div class="rotate">
				<i class="material-icons-outlined">rotate_90_degrees_ccw</i>
			</div>`
			gallery.appendChild(wrap).appendChild(numberImg);
			gallery.appendChild(wrap).appendChild(buttonsModify);
			document
				.querySelectorAll('.main-file-upload-imgs-cv #galleryImgsCv .column')
				.forEach(col => {
					col.addEventListener('dragstart', handleDragStartImgsCv, false);
					col.addEventListener('dragenter', handleDragEnterImgsCv, false);
					col.addEventListener('dragover', handleDragOverImgsCv, false);
					col.addEventListener('dragleave', handleDragLeaveImgsCv, false);
					col.addEventListener('drop', handleDropImgsCv, false);
					col.addEventListener('dragend', handleDragEndImgsCv, false);
				});
		}
	} else {
		console.error("Err... ||", file);
	}
}
function filesManagerImgsCv(files) {
	files = [...files]
	files.forEach(upFileImgsCv);
	files.forEach(previewFileImgsCv);
	setTimeout(() => {
		function ActionsImgsCv() {
			setTimeout(() => {
				let itemsImg = [...document.querySelectorAll('.main-file-upload-imgs-cv #galleryImgsCv .column')]
				const countItems = itemsImg.length
				if (countItems == 0) {
					addMoreImgsCv.style.display = 'none'
					dropBoxImgsCv.style.display = 'flex'
				}
				itemsImg.map((el, index) => {
					let orderItem = index + 1
					el.style.order = orderItem
					if (orderItem == 1) {
						orderItem = 'Principal'
						el.querySelector('.number-img').textContent = orderItem
					} else {
						el.querySelector('.number-img').textContent = orderItem
					}
					if (orderItem > 9) {
						el.remove()
					}
					if (countItems >= 9) {
						addMoreImgsCv.style.display = 'none'
						dropBoxImgsCv.style.display = 'none'
					}  else  {
						addMoreImgsCv.style.display = 'flex'
						dropBoxImgsCv.style.display = 'none'
					}
					addMoreImgsCv.style.order = countItems + 1
				});
			}, 200);
			
		}
		ActionsImgsCv()
		setTimeout(() => {
			let itemsImg = [...document.querySelectorAll('.main-file-upload-imgs-cv #galleryImgsCv .column')]
			itemsImg.map((el, index) => {
				const deleteImgAds = el.querySelector('.actions-img-imgs-cv .delete')
				const rotateImgAds = el.querySelector('.actions-img-imgs-cv .rotate')
				deleteImgAds.addEventListener('click', (x) => {
					x.preventDefault();
					el.remove();
					ActionsImgsCv();
				})
				let deg = 0
				rotateImgAds.addEventListener('click', (f) => {
					f.preventDefault()
					deg += 90
					el.style.setProperty('--rotate-img-imgs-cv', `rotate(${deg}deg)`) 
				})
			})
		}, 100);
	}, 200);
	
}