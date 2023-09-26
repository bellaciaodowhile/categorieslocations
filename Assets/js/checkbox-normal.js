const checkboxNormal = [...document.querySelectorAll('.checkbox-main-normal .checkbox')]
const checkboxNormalArticles = [...document.querySelectorAll('.checkbox-main-normal.articles .checkbox')]

checkboxNormal.map((el, index) => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        const box = el.children[0]
        const span = el.children[1]
        const all = el.classList[1]
        if (all == 'all') {
            if (box.children[0].style.display == '' || box.children[0].style.display == 'none') {
                checkboxNormalArticles.map(x => {
                    x.children[0].children[0].style.display = 'block'
                    x.children[0].style.background = 'var(--color-primary-light)'
                    x.children[1].style.fontWeight = 'bold'
                })
            } else {
                checkboxNormalArticles.map(x => {
                    x.children[0].children[0].style.display = 'none'
                    x.children[0].style.background = '#fff'
                    x.children[1].style.fontWeight = 'normal'
                })
            }
        } else {
            if (box.children[0].style.display == '' || box.children[0].style.display == 'none') {
                box.children[0].style.display = 'block'
                box.style.background = 'var(--color-primary-light)'
                span.style.fontWeight = 'bold'
            } else {
                box.children[0].style.display = 'none'
                box.style.background = '#fff'
                span.style.fontWeight = 'normal'
            }
        }
    })
})