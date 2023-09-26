// ONLY DRAG AND DROP----------------------------------------------------------------------------
let dragSrc = undefined;

const handleDragStart = (e) => {
	e.target.classList.add('dragging');
	dragSrc = e.target;
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', e.target.innerHTML);
}

const handleDragOver = (e) => {
	if (e.preventDefault) {
		e.preventDefault();
	}
	e.dataTransfer.dropEffect = 'move';
	return false;
}

const handleDragEnter = (e) => {
	e.target.classList.add('over');
}

const handleDragLeave = (e) => {
	e.target.classList.remove('over');
}

const handleDrop = (e) => {
	if (e.stopPropagation) {
		e.stopPropagation();
	}
	if (dragSrc !== e.target) {
		let dragSrcOrder = dragSrc.style.order;
		dragSrc.style.order = e.target.style.order;
		e.target.style.order = dragSrcOrder;
		let toNumber = dragSrc.querySelector('.number-img').textContent
		dragSrc.querySelector('.number-img').textContent = e.target.querySelector('.number-img').textContent
		e.target.querySelector('.number-img').textContent = toNumber
	}

	return false;
}

const handleDragEnd = (e) => {
	document
		.querySelectorAll('.main-file-upload #galleryAds .column')
		.forEach(col => {
			col.classList.remove('over');
		});
	e.target.classList.remove('dragging');
	return false;
}

// DROPBOX AND INPUT FILE ---------------------------------------------
let dropBox = document.querySelector('.main-file-upload #dropBox');
let addMore = document.querySelector('.main-file-upload #add-more');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
	dropBox.addEventListener(evt, prevDefault, false);
	addMore.addEventListener(evt, prevDefault, false);
});

function prevDefault(e) {
	e.preventDefault();
	e.stopPropagation();
}
['dragenter', 'dragover'].forEach(evt => {
	dropBox.addEventListener(evt, hover, false);
	addMore.addEventListener(evt, hover, false);
});
['dragleave', 'drop'].forEach(evt => {
	dropBox.addEventListener(evt, unhover, false);
	addMore.addEventListener(evt, unhover, false);
});

function hover(e) {
	dropBox.classList.add('hover');
	addMore.classList.add('hover');
}

function unhover(e) {
	dropBox.classList.remove('hover');
	addMore.classList.remove('hover');
}

dropBox.addEventListener('drop', mngDrop, false);
addMore.addEventListener('drop', mngDrop, false);

function mngDrop(e) {
	let dataTrans = e.dataTransfer;
	let files = dataTrans.files;
	filesManager(files);
}

function upFile(file) {
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

function previewFile(file) {
	let imageType = /image.*/;
	if (file.type.match(imageType)) {
		let fReader = new FileReader();
		console.log('fReader')
		let gallery = document.querySelector('.main-file-upload #galleryAds');
		fReader.readAsDataURL(file);
		fReader.onloadend = function () {
			let wrap = document.createElement('div');
			let buttonsModify = document.createElement('div');
			wrap.classList.add('column')
			wrap.draggable = true
			let numberImg = document.createElement('div')
			numberImg.classList.add('number-img')
			wrap.style.setProperty('--bg-img-ads', `url(${fReader.result})`)
			buttonsModify.classList.add('actions-img-ads')
			buttonsModify.innerHTML = `<div class="delete">
				<i class="material-icons-outlined">delete_forever</i>
			</div>
			<div class="rotate">
				<i class="material-icons-outlined">rotate_90_degrees_ccw</i>
			</div>`
			gallery.appendChild(wrap).appendChild(numberImg);
			gallery.appendChild(wrap).appendChild(buttonsModify);
			document
				.querySelectorAll('.main-file-upload #galleryAds .column')
				.forEach(col => {
					col.addEventListener('dragstart', handleDragStart, false);
					col.addEventListener('dragenter', handleDragEnter, false);
					col.addEventListener('dragover', handleDragOver, false);
					col.addEventListener('dragleave', handleDragLeave, false);
					col.addEventListener('drop', handleDrop, false);
					col.addEventListener('dragend', handleDragEnd, false);
				});
		}
	} else {
		console.error("Err... ||", file);
	}
}
let maxFilesLength = 0
function filesManager(files) {
	files = [...files]
	files.forEach(upFile);
	files.forEach(previewFile);
	setTimeout(() => {
		function ActionsAds() {
			setTimeout(() => {
				let itemsImg = [...document.querySelectorAll('.main-file-upload #galleryAds .column')]
				const countItems = itemsImg.length
				if (countItems == 0) {
					addMore.style.display = 'none'
					dropBox.style.display = 'flex'
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
						addMore.style.display = 'none'
						dropBox.style.display = 'none'
					}  else  {
						addMore.style.display = 'flex'
						dropBox.style.display = 'none'
					}
					addMore.style.order = countItems + 1
				});
			}, 100);
			
		}
		ActionsAds()
		setTimeout(() => {
			let itemsImg = [...document.querySelectorAll('.main-file-upload #galleryAds .column')]
			itemsImg.map((el, index) => {
				const deleteImgAds = el.querySelector('.actions-img-ads .delete')
				const rotateImgAds = el.querySelector('.actions-img-ads .rotate')
				deleteImgAds.addEventListener('click', (x) => {
					x.preventDefault();
					el.remove();
					ActionsAds();
				})
				let deg = 0
				rotateImgAds.addEventListener('click', (f) => {
					f.preventDefault()
					deg += 90
					el.style.setProperty('--rotate-img-ads', `rotate(${deg}deg)`) 
				})
			})
		}, 100);
	}, 200);
	
}