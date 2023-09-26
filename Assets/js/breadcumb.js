console.log('BreadCumb JS')

// const breadcumbCategories = document.querySelector('.breadcumb.breadcumb-categories .links');
// function addLinkBreadCumb(link, id, subcategory) {
//     if (link != undefined) {
//         alert(link)
//         console.log('Desde Breadcumb')
//         breadcumbCategories.innerHTML += /* html */ `
//         <div class="d-flex fadeInLeft">
//             <i class="material-icons dark">chevron_right</i>
//             <a href="#">
//                 <a href="#" item="${ id }" class="user-trigger span link-sub">${ link + subcategory.length} </a>
//             </a>
//         </div>`
//     }
//     const allLinksBreadcumbCategories = [...document.querySelectorAll('.breadcumb.breadcumb-categories .link-sub')];
//     allLinksBreadcumbCategories.map(x => {
//         x.addEventListener('click', (e) => {
//             e.preventDefault();
//             let item = e.currentTarget.attributes[1].nodeValue
//             let name = e.currentTarget.textContent.trim()
//             console.log('Este id se buscara en la BBDD', item)
//             // vale('Arroz con mango')
//             async function fetchFilterJSON() {
//                 const response = await fetch(BASE_URL + 'Filter/getFilter/' + item);
//                 const categories = await response.json();
//                 return categories;
//             }
        
//             fetchFilterJSON().then(data => {
//                 // return data;
//                 // console.log(data)
//             })
//         })
//     })
// }
// addLinkBreadCumb()
