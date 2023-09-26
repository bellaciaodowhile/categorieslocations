console.log('Chevrondown')



// function selectorsChevrodownAll() {
//     let chevrondownHead = [...document.querySelectorAll('.chevrondown-head-gj8 i')];
//     let radioBtns = [...document.querySelectorAll('.chevrondown-gj8 .chevrondown-radio-button')];
//     let chevrondownContents = [...document.querySelectorAll('.chevrondown-content-gj8')];
    
//     chevrondownHead.map((item, index) => {
//         const content = item.parentElement.parentElement.children[1]
//         const arrow = item
//         if (content != undefined && arrow != undefined) {
//             item.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 if (content.style.display == '' || content.style.display == 'none') {
//                     content.style.display = 'block'
//                     // item.parentElement.style.fontWeight = 'bold'
//                     arrow.style.transform = 'rotate(90deg)'
//                 } else {
//                     content.style.display = 'none'
//                     // item.parentElement.style.fontWeight = 'normal'
//                     arrow.style.transform = 'rotate(0deg)'
//                 }
//             });
//         }
//     });
//     radioBtns.map(btn => {
//         btn.addEventListener('click', (e) => {
//             e.preventDefault();
//             let content = btn.parentElement.parentElement.children[1]
//             let text = btn.parentElement
//             let arrow = btn.parentElement.querySelector('i')
//             if (arrow != null) {
//                 if (content != undefined && arrow != undefined) {
    
//                 } else {
    
//                 }
//                 radioBtns.map(_btn => {
//                     if (_btn.classList.contains('active')) {
//                         console.log(_btn.closest('.chevrondown-item-gj8').querySelector('.chevrondown-content-gj8'))
//                         // console.log(btn)
//                         _btn.classList.remove('active')
    
//                         if (_btn.classList.contains('not')) {
//                             btn.classList.add('active')
//                             content.style.display = 'block'
//                             arrow.style.transform = 'rotate(90deg)'
//                         } else {
//                             btn.classList.add('active')
//                             content.style.display = 'block'
//                             arrow.style.transform = 'rotate(90deg)'
//                         }
    
    
//                     }
//                 })
//             } else {
//                 radioBtns.map(_btn => {
//                     if (_btn.classList.contains('active')) {
//                         console.log(_btn.closest('.chevrondown-item-gj8').querySelector('.chevrondown-content-gj8'))
    
//                         if (_btn.closest('.chevrondown-item-gj8').querySelector('.chevrondown-content-gj8').contains(e.target)) {
//                             console.log('Estoy dentro de ti content')
//                         } else {
//                             _btn.closest('.chevrondown-item-gj8').querySelector('.chevrondown-content-gj8').style.display = 'none'
//                             _btn.closest('.chevrondown-item-gj8').querySelector('i.material-icons').style.transform = 'rotate(0deg)'
//                             console.log('Fuera del content')
//                         }
//                         _btn.classList.remove('active')
//                         btn.classList.add('active')
//                     }
//                 })
//             }
    
    
    
    
//         });
//     });
//     document.querySelector('.main-chevrondown-gj8 .expand-less-gj8').addEventListener('click', (e) => {
//         e.preventDefault();
//         chevrondownContents.map(content => {
//             content.style.display = 'none'
//         });
//         [...document.querySelectorAll('.chevrondown-gj8 i')].map(i => {
//             i.style.transform = 'rotate(0deg)'
//         });
//     });
//     document.querySelector('.main-chevrondown-gj8 .expand-more-gj8').addEventListener('click', (e) => {
//         e.preventDefault();
//         chevrondownContents.map(content => {
//             content.style.display = 'block'
//         });
//         [...document.querySelectorAll('.chevrondown-gj8 i')].map(i => {
//             i.style.transform = 'rotate(90deg)'
//         });
//     });
// }
// selectorsChevrodownAll()