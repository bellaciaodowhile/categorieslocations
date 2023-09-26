// console.log('Modal JS')

// const allModalsTrigger = [...document.querySelectorAll('.modal-trigger')];
// const allModalsContent = [...document.querySelectorAll('.main-container-edit-personal-information')];
// allModalsTrigger.map(modal => {
//     let close = modal.querySelector('.close-modal-form');
//     let personalData = modal.querySelector('.personal-data');
    
    
//     modal.addEventListener('click', (evt) => {
//         evt.preventDefault();
//         console.log('Hola vale como estas')
//         allModalsContent.map(x => {
//             if (x.id == modal.id) {
//                 x.style.display = 'block'
//                 close.addEventListener('click', (e) => {
//                     e.preventDefault();
//                     x.style.display = 'none'
//                 })
//                 personalData.addEventListener('click', (e) => {
//                     e.preventDefault();
    
//                     if (!personalData.contains(e.target)) {
//                         console.log('Te vas')
//                     }
//                 })
//             }
//         });
//     })
// })
