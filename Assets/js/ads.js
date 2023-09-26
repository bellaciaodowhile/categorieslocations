// Posting Ad
const stepOneAds = document.querySelector('.container-ads .step-1')
const stepTwoAds = document.querySelector('.container-ads .step-2')
const bars = document.querySelector('.container-ads .bars-ad')
const categoriesAds = [...document.querySelectorAll('.container-ads .main-chevrondown .category')]
const stepAdNumber = document.querySelector('.container-ads .step-ad-number')
const prevStep = document.querySelector('.container-ads .prevStep')
const categorySelected = document.querySelector('.container-ads .step-2 .subtitle.small strong')
categoriesAds.map(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        stepOneAds.style.display = 'none'
        stepTwoAds.style.display = 'block'
        bars.children[1].classList.add('active')
        stepAdNumber.innerHTML = '2'
        const category = e.target.textContent
        categorySelected.innerHTML = category
    })
})
prevStep.addEventListener('click', (e) => {
    stepOneAds.style.display = 'block'
    stepTwoAds.style.display = 'none'
    bars.children[1].classList.remove('active')
    stepAdNumber.innerHTML = '1'
})

// My Ads
const doneAd = document.querySelector('.step-2 .done-ad')
const postingAd = document.querySelector('.posting-ad')
const myAds = document.querySelector('.my-ads')
const triggerMyAds = document.querySelector('.trigger-my-ads')
const triggerPostAd = document.querySelector('.trigger-post-ad')
doneAd.addEventListener('click', (e) => {
    e.preventDefault();
    postingAd.style.display = 'none'
    myAds.style.display = 'block'
    triggerMyAds.classList.add('active')
})
triggerMyAds.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.add('active')
    postingAd.style.display = 'none'
    myAds.style.display = 'block'
    myPay.style.display = 'none'
    myMovements.style.display = 'none'
    triggerMyMovements.classList.remove('active')
    triggerMyPay.classList.remove('active')
})
triggerPostAd.addEventListener('click', (e) => {
    e.preventDefault();
    postingAd.style.display = 'block'
    myAds.style.display = 'none'
    myMovements.style.display = 'none'
    myPay.style.display = 'none'
    triggerMyMovements.classList.remove('active')
    triggerMyAds.classList.remove('active')
    triggerMyPay.classList.remove('active')
})

