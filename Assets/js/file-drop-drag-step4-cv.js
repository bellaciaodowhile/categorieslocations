// // ONLY DRAG AND DROP----------------------------------------------------------------------------
// let dragSrcArticle4 = undefined;

// ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
// 	document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').addEventListener(evt, function(e) {
//         e.preventDefault();
// 	    e.stopPropagation();
//     }, false);
// 	document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').addEventListener(evt, function(e) {
//         e.preventDefault();
// 	    e.stopPropagation();
//     }, false);
// });


// ['dragenter', 'dragover'].forEach(evt => {
// 	document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').addEventListener(evt, function(e){
//         document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').classList.add('hover');
// 	    document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').classList.add('hover');
//     }, false);
// 	document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').addEventListener(evt, function(e){
//         document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').classList.add('hover');
//         document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').classList.add('hover');
//     }, false);
// });
// ['dragleave', 'drop'].forEach(evt => {
// 	document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').addEventListener(evt, function(e){
//         document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').classList.remove('hover');
// 	    document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').classList.remove('hover');
//     }, false);
// 	document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').addEventListener(evt, function(e){
//         document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').classList.remove('hover');
// 	    document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').classList.remove('hover');
//     }, false);
// });

// document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').addEventListener('drop', function(e) {
//     let dataTrans = e.dataTransfer;
// 	let files = dataTrans.files;
// 	filesManagerArticles4(files);
// }, false);
// document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').addEventListener('drop', function(e) {
//     let dataTrans = e.dataTransfer;
// 	let files = dataTrans.files;
// 	filesManagerArticles4(files);
    
// }, false);

// function filesManagerArticles4(files) {
// 	files = [...files]
// 	files.forEach(file => {
//         let imageType = /image.*/;
//         let PDFType = /application.pdf.*/;
//         if (file.type.match(imageType) || file.type.match(PDFType)) {
//             let url = 'HTTP/HTTPS URL TO SEND THE DATA TO';
//             let formData = new FormData();
//             formData.append('file', file);
//             // fetch(url, {
//             // 	method: 'put',
//             // 	body: formData
//             // })
//             // .then(response => response.json())
//             // .then(result => { console.log('Success:', result); })
//             // .catch(error => { console.error('Error:', error); });
//         } else {
//             console.error("Err...", file);
//         }
//     });
// 	files.forEach(file => {
//         let imageType = /image.*/;
//         let PDFType = /application.pdf.*/;
//         if (file.type.match(imageType) || file.type.match(PDFType)) {
//             let fReader = new FileReader();
//             console.log('fReader')
//             let gallery = document.querySelector('.step-4 .main-file-upload-step4-cv .galleryStep4Cv');
//             fReader.readAsDataURL(file);
//             fReader.onloadend = function () {
//                 let wrap = document.createElement('div');
//                 let buttonsModify = document.createElement('div');
//                 wrap.classList.add('column')
//                 wrap.draggable = true
//                 let numberImg = document.createElement('div')
//                 numberImg.classList.add('number-img')


//                 buttonsModify.classList.add('actions-img-articles')

//                 if (file.type.match(PDFType)) {
//                     console.log(file)
//                     let namePdf = file.name
//                     let namePdfRemasted = namePdf.length > 15 ? namePdf.slice(0, 15)+'... .pdf' : namePdf
//                     wrap.style.setProperty('--bg-img-articles', `#0000`)
//                     wrap.innerHTML = `
//                     <div class="icon-pdf-preview">
//                         <i class="material-icons-outlined">picture_as_pdf</i>
//                         <span style="color: var(--color-text);">
//                             ${ namePdfRemasted }                       
//                         </span>
//                     </div>`
//                     buttonsModify.innerHTML = `<div class="delete">
//                     <i class="material-icons-outlined">delete_forever</i>
//                     </div>
//                     <div class="rotate" style="display: none;">
//                         <i class="material-icons-outlined">rotate_90_degrees_ccw</i>
//                     </div>
//                     <div class="preview">
//                         <i class="material-icons-outlined">visibility</i>
//                     </div>`
//                 } else {
//                     buttonsModify.innerHTML = `<div class="delete">
//                         <i class="material-icons-outlined">delete_forever</i>
//                     </div>
//                     <div class="rotate">
//                         <i class="material-icons-outlined">rotate_90_degrees_ccw</i>
//                     </div>`
//                     wrap.style.setProperty('--bg-img-articles', `url(${fReader.result})`)
//                 }



                
//                 gallery.appendChild(wrap).appendChild(numberImg);
//                 gallery.appendChild(wrap).appendChild(buttonsModify);
//                 document
//                     .querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')
//                     .forEach(col => {
//                         col.addEventListener('dragstart', function(e) {
//                             e.target.classList.add('dragging');
//                             dragSrcArticle4 = e.target;
//                             e.dataTransfer.effectAllowed = 'move';
//                             e.dataTransfer.setData('text/html', e.target.innerHTML);
//                         }, false);
//                         col.addEventListener('dragenter', function(e) {
//                             e.target.classList.add('over');
//                         }, false);
//                         col.addEventListener('dragover', function(e) {
//                             if (e.preventDefault) {
//                                 e.preventDefault();
//                             }
//                             e.dataTransfer.dropEffect = 'move';
//                             return false;
//                         }, false);
//                         col.addEventListener('dragleave', function(e) {
//                             e.target.classList.remove('over');
//                         }, false);
//                         col.addEventListener('drop', function(e) {
//                             if (e.stopPropagation) {
//                                 e.stopPropagation();
//                             }
//                             if (dragSrcArticle4 !== e.target) {
//                                 let dragSrcOrder = dragSrcArticle4.style.order;
//                                 dragSrcArticle4.style.order = e.target.style.order;
//                                 e.target.style.order = dragSrcOrder;
//                                 let toNumber = dragSrcArticle4.querySelector('.number-img').textContent
//                                 dragSrcArticle4.querySelector('.number-img').textContent = e.target.querySelector('.number-img').textContent
//                                 e.target.querySelector('.number-img').textContent = toNumber
//                             }
                        
