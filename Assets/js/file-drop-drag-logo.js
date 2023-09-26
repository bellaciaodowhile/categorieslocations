// ONLY DRAG AND DROP----------------------------------------------------------------------------
let dragSrcLogoCv = undefined;
// DROPBOX AND INPUT FILE ---------------------------------------------
let dropBoxLogoCv = document.querySelector(`.main-file-upload-logo-cv.item1 .dropBoxLogoCv.item1`);

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
	dropBoxLogoCv.addEventListener(evt, function(e) {
        e.preventDefault();
	    e.stopPropagation();
    }, false);
});

['dragenter', 'dragover'].forEach(evt => {
	dropBoxLogoCv.addEventListener(evt, function(e) {
        dropBoxLogoCv.classList.add('hover');
    }, false);
});
['dragleave', 'drop'].forEach(evt => {
	dropBoxLogoCv.addEventListener(evt, function(e) {
        dropBoxLogoCv.classList.remove('hover');
    }, false);
});

dropBoxLogoCv.addEventListener('drop', function(e) {
    let dataTrans = e.dataTransfer;
	let files = dataTrans.files;
	filesManagerLogoCv1(files);
}, false);

function filesTestMe(files) {
	// e.preventDefault()
	// console.log(e.target.files)
	// let files = e.target.files
	files = [...files]
	files.forEach(file => {
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
	});
	files.forEach(file => {
		let imageType = /image.*/;
	if (file.type.match(imageType)) {
		let fReader = new FileReader();
		console.log('fReader')
		let gallery = document.querySelector('.main-file-upload-logo-cv.item1 .galleryLogoCv.item1');
		fReader.readAsDataURL(file);
		fReader.onloadend = function () {
			let wrap = document.createElement('div');
			let buttonsModify = document.createElement('div');
			wrap.classList.add('column')
			wrap.draggable = true
			let numberImg = document.createElement('div')
			numberImg.classList.add('number-img')
			wrap.style.setProperty('--bg-img-logoCv', `url(${fReader.result})`)
			buttonsModify.classList.add('actions-img-logoCv')
			buttonsModify.innerHTML = `<div class="delete">
				<i class="material-icons-outlined">delete_forever</i>
			</div>
			<div class="rotate">
				<i class="material-icons-outlined">rotate_90_degrees_ccw</i>
			</div>`
			gallery.appendChild(wrap).appendChild(numberImg);
			gallery.appendChild(wrap).appendChild(buttonsModify);
			document
				.querySelectorAll('.main-file-upload-logo-cv.item1 .galleryLogoCv.item1 .column')
				.forEach(col => {
					col.addEventListener('dragstart', function() {
                        e.target.classList.add('dragging');
                        dragSrcLogoCv = e.target;
                        e.dataTransfer.effectAllowed = 'move';
                        e.dataTransfer.setData('text/html', e.target.innerHTML);
                    }, false);
					col.addEventListener('dragenter', function() {
                        e.target.classList.add('over');
                    }, false);
					col.addEventListener('dragover', function() {
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                        e.dataTransfer.dropEffect = 'move';
                        return false;
                    }, false);
					col.addEventListener('dragleave', function() {
                        e.target.classList.remove('over');
                    }, false);
					col.addEventListener('drop', function() {
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }
                        if (dragSrcLogoCv !== e.target) {
                            let dragSrcOrder = dragSrcLogoCv.style.order;
                            dragSrcLogoCv.style.order = e.target.style.order;
                            e.target.style.order = dragSrcOrder;
                            let toNumber = dragSrcLogoCv.querySelector('.number-img').textContent
                            dragSrcLogoCv.querySelector('.number-img').textContent = e.target.querySelector('.number-img').textContent
                            e.target.querySelector('.number-img').textContent = toNumber
                        }
                    
                        return false;
                    }, false);
					col.addEventListener('dragend', function() {
                        document
                            .querySelectorAll('.main-file-upload-logo-cv.item1 .galleryLogoCv.item1 .column')
                            .forEach(col => {
                                col.classList.remove('over');
                            });
                        e.target.classList.remove('dragging');
                        return false;
                    }, false);
				});
		}
	} else {
		console.error("Err... ||", file);
	}
	});
	setTimeout(() => {
        setTimeout(() => {
            let itemsImg = [...document.querySelectorAll('.main-file-upload-logo-cv.item1 .galleryLogoCv.item1 .column')]
			console.log(itemsImg.length)
			console.log(dropBoxLogoCv)
            const countItems = itemsImg.length
            if (countItems == 0) {
                dropBoxLogoCv.style.display = 'flex'
            }
            itemsImg.map((el, index) => {
                let orderItem = index + 1
                el.style.order = orderItem
                if (orderItem == 1) {
                    orderItem = 'Logo'
                    el.querySelector('.number-img').textContent = orderItem
                }
				if (orderItem > 1) { el.remove() }
            });
			if (countItems >= 1) { dropBoxLogoCv.style.display = 'none' }
        }, 200);
		setTimeout(() => {
			let itemsImg = [...document.querySelectorAll('.main-file-upload-logo-cv.item1 .galleryLogoCv.item1 .column')]

			itemsImg.map((el, index) => {
				const input = el.parentElement.parentElement.querySelector('input')
				// console.log(input.value)
				const deleteImgAds = el.querySelector('.actions-img-logoCv .delete')
				const rotateImgAds = el.querySelector('.actions-img-logoCv .rotate')
				deleteImgAds.addEventListener('click', (x) => {
					x.preventDefault();
					el.remove();
					input.value = ''
                    setTimeout(() => {
                        let itemsImg = [...document.querySelectorAll('.main-file-upload-logo-cv.item1 .galleryLogoCv.item1 .column')]
                        const countItems = itemsImg.length
						console.log(dropBoxLogoCv)
                        if (countItems == 0) {
                            dropBoxLogoCv.style.display = 'flex'
                        }
                        itemsImg.map((el, index) => {
                            let orderItem = index + 1
                            el.style.order = orderItem
                            if (orderItem == 1) {
                                orderItem = 'Logo'
                                el.querySelector('.number-img').textContent = orderItem
                            }
                            if (orderItem > 1) { el.remove() }
                            if (countItems >= 1) { dropBoxLogoCv.style.display = 'none' } 
                        });
						if (countItems >= 1) { dropBoxLogoCv.style.display = 'none' }
                    }, 200);
				})
				let deg = 0
				rotateImgAds.addEventListener('click', (f) => {
					f.preventDefault()
					deg += 90
					el.style.setProperty('--rotate-img-logoCv', `rotate(${deg}deg)`) 
				})
			})
		}, 100);
	}, 200);
}
