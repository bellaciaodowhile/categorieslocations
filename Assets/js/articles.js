// Tabs Articles
const stepOneArticles = document.querySelector('.container-articles .step-1')
const stepTwoArticles = document.querySelector('.container-articles .step-2')
const stepThirdArticles = document.querySelector('.container-articles .step-3')
const stepArticlesNumber = document.querySelector('.container-articles .step-articles-number')
// const prevStep = document.querySelector('.container-articles .prevStep')
const barsArticles = document.querySelector('.container-articles .bars-articles')
const categorySelectedArticles = [...document.querySelectorAll('.container-articles .step-2 .subtitle.small strong')]
const categoriesArticles = [...document.querySelectorAll('.container-articles .main-chevrondown .category')]
categoriesArticles.map(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        stepOneArticles.style.display = 'none'
        stepTwoArticles.style.display = 'block'
        barsArticles.children[1].classList.add('active')
        stepArticlesNumber.innerHTML = '2'
        const category = e.target.textContent
        categorySelectedArticles.map((x) => { x.innerHTML = category })
    })
})
const prevStepArticleOne = document.querySelector('.container-articles .prevStepArticleOne')
prevStepArticleOne.addEventListener('click', (e) => {
    e.preventDefault();
    barsArticles.children[1].classList.remove('active')
    stepArticlesNumber.innerHTML = '1'
    stepOneArticles.style.display = 'block'
    stepTwoArticles.style.display = 'none'
})
const nextStepArticle = document.querySelector('.container-articles .nextStepArticle')
nextStepArticle.addEventListener('click', (e) => {
    e.preventDefault();
    barsArticles.children[2].classList.add('active')
    stepArticlesNumber.innerHTML = '3'
    stepTwoArticles.style.display = 'none'
    stepThirdArticles.style.display = 'block'
})
const prevStepArticleTwo = document.querySelector('.container-articles .prevStepArticleTwo')
prevStepArticleTwo.addEventListener('click', (e) => {
    e.preventDefault();
    barsArticles.children[2].classList.remove('active')
    stepArticlesNumber.innerHTML = '2'
    stepTwoArticles.style.display = 'block'
    stepThirdArticles.style.display = 'none'
})
// Sections Articles Ratio Step Video || Image
const sectionImgArticle = document.querySelector('.container-articles .section-img-article')
const sectionVideoArticle = document.querySelector('.container-articles .section-video-article')
const triggerSectionImgArticle = document.querySelector('.container-articles .optionArticle-1')
const triggerSectionVideoArticle = document.querySelector('.container-articles .optionArticle-2')
triggerSectionImgArticle.addEventListener('click', (e) => {
    e.preventDefault();
    sectionImgArticle.style.display = 'block'
    sectionVideoArticle.style.display = 'none'
    triggerSectionImgArticle.children[0].style.background = 'var(--color-primary-light)'
    triggerSectionVideoArticle.children[1].style.fontWeight = 'normal'
    triggerSectionImgArticle.children[1].style.fontWeight = 'bold'
    triggerSectionVideoArticle.children[0].style.background = '#fff'
})
triggerSectionVideoArticle.addEventListener('click', (e) => {
    e.preventDefault();
    sectionImgArticle.style.display = 'none'
    sectionVideoArticle.style.display = 'block'
    triggerSectionImgArticle.children[1].style.fontWeight = 'normal'
    triggerSectionVideoArticle.children[1].style.fontWeight = 'bold'
    triggerSectionImgArticle.children[0].style.background = '#fff'
    triggerSectionVideoArticle.children[0].style.background = 'var(--color-primary-light)'
})
// Sections Articles Ratio Ads
const sectionArticlesAds = document.querySelector('.container-articles .section-articles-ads')
const triggerOneArticlesAds = document.querySelector('.container-articles .adArticles-1')
const triggerTwoArticlesAds = document.querySelector('.container-articles .adArticles-2')
triggerOneArticlesAds.addEventListener('click', (e) => {
    e.preventDefault();
    sectionArticlesAds.style.display = 'none'
    triggerOneArticlesAds.children[0].style.background = colorPrimaryLight
    triggerTwoArticlesAds.children[0].style.background = '#fff'
    triggerTwoArticlesAds.children[1].style.fontWeight = 'normal'
    triggerOneArticlesAds.children[1].style.fontWeight = 'bold'
})
triggerTwoArticlesAds.addEventListener('click', (e) => {
    e.preventDefault();
    sectionArticlesAds.style.display = 'block'
    triggerTwoArticlesAds.children[0].style.background = colorPrimaryLight
    triggerOneArticlesAds.children[0].style.background = '#fff'
    triggerTwoArticlesAds.children[1].style.fontWeight = 'bold'
    triggerOneArticlesAds.children[1].style.fontWeight = 'normal'
})
const triggerSurvey = document.querySelector('.container-articles .trigger-survey')
const sectionArticlesSurvey = document.querySelector('.container-articles .section-articles-surveys')
triggerSurvey.addEventListener('click', (e) => {
    e.preventDefault();
    if (sectionArticlesSurvey.style.display == '' || sectionArticlesSurvey.style.display == 'none') {
        sectionArticlesSurvey.style.display = 'block'
    } else {
        sectionArticlesSurvey.style.display = 'none'
    }
})
const sectionLoadVideoArticles = document.querySelector('.container-articles .load-video')
const sectionLinkVideoArticles = document.querySelector('.container-articles .link-video')
const triggerLoadVideoArticles = document.querySelector('.container-articles .loadVideoArticle-1')
const triggerLinkVideoArticles = document.querySelector('.container-articles .loadVideoArticle-2')