//                             return false;
//                         }, false);
//                         col.addEventListener('dragend', function(e) {
//                             document
//                                 .querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')
//                                 .forEach(col => {
//                                     col.classList.remove('over');
//                                 });
//                             e.target.classList.remove('dragging');
//                             return false;
//                         }, false);
//                     });
//             }
//         } else {
//             console.error("Err... ||", file);
//         }
//     });
// 	setTimeout(() => {
// 		setTimeout(() => {
//             let itemsImg = [...document.querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')]
//             const countItems = itemsImg.length
//             if (countItems == 0) {
//                 document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').style.display = 'none'
//                 document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').style.display = 'flex'
//             }
//             itemsImg.map((el, index) => {
//                 let orderItem = index + 1
//                 el.style.order = orderItem
//                 if (orderItem == 1) {
//                     orderItem = 'Principal'
//                     el.querySelector('.number-img').textContent = orderItem
//                 } else {
//                     el.querySelector('.number-img').textContent = orderItem
//                 }
//                 if (orderItem > 30) {
//                     el.remove()
//                 }
//                 if (countItems >= 30) {
//                     document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').style.display = 'none'
//                     document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').style.display = 'none'
//                 }  else  {
//                     document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').style.display = 'flex'
//                     document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').style.display = 'none'
//                 }
//                 document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').style.order = countItems + 1
//             });
//         }, 100);
// 		setTimeout(() => {
// 			let itemsImg = [...document.querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')]
// 			itemsImg.map((el, index) => {
// 				const deleteImgAds = el.querySelector('.actions-img-articles .delete')
// 				const rotateImgAds = el.querySelector('.actions-img-articles .rotate')
// 				deleteImgAds.addEventListener('click', (x) => {
// 					x.preventDefault();
// 					el.remove();
// 					setTimeout(() => {
//                         let itemsImg = [...document.querySelectorAll('.step-4 .main-file-upload-step4-cv .galleryStep4Cv .column')]
//                         const countItems = itemsImg.length
//                         if (countItems == 0) {
//                             document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').style.display = 'none'
//                             document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').style.display = 'flex'
//                         }
//                         itemsImg.map((el, index) => {
//                             let orderItem = index + 1
//                             el.style.order = orderItem
//                             if (orderItem == 1) {
//                                 orderItem = 'Principal'
//                                 el.querySelector('.number-img').textContent = orderItem
//                             } else {
//                                 el.querySelector('.number-img').textContent = orderItem
//                             }
//                             if (orderItem > 30) {
//                                 el.remove()
//                             }
//                             if (countItems >= 30) {
//                                 document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').style.display = 'none'
//                                 document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').style.display = 'none'
//                             }  else  {
//                                 document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').style.display = 'flex'
//                                 document.querySelector('.step-4 .main-file-upload-step4-cv .dropBoxStep4Cv').style.display = 'none'
//                             }
//                             document.querySelector('.step-4 .main-file-upload-step4-cv .addMoreStep4Cv').style.order = countItems + 1
//                         });
//                     }, 100);
// 				})
// 				let deg = 0
// 				rotateImgAds.addEventListener('click', (f) => {
// 					f.preventDefault()
// 					deg += 90
// 					el.style.setProperty('--rotate-img-articles', `rotate(${deg}deg)`) 
// 				})
// 			})
// 		}, 100);
// 	}, 200);
// }
// // END ONLY DRAG AND DROP