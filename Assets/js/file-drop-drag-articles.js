// ONLY DRAG AND DROP----------------------------------------------------------------------------
let dragSrcArticle = undefined;

const handleDragStartArticles = (e) => {
	e.target.classList.add('dragging');
	dragSrcArticle = e.target;
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', e.target.innerHTML);
}

const handleDragOverArticles = (e) => {
	if (e.preventDefault) {
		e.preventDefault();
	}
	e.dataTransfer.dropEffect = 'move';
	return false;
}

const handleDragEnterArticles = (e) => {
	e.target.classList.add('over');
}

const handleDragLeaveArticles = (e) => {
	e.target.classList.remove('over');
}

const handleDropArticles = (e) => {
	if (e.stopPropagation) {
		e.stopPropagation();
	}
	if (dragSrcArticle !== e.target) {
		let dragSrcOrder = dragSrcArticle.style.order;
		dragSrcArticle.style.order = e.target.style.order;
		e.target.style.order = dragSrcOrder;
		let toNumber = dragSrcArticle.querySelector('.number-img').textContent
		dragSrcArticle.querySelector('.number-img').textContent = e.target.querySelector('.number-img').textContent
		e.target.querySelector('.number-img').textContent = toNumber
	}

	return false;
}

const handleDragEndArticles = (e) => {
	document
		.querySelectorAll('.main-file-upload-articles #galleryArticles .column')
		.forEach(col => {
			col.classList.remove('over');
		});
	e.target.classList.remove('dragging');
	return false;
}

// DROPBOX AND INPUT FILE ---------------------------------------------
let dropBoxArticles = document.querySelector('.main-file-upload-articles #dropBoxArticles');
let addMoreArticles = document.querySelector('.main-file-upload-articles #add-more-articles');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
	dropBoxArticles.addEventListener(evt, prevDefault, false);
	addMoreArticles.addEventListener(evt, prevDefault, false);
});

function prevDefault(e) {
	e.preventDefault();
	e.stopPropagation();
}
['dragenter', 'dragover'].forEach(evt => {
	dropBoxArticles.addEventListener(evt, hoverArticles, false);
	addMoreArticles.addEventListener(evt, hoverArticles, false);
});
['dragleave', 'drop'].forEach(evt => {
	dropBoxArticles.addEventListener(evt, unhoverArticles, false);
	addMoreArticles.addEventListener(evt, unhoverArticles, false);
});

function hoverArticles(e) {
	dropBoxArticles.classList.add('hover');
	addMoreArticles.classList.add('hover');
}

function unhoverArticles(e) {
	dropBoxArticles.classList.remove('hover');
	addMoreArticles.classList.remove('hover');
}

dropBoxArticles.addEventListener('drop', mngDropArticles, false);
addMoreArticles.addEventListener('drop', mngDropArticles, false);

function mngDropArticles(e) {
	let dataTrans = e.dataTransfer;
	let files = dataTrans.files;
	filesManagerArticles(files);
}

function upFileArticles(file) {
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

function previewFileArticles(file) {
	let imageType = /image.*/;
	if (file.type.match(imageType)) {
		let fReader = new FileReader();
		console.log('fReader')
		let gallery = document.querySelector('.main-file-upload-articles #galleryArticles');
		fReader.readAsDataURL(file);
		fReader.onloadend = function () {
			let wrap = document.createElement('div');
			let buttonsModify = document.createElement('div');
			wrap.classList.add('column')
			wrap.draggable = true
			let numberImg = document.createElement('div')
			numberImg.classList.add('number-img')
			wrap.style.setProperty('--bg-img-articles', `url(${fReader.result})`)
			buttonsModify.classList.add('actions-img-articles')
			buttonsModify.innerHTML = `<div class="delete">
				<i class="material-icons-outlined">delete_forever</i>
			</div>
			<div class="rotate">
				<i class="material-icons-outlined">rotate_90_degrees_ccw</i>
			</div>`
			gallery.appendChild(wrap).appendChild(numberImg);
			gallery.appendChild(wrap).appendChild(buttonsModify);
			document
				.querySelectorAll('.main-file-upload-articles #galleryArticles .column')
				.forEach(col => {
					col.addEventListener('dragstart', handleDragStartArticles, false);
					col.addEventListener('dragenter', handleDragEnterArticles, false);
					col.addEventListener('dragover', handleDragOverArticles, false);
					col.addEventListener('dragleave', handleDragLeaveArticles, false);
					col.addEventListener('drop', handleDropArticles, false);
					col.addEventListener('dragend', handleDragEndArticles, false);
				});
		}
	} else {
		console.error("Err... ||", file);
	}
}
function filesManagerArticles(files) {
	files = [...files]
	files.forEach(upFileArticles);
	files.forEach(previewFileArticles);
	setTimeout(() => {
		function ActionsArticles() {
			setTimeout(() => {
				let itemsImg = [...document.querySelectorAll('.main-file-upload-articles #galleryArticles .column')]
				const countItems = itemsImg.length
				if (countItems == 0) {
					addMoreArticles.style.display = 'none'
					dropBoxArticles.style.display = 'flex'
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
					if (orderItem > 30) {
						el.remove()
					}
					if (countItems >= 30) {
						addMoreArticles.style.display = 'none'
						dropBoxArticles.style.display = 'none'
					}  else  {
						addMoreArticles.style.display = 'flex'
						dropBoxArticles.style.display = 'none'
					}
					addMoreArticles.style.order = countItems + 1
				});
			}, 100);
			
		}
		ActionsArticles()
		setTimeout(() => {
			let itemsImg = [...document.querySelectorAll('.main-file-upload-articles #galleryArticles .column')]
			itemsImg.map((el, index) => {
				const deleteImgAds = el.querySelector('.actions-img-articles .delete')
				const rotateImgAds = el.querySelector('.actions-img-articles .rotate')
				deleteImgAds.addEventListener('click', (x) => {
					x.preventDefault();
					el.remove();
					ActionsArticles();
				})
				let deg = 0
				rotateImgAds.addEventListener('click', (f) => {
					f.preventDefault()
					deg += 90
					el.style.setProperty('--rotate-img-articles', `rotate(${deg}deg)`) 
				})
			})
		}, 100);
	}, 200);
	
}