triggerLoadVideoArticles.addEventListener('click', (e) => {
    e.preventDefault();
    sectionLoadVideoArticles.style.display = 'block'
    sectionLinkVideoArticles.style.display = 'none'
    triggerLoadVideoArticles.querySelector('.dot').style.background = colorPrimaryLight
    triggerLinkVideoArticles.querySelector('.dot').style.background = '#fff'
})
triggerLinkVideoArticles.addEventListener('click', (e) => {
    e.preventDefault();
    sectionLoadVideoArticles.style.display = 'none'
    sectionLinkVideoArticles.style.display = 'block'
    triggerLinkVideoArticles.querySelector('.dot').style.background = colorPrimaryLight
    triggerLoadVideoArticles.querySelector('.dot').style.background = '#fff'
})
// My Articles
const myArticles = document.querySelector('.my-articles')
const triggerMyArticles = document.querySelector('.main-tabs-articles .trigger-my-articles')
const postingArticles = document.querySelector('.posting-articles')
triggerMyArticles.addEventListener('click', (e) => {
    e.preventDefault()
    triggerMyArticles.classList.add('active')
    postingArticles.style.display = 'none'
    myArticles.style.display = 'block'
})
// Post Articles
const postArticles = document.querySelector('.main-tabs-articles .post-articles')
postArticles.addEventListener('click', (e) => {
    e.preventDefault()
    triggerMyArticles.classList.remove('active')
    postingArticles.style.display = 'block'
    myArticles.style.display = 'none'
})
// Tabs Articles
const myArticlesTabs = document.querySelector('.my-articles .tabs-my-articles');
const itemTabsMyArticles = [...document.querySelectorAll('.my-articles .tabs-my-articles .tab-trigger-my-articles')]
const itemsContentTabsMyArticles = [...document.querySelectorAll('.my-articles .tabs-content-my-articles .tab-item-my-articles')]
myArticlesTabs.addEventListener('click', (e) => {
    e.preventDefault();
    const markerTabsMyArticles = myArticlesTabs.children[0]
    itemTabsMyArticles.map((el, index) => {
        const left = el.offsetLeft
        const width = el.clientWidth
        if (el.contains(e.target)) {
            markerTabsMyArticles.style.left = (left + 30) + 'px'
            markerTabsMyArticles.style.width = (width - 43) + 'px'
            itemsContentTabsMyArticles[index].style.display = 'block'
            el.classList.add('active')
        } else if (!el.contains(e.target)) {
            el.classList.remove('active')
            itemsContentTabsMyArticles[index].style.display = 'none'
        }
    })
})