// Tabs Ads
const myAdsTabs = document.querySelector('.my-ads .tabs-my-ads');
const itemTabsMyAds = [...document.querySelectorAll('.my-ads .tabs-my-ads .tab-trigger-my-ads')]
const itemsContentTabsMyAds = [...document.querySelectorAll('.my-ads .tabs-content-my-ads .tab-item-my-ads')]
myAdsTabs.addEventListener('click', (e) => {
    e.preventDefault();
    const markerTabsMyAds = myAdsTabs.children[0]
    itemTabsMyAds.map((el, index) => {
        const left = el.offsetLeft
        const width = el.clientWidth
        if (el.contains(e.target)) {
            markerTabsMyAds.style.left = (left + 30) + 'px'
            markerTabsMyAds.style.width = (width - 43) + 'px'
            itemsContentTabsMyAds[index].style.display = 'block'
            el.classList.add('active')
        } else if (!el.contains(e.target)) {
            el.classList.remove('active')
            itemsContentTabsMyAds[index].style.display = 'none'
        }
    })
})
// All Functions Cards
function allActionsCards() {
    // Start All Actions Cards
    const cardMyAds = [...document.querySelectorAll('.my-ads .main-cards-my-ads.actives .card-my-ads.card-normal')]
    const cardMyAdsSold = [...document.querySelectorAll('.my-ads .main-cards-my-ads.sold .card-my-ads.card-normal')]
    const cardMyAdsPaused = [...document.querySelectorAll('.my-ads .main-cards-my-ads.paused .card-my-ads.card-normal')]
    const mainCardsAsdActives = document.querySelector('.my-ads .main-cards-my-ads.actives')
    const mainCardsAsdSold = document.querySelector('.my-ads .main-cards-my-ads.sold')
    const mainCardsAsdPaused = document.querySelector('.my-ads .main-cards-my-ads.paused')
    mainCardsAsdActives.addEventListener('click', (e) => {
        e.preventDefault();
        cardMyAds.map(el => {
            const triggerMoreVertCard = el.querySelector('.header-card-my-ads i')
            const contentMoreVert = triggerMoreVertCard.parentElement.children[3]
            const triggerBtnStatus = el.querySelector('.trigger-status')
            const contentBtnStatus = el.querySelector('.content-card-more-vert.btn-status')
            const triggerStandOut = el.querySelector('.trigger-stand-out')
            const contentStandOut = el.querySelector('.content-card-more-vert.stand-out')

            if (triggerMoreVertCard.contains(e.target)) {
                if (contentMoreVert.style.display == '' || contentMoreVert.style.display == 'none') {
                    contentMoreVert.style.display = 'block'
                } else {
                    contentMoreVert.style.display = 'none'
                }
            } else {
                contentMoreVert.style.display = 'none'
            }
            if (triggerBtnStatus.contains(e.target)) {
                if (contentBtnStatus.style.display == '' || contentBtnStatus.style.display == 'none') {
                    contentBtnStatus.style.display = 'block'
                } else {
                    contentBtnStatus.style.display = 'none'
                }
            } else {
                contentBtnStatus.style.display = 'none'
            }
            if (triggerStandOut.contains(e.target)) {
                if (contentStandOut.style.display == '' || contentStandOut.style.display == 'none') {
                    contentStandOut.style.display = 'flex'
                } else {
                    contentStandOut.style.display = 'none'
                }
            } else {
                contentStandOut.style.display = 'none'
            }
        })
    });
    mainCardsAsdSold.addEventListener('click', (e) => {
        e.preventDefault();
        cardMyAdsSold.map(el => {
            const triggerMoreVertCard = el.querySelector('.header-card-my-ads i')
            const contentMoreVert = triggerMoreVertCard.parentElement.children[3]
            const triggerBtnStatus = el.querySelector('.trigger-status')
            const contentBtnStatus = el.querySelector('.content-card-more-vert.btn-status')
            const triggerStandOut = el.querySelector('.trigger-stand-out')
            const contentStandOut = el.querySelector('.content-card-more-vert.stand-out')

            if (triggerMoreVertCard.contains(e.target)) {
                if (contentMoreVert.style.display == '' || contentMoreVert.style.display == 'none') {
                    contentMoreVert.style.display = 'block'
                } else {
                    contentMoreVert.style.display = 'none'
                }
            } else {
                contentMoreVert.style.display = 'none'
            }
            if (triggerBtnStatus.contains(e.target)) {
                if (contentBtnStatus.style.display == '' || contentBtnStatus.style.display == 'none') {
                    contentBtnStatus.style.display = 'block'
                } else {
                    contentBtnStatus.style.display = 'none'
                }
            } else {
                contentBtnStatus.style.display = 'none'
            }
            if (triggerStandOut.contains(e.target)) {
                if (contentStandOut.style.display == '' || contentStandOut.style.display == 'none') {
                    contentStandOut.style.display = 'flex'
                } else {
                    contentStandOut.style.display = 'none'
                }
            } else {
                contentStandOut.style.display = 'none'
            }
        });
    });
    mainCardsAsdPaused.addEventListener('click', (e) => {
        e.preventDefault();
        cardMyAdsPaused.map(el => {
            const triggerMoreVertCard = el.querySelector('.header-card-my-ads i')
            const contentMoreVert = triggerMoreVertCard.parentElement.children[3]
            const triggerBtnStatus = el.querySelector('.trigger-status')
            const contentBtnStatus = el.querySelector('.content-card-more-vert.btn-status')
            const triggerStandOut = el.querySelector('.trigger-stand-out')
            const contentStandOut = el.querySelector('.content-card-more-vert.stand-out')

            if (triggerMoreVertCard.contains(e.target)) {
                if (contentMoreVert.style.display == '' || contentMoreVert.style.display == 'none') {
                    contentMoreVert.style.display = 'block'
                } else {
                    contentMoreVert.style.display = 'none'
                }
            } else {
                contentMoreVert.style.display = 'none'
            }
            if (triggerBtnStatus.contains(e.target)) {
                if (contentBtnStatus.style.display == '' || contentBtnStatus.style.display == 'none') {
                    contentBtnStatus.style.display = 'block'
                } else {
                    contentBtnStatus.style.display = 'none'
                }
            } else {
                contentBtnStatus.style.display = 'none'
            }
            if (triggerStandOut.contains(e.target)) {
                if (contentStandOut.style.display == '' || contentStandOut.style.display == 'none') {
                    contentStandOut.style.display = 'flex'
                } else {
                    contentStandOut.style.display = 'none'
                }
            } else {
                contentStandOut.style.display = 'none'
            }
        });
    });
    const statusCurrent = [...document.querySelectorAll('.my-ads .content-card-more-vert.btn-status .item-card-more-vert')]
    statusCurrent.map(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault()
            const parentbtnStatus = el.parentElement.parentElement
            const btnStatusContent = parentbtnStatus.querySelector('.trigger-status')
            if (el.children[1].textContent == 'Reservado' || el.children[1].textContent == 'Activo') {
                el.children[0].classList.add('active')
                btnStatusContent.children[0].textContent = el.children[0].textContent
                btnStatusContent.children[1].textContent = el.children[1].textContent
            }
        })
    })
    const newPostAd = document.querySelector('.my-ads .card-my-ads-new-post')
    newPostAd.addEventListener('click', (e) => {
        e.preventDefault()
        postingAd.style.display = 'block'
        myAds.style.display = 'none'
    })
    // Sold
    const itemSold = [...document.querySelectorAll('.my-ads .item-card-more-vert.item-sold')]
    itemSold.map((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const itemIndex = el.attributes[1].value
            const card = el.closest('.card-my-ads.card-normal')
            if (confirm('¿Está seguro de realizar esta acción?')) {
                const data = dataAds[itemIndex]
                data.status = 'sold'
                dataSold.push(data)
                dataAds.splice(itemIndex, 1)
                card.remove()
            }
            countTabMyAdsActives.innerHTML = `(${ dataAds.length })`
            countTabMyAdsSold.innerHTML = `(${ dataSold.length })`
        })
    })
     // Paused
     const itemPaused = [...document.querySelectorAll('.my-ads .item-card-more-vert.item-paused')]
     itemPaused.map((el, index) => {
         el.addEventListener('click', (e) => {
             e.preventDefault();
             const itemIndex = el.attributes[1].value
             const card = el.closest('.card-my-ads.card-normal')
             if (confirm('¿Está seguro de realizar esta acción?')) {
                 const data = dataAds[itemIndex]
                 data.status = 'paused'
                 dataPaused.push(data)
                 dataAds.splice(itemIndex, 1)
                 card.remove()
             }
             countTabMyAdsActives.innerHTML = `(${ dataAds.length })`
             countTabMyAdsSold.innerHTML = `(${ dataSold.length })`
             countTabMyAdsPaused.innerHTML = `(${ dataPaused.length })`
         })
     })
      // Actives
      const itemActives = [...document.querySelectorAll('.my-ads .item-card-more-vert.item-active')]
      itemActives.map((el, index) => {
          el.addEventListener('click', (e) => {
              e.preventDefault();
              const itemIndex = el.attributes[1].value
              const card = el.closest('.card-my-ads.card-normal')
              if (confirm('¿Está seguro de realizar esta acción?')) {
                const data = dataPaused[itemIndex]
                data.status = 'active'
                dataAds.push(data)
                dataPaused.splice(itemIndex, 1)
                card.remove()
            }
              countTabMyAdsActives.innerHTML = `(${ dataAds.length })`
              countTabMyAdsSold.innerHTML = `(${ dataSold.length })`
              countTabMyAdsPaused.innerHTML = `(${ dataPaused.length })`
          })
      })
    // End All Actions Cards
}
// Ad Sold
const dataSold = []
const dataPaused = []
const countTabMyAdsActives = document.querySelector('.my-ads .count-tab-my-ads.actives')
const countTabMyAdsSold = document.querySelector('.my-ads .count-tab-my-ads.sold')
const countTabMyAdsPaused = document.querySelector('.my-ads .count-tab-my-ads.paused')
const mainCardAds = document.querySelector('.my-ads .main-cards-my-ads.actives')
const mainCardAdsSold = document.querySelector('.my-ads .main-cards-my-ads.sold')
const mainCardAdsPaused = document.querySelector('.my-ads .main-cards-my-ads.paused')
const searchCardsAdsActives = document.querySelector('.my-ads .search-cards-ads.actives')
const searchCardsAdsSold = document.querySelector('.my-ads .search-cards-ads.sold')
const searchCardsAdsPaused = document.querySelector('.my-ads .search-cards-ads.paused')
countTabMyAdsActives.innerHTML = `(${ dataAds.length })`

