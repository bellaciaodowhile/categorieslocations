console.log('Ads Search')
const inputsSearchAds = [...document.querySelectorAll('.search-form-input input')]
inputsSearchAds.map((el, index) => {
    const label = el.parentElement
    const icon = label.parentElement.children[1].children[0]
    const searchOutput = label.parentElement.children[2]
    let span = el.parentElement.children[0]
    el.addEventListener('focus', (e) => {
        span.style.top = '-15px'
        span.style.left = '10px'
        label.style.borderColor = 'mediumvioletred'
        label.style.padding = '15px 10px 15px 38px'
        icon.style.fontSize = '3.1em'
    })
    el.addEventListener('blur', (e) => {
        if (el.value.trim( ).length == 0) {
            span.style.top = '8px'
            span.style.left = '36px'
            label.style.borderColor = 'silver'
            label.style.padding = '8px 10px 8px 38px'
            icon.style.fontSize = '2.4em'
        } else {
            span.style.top = '-15px'
            span.style.left = '10px'
            label.style.borderColor = 'mediumvioletred'
            label.style.padding = '15px 10px 15px 38px'
            icon.style.fontSize = '3.1em'
        }
    })
    el.addEventListener('keyup', (e) => {
        searchOutput.innerHTML = ''
        const texto = el.value.toLowerCase()
        if (texto.length >= 2) {
            searchOutput.style.display = 'block'
            for (let cat of dataCategories) {
                let name = cat.name.toLowerCase()
                let category = cat.category.toLowerCase()
                const nameFilter = name.replace(texto, `<strong>${ texto }</strong>`)
                const categoryFilter = category.replace(texto, `<strong>${ texto }</strong>`)
                
                if (name.indexOf(texto) !== -1 || category.indexOf(texto) !== -1) {
                    searchOutput.innerHTML += `
                    <div class="item-real-time">
                    <div class="title" style="text-transform: capitalize;">
                    ${ nameFilter }
                    </div>
                    <div class="subtitle">
                    <i class="material-icons-outlined">place</i>
                    <div class="text" style="text-transform: capitalize;">
                    ${ categoryFilter }
                    </div>
                    </div>
                    </div>`
                    // Ads
                    const itemsCategoriesSearch = [...document.querySelectorAll('.container-ads .item-real-time')]
                    itemsCategoriesSearch.map(el => {
                        el.addEventListener('click', (e) => {
                            e.preventDefault(); 
                            stepOneAds.style.display = 'none'
                            stepTwoAds.style.display = 'block'
                            bars.children[1].classList.add('active')
                            stepAdNumber.innerHTML = '2'
                        })
                    })
                    // Articles
                    const itemsCategoriesSearchArticles = [...document.querySelectorAll('.container-articles .item-real-time')]
                    itemsCategoriesSearchArticles.map(el => {
                        el.addEventListener('click', (e) => {
                            e.preventDefault(); 
                            stepOneArticles.style.display = 'none'
                            stepTwoArticles.style.display = 'block'
                            barsArticles.children[1].classList.add('active')
                            stepArticlesNumber.innerHTML = '2'
                        })
                    })
                } 
            }
            if (searchOutput.innerHTML === '') {
                searchOutput.innerHTML = `
                <div class="item-real-time">
                    <div class="title" style="text-transform: capitalize;">
                        No se encuetran resultados
                    </div>
                </div>`
            }
        } else {
            searchOutput.style.display = 'none'
        }
    })
})
