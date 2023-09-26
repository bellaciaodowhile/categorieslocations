// ONLY DRAG AND DROP----------------------------------------------------------------------------
let dragSrcArticleMini = undefined;

const handleDragStartArticlesMini = (e) => {
	e.target.classList.add('dragging');
	dragSrcArticleMini = e.target;
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', e.target.innerHTML);
}

const handleDragOverArticlesMini = (e) => {
	if (e.preventDefault) {
		e.preventDefault();
	}
	e.dataTransfer.dropEffect = 'move';
	return false;
}

const handleDragEnterArticlesMini = (e) => {
	e.target.classList.add('over');
}

const handleDragLeaveArticlesMini = (e) => {
	e.target.classList.remove('over');
}

const handleDropArticlesMini = (e) => {
	if (e.stopPropagation) {
		e.stopPropagation();
	}
	if (dragSrcArticleMini !== e.target) {
		let dragSrcOrder = dragSrcArticleMini.style.order;
		dragSrcArticleMini.style.order = e.target.style.order;
		e.target.style.order = dragSrcOrder;
		let toNumber = dragSrcArticleMini.querySelector('.number-img').textContent
		dragSrcArticleMini.querySelector('.number-img').textContent = e.target.querySelector('.number-img').textContent
		e.target.querySelector('.number-img').textContent = toNumber
	}

	return false;
}

const handleDragEndArticlesMini = (e) => {
	document
		.querySelectorAll('.main-file-upload-articles-mini #galleryArticles .column')
		.forEach(col => {
			col.classList.remove('over');
		});
	e.target.classList.remove('dragging');
	return false;
}

// DROPBOX AND INPUT FILE ---------------------------------------------
let dropBoxArticlesMini = document.querySelector('.main-file-upload-articles-mini #dropBoxArticles');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
	dropBoxArticlesMini.addEventListener(evt, prevDefault, false);
});

function prevDefault(e) {
	e.preventDefault();
	e.stopPropagation();
}
['dragenter', 'dragover'].forEach(evt => {
	dropBoxArticlesMini.addEventListener(evt, hoverArticlesMini, false);
});
['dragleave', 'drop'].forEach(evt => {
	dropBoxArticlesMini.addEventListener(evt, unhoverArticlesMini, false);
});

function hoverArticlesMini(e) {
	dropBoxArticlesMini.classList.add('hover');
}

function unhoverArticlesMini(e) {
	dropBoxArticlesMini.classList.remove('hover');
}

dropBoxArticlesMini.addEventListener('drop', mngDropArticlesMini, false);

function mngDropArticlesMini(e) {
	let dataTrans = e.dataTransfer;
	let files = dataTrans.files;
	filesManagerArticlesMini(files);
}

function upFileArticlesMini(file) {
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

function previewFileArticlesMini(file) {
	let imageType = /image.*/;
	if (file.type.match(imageType)) {
		let fReader = new FileReader();
		console.log('fReader')
		let gallery = document.querySelector('.main-file-upload-articles-mini #galleryArticles');
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
				.querySelectorAll('.main-file-upload-articles-mini #galleryArticles .column')
				.forEach(col => {
					col.addEventListener('dragstart', handleDragStartArticlesMini, false);
					col.addEventListener('dragenter', handleDragEnterArticlesMini, false);
					col.addEventListener('dragover', handleDragOverArticlesMini, false);
					col.addEventListener('dragleave', handleDragLeaveArticlesMini, false);
					col.addEventListener('drop', handleDropArticlesMini, false);
					col.addEventListener('dragend', handleDragEndArticlesMini, false);
				});
		}
	} else {
		console.error("Err... ||", file);
	}
}
function filesManagerArticlesMini(files) {
	files = [...files]
	files.forEach(upFileArticlesMini);
	files.forEach(previewFileArticlesMini);
	setTimeout(() => {
		function ActionsArticles() {
			setTimeout(() => {
				let itemsImg = [...document.querySelectorAll('.main-file-upload-articles-mini #galleryArticles .column')]
				const countItems = itemsImg.length
				if (countItems == 0) {
					dropBoxArticlesMini.style.display = 'flex'
				}
				itemsImg.map((el, index) => {
					let orderItem = index + 1
					el.style.order = orderItem
					if (orderItem == 1) {
						orderItem = 'Miniatura'
						el.querySelector('.number-img').textContent = orderItem
					} else {
						// el.querySelector('.number-img').textContent = orderItem
					}
					if (orderItem > 1) {
						el.remove()
					}
					if (countItems >= 1) {
						dropBoxArticlesMini.style.display = 'none'
					} 
				});
			}, 100);
			
		}
		ActionsArticles()
		setTimeout(() => {
			let itemsImg = [...document.querySelectorAll('.main-file-upload-articles-mini #galleryArticles .column')]
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