// Search Actives
const searchCardsAdsFunc = () => {
    let textNotAccents = searchCardsAdsActives.value.toLowerCase()
    let text = removeAccents(textNotAccents)
    mainCardAds.innerHTML = ''
    mainCardAds.innerHTML += `
    <div class="card-my-ads card-my-ads-new-post">
        <i class="material-icons-outlined">campaign</i>
        <div class="title">Añadir un nuevo anuncio</div>
        <div class="subtitle">Para poder activar anuncios tu perfil debe haber sido verificado.</div>
    </div>`

    dataAds.forEach((ad, index) => {
        let title = removeAccents(ad.title.toLowerCase())
        let city = removeAccents(ad.city.toLowerCase())
        let expired = removeAccents(ad.expired.toLowerCase())
        let price = removeAccents(ad.price.toLowerCase())

        if (title.indexOf(text) !== -1 || city.indexOf(text) !== -1 || expired.indexOf(text) !== -1 || price.indexOf(text) !== -1) {
            mainCardAds.innerHTML += `
            <div class="card-my-ads card-normal">
                <div class="image-card">
                    <i class="material-icons-outlined favorite">favorite_border</i>
                    <i class="material-icons camera">photo_camera</i>
                    <i class="material-icons videocam">videocam</i>
                    <div class="price-ads">
                        <span>$</span>${ ad.price }
                    </div>
                </div>
                <div class="content-card">
                    <div class="header-card-my-ads">
                        <img src="${ BASE_URL }Assets/img/app/${ ad.imgProfile }" class="img-profile-my-ads">
                        <div class="title-card-my-ads">
                            ${ ad.title }
                        </div>
                        <i class="material-icons">more_vert</i>
                        <div class="content-card-more-vert more-vert">
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">drive_file_rename_outline</i>
                                Editar
                            </div>
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">bookmark_border</i>
                                Estadísticas
                            </div>
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">share</i>
                                Compartir
                            </div>
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">delete</i>
                                Borrar
                            </div>
                        </div>
                    </div>
                    <div class="city">
                        <i class="material-icons-outlined">place</i>
                        ${ ad.city }
                    </div>
                    <div class="review">
                        Caduca en ${ ad.expired } días
                        <span>
                            <i class="material-icons-outlined">refresh</i> Renovar
                        </span>
                    </div>
                    <div class="card-actions">
                        <div class="btn-double-icons trigger-stand-out">
                            <i class="material-icons-outlined">auto_awesome</i>
                            Destácalo
                            <i class="material-icons-outlined">expand_more</i>
                        </div>
                        <div class="content-card-more-vert stand-out">
                            <div class="item-card-more-vert">
                                <div class="d-flex">
                                    <i class="material-icons-outlined">auto_awesome</i>
                                    Destacar
                                </div>
                                <span>Mejora tu posición en el listado</span>
                            </div>
                        </div>
                        <div class="btn-double-icons first-color-primary trigger-status">
                            <i class="material-icons-outlined">task_alt</i>
                            <div>Activo</div>
                            <i class="material-icons-outlined">expand_more</i>
                        </div>
                        <div class="content-card-more-vert btn-status">
                            <div class="item-card-more-vert item-active" item="${ index }">
                                <i class="material-icons-outlined active">task_alt</i>
                                <div>Activo</div>
                            </div>
                            <div class="item-card-more-vert item-reserve" item="${ index }">
                                <i class="material-icons-outlined">bookmark_border</i>
                                <div>Reservado</div>
                            </div>
                            <div class="item-card-more-vert item-sold" item="${ index }">
                                <i class="material-icons-outlined">thumb_up</i>
                                <div>Vendido</div>
                            </div>
                            <div class="item-card-more-vert item-paused" item="${ index }">
                                <i class="material-icons-outlined">pause_circle</i>
                                <div>Pausado</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            allActionsCards()
        }
    })
    if (mainCardAds.innerHTML === '') {
        mainCardAds.innerHTML = `
        <div class="has-no-ads">
            <img src="${ BASE_URL }Assets/img/app/ausencia-productos.png" alt="ImgFooterBanner">
            <div class="title">
                No existe ninguna coincidencia...
            </div>
        </div>`
    }
}
searchCardsAdsActives.addEventListener('keyup', () => {
    searchCardsAdsFunc()
})
searchCardsAdsFunc()

// Search Sold
countTabMyAdsSold.innerHTML = `(${ dataSold.length })`
const searchCardsAdsSoldFunc = () => {
    if (dataSold.length > 0) {
        const orderBySold = document.querySelector('.my-ads .order-by.sold')
        orderBySold.style.display = 'flex'
    }
    mainCardAdsSold.innerHTML = ''
    let textNotAccents = searchCardsAdsSold.value.toLowerCase()
    let text = removeAccents(textNotAccents)
    dataSold.forEach((ad, index) => {
        let title = removeAccents(ad.title.toLowerCase())
        let city = removeAccents(ad.city.toLowerCase())
        let expired = removeAccents(ad.expired.toLowerCase())
        let price = removeAccents(ad.price.toLowerCase())

        if (title.indexOf(text) !== -1 || city.indexOf(text) !== -1 || expired.indexOf(text) !== -1 || price.indexOf(text) !== -1) {
            const status = ad.status == 'active' ? {
                icon: 'task_alt',
                text: 'Activo'
            } : ad.status == 'sold' ? {
                icon: 'thumb_up',
                text: 'Vendido'
            } : ad.status == 'reserve' ? {
                icon: 'bookmark_border',
                text: 'Reservado'
            } : ad.status == 'paused' ? {
                icon: 'pause_circle',
                text: 'Pausado'
            } : ''
            mainCardAdsSold.innerHTML += `
            <div class="card-my-ads card-normal">
                <div class="image-card">
                    <i class="material-icons-outlined favorite">favorite_border</i>
                    <i class="material-icons camera">photo_camera</i>
                    <i class="material-icons videocam">videocam</i>
                    <div class="price-ads">
                        <span>$</span>${ ad.price }
                    </div>
                </div>
                <div class="content-card">
                    <div class="header-card-my-ads">
                        <img src="${ BASE_URL }Assets/img/app/${ ad.imgProfile }" class="img-profile-my-ads">
                        <div class="title-card-my-ads">
                            ${ ad.title }
                        </div>
                        <i class="material-icons">more_vert</i>
                        <div class="content-card-more-vert more-vert">
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">drive_file_rename_outline</i>
                                Editar
                            </div>
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">bookmark_border</i>
                                Estadísticas
                            </div>
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">share</i>
                                Compartir
                            </div>
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">delete</i>
                                Borrar
                            </div>
                        </div>
                    </div>
                    <div class="city">
                        <i class="material-icons-outlined">place</i>
                        ${ ad.city }
                    </div>
                    <div class="review">
                        Caduca en ${ ad.expired } días
                        <span>
                            <i class="material-icons-outlined">refresh</i> Renovar
                        </span>
                    </div>
                    <div class="card-actions">
                        <div class="btn-double-icons trigger-stand-out">
                            <i class="material-icons-outlined">auto_awesome</i>
                            Destácalo
                            <i class="material-icons-outlined">expand_more</i>
                        </div>
                        <div class="content-card-more-vert stand-out">
                            <div class="item-card-more-vert">
                                <div class="d-flex">
                                    <i class="material-icons-outlined">auto_awesome</i>
                                    Destacar
                                </div>
                                <span>Mejora tu posición en el listado</span>
                            </div>
                        </div>
                        <div class="btn-double-icons first-color-primary trigger-status">
                            <i class="material-icons-outlined">${ status.icon }</i>
                            <div>${ status.text }</div>
                            <i class="material-icons-outlined">expand_more</i>
                        </div>
                        <div class="content-card-more-vert btn-status">
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">thumb_up</i>
                                <div>Vendido</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            allActionsCards()
        }
    })
    if (mainCardAdsSold.innerHTML === '') {
        mainCardAdsSold.innerHTML = `
        <div class="has-no-ads">
            <img src="${ BASE_URL }Assets/img/app/ausencia-productos.png" alt="ImgFooterBanner">
            <div class="title">
                No tienes anuncios vendidos
            </div>
            <div class="subtitle">
                Selecciona el estado Vendido en el desplegable de estados de un anuncio para que desaparezca del listado de búsqueda.
            </div>
        </div>`
    }
}