// All Functions Cards Articles
function allActionsCardsArticles() {
    // Start All Actions Cards
    const cardMyArticles = [...document.querySelectorAll('.my-articles .main-cards-my-articles.actives .card-my-articles.card-normal')]
    const cardMyArticlesPaused = [...document.querySelectorAll('.my-articles .main-cards-my-articles.paused .card-my-articles.card-normal')]
    const mainCardsArticlesActives = document.querySelector('.my-articles .main-cards-my-articles.actives')
    const mainCardsArticlesPaused = document.querySelector('.my-articles .main-cards-my-articles.paused')
    mainCardsArticlesActives.addEventListener('click', (e) => {
        e.preventDefault();
        cardMyArticles.map(el => {
            const triggerMoreVertCard = el.querySelector('.header-card-my-articles i')
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
    mainCardsArticlesPaused.addEventListener('click', (e) => {
        e.preventDefault();
        cardMyArticlesPaused.map(el => {
            const triggerMoreVertCard = el.querySelector('.header-card-my-articles i')
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
    const statusCurrentArticles = [...document.querySelectorAll('.my-articles .content-card-more-vert.btn-status .item-card-more-vert')]
    statusCurrentArticles.map(el => {
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
    const newPostArticles = document.querySelector('.my-articles .card-my-articles-new-post')
    newPostArticles.addEventListener('click', (e) => {
        e.preventDefault()
        postingArticles.style.display = 'block'
        myArticles.style.display = 'none'
    })
    //  Paused
     const itemPausedArticles = [...document.querySelectorAll('.my-articles .item-card-more-vert.item-paused')]
     itemPausedArticles.map((el, index) => {
         el.addEventListener('click', (e) => {
             e.preventDefault();
             const itemIndex = el.attributes[1].value
             const card = el.closest('.card-my-articles.card-normal')
             if (confirm('¿Está seguro de realizar esta acción?')) {
                 const data = dataArticles[itemIndex]
                 data.status = 'paused'
                 dataPausedArticles.push(data)
                 dataArticles.splice(itemIndex, 1)
                 card.remove()
             }
             countTabMyArticlesActives.innerHTML = `(${ dataArticles.length })`
             countTabMyArticlesPaused.innerHTML = `(${ dataPausedArticles.length })`
         })
     })
      // Actives
      const itemActivesArticles = [...document.querySelectorAll('.my-articles .item-card-more-vert.item-active')]
      itemActivesArticles.map((el, index) => {
          el.addEventListener('click', (e) => {
              e.preventDefault();
              const itemIndex = el.attributes[1].value
              const card = el.closest('.card-my-articles.card-normal')
              if (confirm('¿Está seguro de realizar esta acción?')) {
                const data = dataPausedArticles[itemIndex]
                data.status = 'active'
                dataArticles.push(data)
                dataPausedArticles.splice(itemIndex, 1)
                card.remove()
            }
              countTabMyArticlesActives.innerHTML = `(${ dataArticles.length })`
              countTabMyArticlesPaused.innerHTML = `(${ dataPausedArticles.length })`
          })
      })
    // End All Actions Cards
}
// Articles Cards
const dataPausedArticles = []
const countTabMyArticlesActives = document.querySelector('.my-articles .count-tab-my-articles.actives')
const countTabMyArticlesPaused = document.querySelector('.my-articles .count-tab-my-articles.paused')
const mainCardArticles = document.querySelector('.my-articles .main-cards-my-articles.actives')
const mainCardArticlesPaused = document.querySelector('.my-articles .main-cards-my-articles.paused')
const searchCardsArticlesActives = document.querySelector('.my-articles .search-cards-articles.actives')
const searchCardsArticlesPaused = document.querySelector('.my-articles .search-cards-articles.paused')
countTabMyArticlesActives.innerHTML = `(${ dataArticles.length })`
// Search Actives
const searchCardsArticlesFunc = () => {
    let textNotAccents = searchCardsArticlesActives.value.toLowerCase()
    let text = removeAccents(textNotAccents)
    mainCardArticles.innerHTML = ''
    mainCardArticles.innerHTML += `
    <div class="card-my-articles card-my-articles-new-post">
        <i class="material-icons-outlined">campaign</i>
        <div class="title">Añadir un nuevo artículo</div>
        <div class="subtitle">Para poder activar los artículos tu perfil debe haber sido verificado.</div>
    </div>`
    dataArticles.forEach((article, index) => {
        let title = removeAccents(article.title.toLowerCase())
        let city = removeAccents(article.city.toLowerCase())
        let expired = removeAccents(article.expired.toLowerCase())
        let price = removeAccents(article.price.toLowerCase())

        if (title.indexOf(text) !== -1 || city.indexOf(text) !== -1 || expired.indexOf(text) !== -1 || price.indexOf(text) !== -1) {
            mainCardArticles.innerHTML += `
            <div class="card-my-articles card-normal">
                <div class="image-card">
                    <i class="material-icons-outlined favorite">favorite_border</i>
                    <i class="material-icons camera">photo_camera</i>
                    <i class="material-icons videocam">videocam</i>
                </div>
                <div class="content-card">
                    <div class="header-card-my-articles">
                        <img src="${ BASE_URL }Assets/img/app/${ article.imgProfile }" class="img-profile-my-articles">
                        <div class="title-card-my-articles">
                            ${ article.title }
                        </div>
                        <i class="material-icons">more_vert</i>
                        <div class="content-card-more-vert more-vert">
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">drive_file_rename_outline</i>
                                Editar
                            </div>
                            <div class="item-card-more-vert">
                                <i class="material-icons-outlined">insert_chart</i>
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
                        Gonzalo de Villamor
                        <i class="material-icons-outlined" style="margin: 2px 0 0 2px;">task_alt</i>
                    </div>
                    <div class="review">
                        27M visitas - Hace 4 horas
                    </div>
                    <div class="card-actions">
                        <div class="btn-double-icons trigger-stand-out">
                            <i class="material-icons-outlined">description</i>
                            Descripción
                            <i class="material-icons-outlined">expand_more</i>
                        </div>
                        <div class="content-card-more-vert stand-out">
                            <div class="item-card-more-vert">
                                <div class="d-flex">
                                    <i class="material-icons-outlined">description</i>
                                    Descripción
                                </div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatem reprehenderit enim iure expedita voluptatum quia ad nostrum placeat nulla tenetur culpa hic, adipisci, facere, dolorum laborum explicabo molestiae ullam?</span>
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
                            <div class="item-card-more-vert item-paused" item="${ index }">
                                <i class="material-icons-outlined">pause_circle</i>
                                <div>Pausado</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            allActionsCardsArticles()
        }
    })
    if (mainCardArticles.innerHTML === '') {
        mainCardArticles.innerHTML = `
        <div class="has-no-ads">
            <img src="${ BASE_URL }Assets/img/app/articulo.png" alt="ImgFooterBanner">
            <div class="title">
                No existe ninguna coincidencia...
            </div>
        </div>`
    }
}
searchCardsArticlesActives.addEventListener('keyup', () => {
    searchCardsArticlesFunc()
})
searchCardsArticlesFunc()

// Search Paused
countTabMyArticlesPaused.innerHTML = `(${ dataSold.length })`
const searchCardsArticlesPausedFunc = () => {
    if (dataPausedArticles.length > 0) {
        const tita = document.querySelector('.my-articles .order-by.paused')
        tita.style.display = 'flex'
    }
    mainCardArticlesPaused.innerHTML = ''
    let textNotAccents = searchCardsArticlesPaused.value.toLowerCase()
    let text = removeAccents(textNotAccents)
    dataPausedArticles.forEach((article, index) => {
        let title = removeAccents(article.title.toLowerCase())
        let city = removeAccents(article.city.toLowerCase())
        let expired = removeAccents(article.expired.toLowerCase())
        let price = removeAccents(article.price.toLowerCase())

        if (title.indexOf(text) !== -1 || city.indexOf(text) !== -1 || expired.indexOf(text) !== -1 || price.indexOf(text) !== -1) {
            const status = article.status == 'active' ? {
                icon: 'task_alt',
                text: 'Activo'
            } : article.status == 'sold' ? {
                icon: 'thumb_up',
                text: 'Vendido'
            } : article.status == 'reserve' ? {
                icon: 'bookmark_border',
                text: 'Reservado'
            } : article.status == 'paused' ? {
                icon: 'pause_circle',
                text: 'Pausado'
            } : ''
            mainCardArticlesPaused.innerHTML += `
            <div class="card-my-articles card-normal">
                <div class="image-card">
                    <i class="material-icons-outlined favorite">favorite_border</i>
                    <i class="material-icons camera">photo_camera</i>
                    <i class="material-icons videocam">videocam</i>
                </div>
                <div class="content-card">
                    <div class="header-card-my-articles">
                        <img src="${ BASE_URL }Assets/img/app/${ article.imgProfile }" class="img-profile-my-articles">
                        <div class="title-card-my-articles">
                            ${ article.title }
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
                        Gonzalo de Villamor
                        <i class="material-icons-outlined" style="margin: 2px 0 0 2px;">task_alt</i>
                    </div>
                    <div class="review">
                        27M visitas - Hace 4 horas
                    </div>
                    <div class="card-actions">
                        <div class="btn-double-icons trigger-stand-out">
                            <i class="material-icons-outlined">description</i>
                            Descripción
                            <i class="material-icons-outlined">expand_more</i>
                        </div>
                        <div class="content-card-more-vert stand-out">
                            <div class="item-card-more-vert">
                                <div class="d-flex">
                                    <i class="material-icons-outlined">description</i>
                                    Descripción
                                </div>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatem reprehenderit enim iure expedita voluptatum quia ad nostrum placeat nulla tenetur culpa hic, adipisci, facere, dolorum laborum explicabo molestiae ullam?</span>
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
                allActionsCardsArticles()
        }
    })
    
    if (mainCardArticlesPaused.innerHTML === '') {
        mainCardArticlesPaused.innerHTML = `
        <div class="has-no-ads">
            <img src="${ BASE_URL }Assets/img/app/articulo.png" alt="ImgFooterBanner">
            <div class="title">
                No tienes artículos pausados
            </div>
            <div class="subtitle">
                Selecciona el estado Pausado en el desplegable de estados de un anuncio para que no aparezca en el listado de búsqueda por un cierto tiempo.
            </div>
        </div>`
    }
}
searchCardsArticlesPaused.addEventListener('keyup', () => {
    searchCardsArticlesPausedFunc()
})

// Helpers My Articles
const allMyArticlesCount = document.querySelector('.my-articles .count-my-articles .subtitle span.first')
allMyArticlesCount.innerHTML = dataArticles.length // Count All Articles
const elementSearchActivesArticles = searchCardsArticlesActives.parentElement.parentElement
const elementSearchPausedArticles = searchCardsArticlesPaused.parentElement.parentElement
const triggerTabActiveArticles = document.querySelector('.my-articles .tab-trigger-my-articles.actives')
triggerTabActiveArticles.addEventListener('click', (e) => {
    e.preventDefault();
    searchCardsArticlesActives.value = ''
    searchCardsArticlesPaused.value = ''
    searchCardsArticlesFunc()
    elementSearchPausedArticles.style.display = 'none'
    elementSearchActivesArticles.style.display = 'block'
})
const triggerTabPausedArticles = document.querySelector('.my-articles .tab-trigger-my-articles.paused')
triggerTabPausedArticles.addEventListener('click', (e) => {
    e.preventDefault();
    searchCardsArticlesActives.value = ''
    searchCardsArticlesPaused.value = ''
    searchCardsArticlesPausedFunc()
    elementSearchActivesArticles.style.display = 'none'
    elementSearchPausedArticles.style.display = 'block'
})

