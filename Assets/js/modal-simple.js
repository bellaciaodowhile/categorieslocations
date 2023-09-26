const triggerModal = [...document.querySelectorAll('.trigger-modal-simple')]
const modalSimple = [...document.querySelectorAll('.modal-simple')]

triggerModal.map((el, index) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const idTrigger = e.target.id
        const modal = modalSimple.find((x) => x.id == idTrigger)
        if (modal.style.display == '' || modal.style.display == 'none') {
            modal.style.display = 'block'
        } else {
            modal.style.display = 'none'
        }
    })
})
modalSimple.map((el, i) => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        const content = el.children[0].children[0]
        if (!content.contains(e.target)) {
            el.style.display = 'none'
        } else if (content.children[0].contains(e.target)) {
            el.style.display = 'none'
        }
    })
})