// Events Search Cards
searchCardsAdsSold.addEventListener('keyup', () => {
    searchCardsAdsSoldFunc()
})

// Search Paused
countTabMyAdsPaused.innerHTML = `(${ dataSold.length })`
const searchCardsAdsPausedFunc = () => {
    if (dataPaused.length > 0) {
        const tita = document.querySelector('.my-ads .order-by.paused')
        tita.style.display = 'flex'
    }
    mainCardAdsPaused.innerHTML = ''
    let textNotAccents = searchCardsAdsPaused.value.toLowerCase()
    let text = removeAccents(textNotAccents)
    dataPaused.forEach((ad, index) => {
        let title = removeAccents(ad.title.toLowerCase())
        let city = removeAccents(ad.city.toLowerCase())
        let expired = removeAccents(ad.expired.toLowerCase())
        let price = removeAccents(ad.price.toLowerCase())

        if (title.indexOf(text) !== -1 || city.indexOf(text) !== -1 || expired.indexOf(text) !== -1 || price.indexOf(text) !== -1) {
            const status = ad.status == 'active' ? {
                icon: 'task_alt',
                text: 'Activo'
            } : ad.status == 'sold' ? {
                icon: 'thumb_up',
                text: 'Vendido'
            } : ad.status == 'reserve' ? {
                icon: 'bookmark_border',
                text: 'Reservado'
            } : ad.status == 'paused' ? {
                icon: 'pause_circle',
                text: 'Pausado'
            } : ''
            mainCardAdsPaused.innerHTML += `
            <div class="card-my-ads card-normal">
                <div class="image-card">
                    <i class="material-icons-outlined favorite">favorite_border</i>
                    <i class="material-icons camera">photo_camera</i>
                    <i class="material-icons videocam">videocam</i>
                    <div class="price-ads">
                        <span>$</span>${ ad.price }
                    </div>
                </div>
                <div class="content-card">
                    <div class="header-card-my-ads">
                        <img src="${ BASE_URL }Assets/img/app/${ ad.imgProfile }" class="img-profile-my-ads">
                        <div class="title-card-my-ads">
                            ${ ad.title }
                        </div>
                        <i class="material-icons">more_vert</i>
                        <div class="content-card-more-vert more-vert">
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">drive_file_rename_outline</i>
                                Editar
                            </div>
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">bookmark_border</i>
                                Estadísticas
                            </div>
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">share</i>
                                Compartir
                            </div>
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">delete</i>
                                Borrar
                            </div>
                        </div>
                    </div>
                    <div class="city">
                        <i class="material-icons-outlined">place</i>
                        ${ ad.city }
                    </div>
                    <div class="review">
                        Caduca en ${ ad.expired } días
                        <span>
                            <i class="material-icons-outlined">refresh</i> Renovar
                        </span>
                    </div>
                    <div class="card-actions">
                        <div class="btn-double-icons trigger-stand-out">
                            <i class="material-icons-outlined">auto_awesome</i>
                            Destácalo
                            <i class="material-icons-outlined">expand_more</i>
                        </div>
                        <div class="content-card-more-vert stand-out">
                            <div class="item-card-more-vert">
                                <div class="d-flex">
                                    <i class="material-icons-outlined">auto_awesome</i>
                                    Destacar
                                </div>
                                <span>Mejora tu posición en el listado</span>
                            </div>
                        </div>
                        <div class="btn-double-icons first-color-primary trigger-status">
                            <i class="material-icons-outlined">${ status.icon }</i>
                            <div>${ status.text }</div>
                                <i class="material-icons-outlined">expand_more</i>
                            </div>
                            <div class="content-card-more-vert btn-status">
                                <div class="item-card-more-vert item-active" item="${ index }">
                                    <i class="material-icons-outlined active">task_alt</i>
                                    <div>Activo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            allActionsCards()
        }
    })
    
    if (mainCardAdsPaused.innerHTML === '') {
        mainCardAdsPaused.innerHTML = `
        <div class="has-no-ads">
            <img src="${ BASE_URL }Assets/img/app/ausencia-productos.png" alt="ImgFooterBanner">
            <div class="title">
                No tienes anuncios pausados
            </div>
            <div class="subtitle">
                Selecciona el estado Pausado en el desplegable de estados de un anuncio para que no aparezca en el listado de búsqueda por un cierto tiempo.
            </div>
        </div>`
    }
}
searchCardsAdsPaused.addEventListener('keyup', () => {
    searchCardsAdsPausedFunc()
})

// Helpers My Ads
const allMyAdsCount = document.querySelector('.my-ads .count-my-ads .subtitle span.first')
allMyAdsCount.innerHTML = dataAds.length // Count All Ads
const triggerTabSold = document.querySelector('.my-ads .tab-trigger-my-ads.sold')
const elementSearchActives = searchCardsAdsActives.parentElement.parentElement
const elementSearchSold = searchCardsAdsSold.parentElement.parentElement
const elementSearchPaused = searchCardsAdsPaused.parentElement.parentElement
triggerTabSold.addEventListener('click', (e) => {
    e.preventDefault();
    searchCardsAdsActives.value = ''
    searchCardsAdsPaused.value = ''
    searchCardsAdsSold.value = ''
    searchCardsAdsSoldFunc()
    elementSearchSold.style.display = 'block'
    elementSearchActives.style.display = 'none'
    elementSearchPaused.style.display = 'none'
})
const triggerTabActive = document.querySelector('.my-ads .tab-trigger-my-ads.actives')
triggerTabActive.addEventListener('click', (e) => {
    e.preventDefault();
    searchCardsAdsActives.value = ''
    searchCardsAdsPaused.value = ''
    searchCardsAdsSold.value = ''
    searchCardsAdsFunc()
    elementSearchPaused.style.display = 'none'
    elementSearchSold.style.display = 'none'
    elementSearchActives.style.display = 'block'
})
const triggerTabPaused = document.querySelector('.my-ads .tab-trigger-my-ads.paused')
triggerTabPaused.addEventListener('click', (e) => {
    e.preventDefault();
    searchCardsAdsActives.value = ''
    searchCardsAdsSold.value = ''
    searchCardsAdsPaused.value = ''
    searchCardsAdsPausedFunc()
    elementSearchSold.style.display = 'none'
    elementSearchActives.style.display = 'none'
    elementSearchPaused.style.display = 'block'
})

