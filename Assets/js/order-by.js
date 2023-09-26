const contentOrderBy = [...document.querySelectorAll('.content-orderBy')]
contentOrderBy.map((x, i) => {
    x.addEventListener('click', (e) => {
        e.preventDefault();
        const itemsOrderBy = [...x.children]
        itemsOrderBy.map((el, index) => {
            if (el.contains(e.target)) {
                el.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        })
    })
})
