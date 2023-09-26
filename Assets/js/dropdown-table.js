console.log('Dropdown Table')
const dropdownTable = [...document.querySelectorAll('.dropdown-table')]
dropdownTable.map((el, index) => {
    const trigger = el.children[0]
    const content = el.children[1]
    trigger.addEventListener('click', (e) => {
        e.preventDefault()

        if (content.style.display == '' || content.style.display == 'none') {
            content.style.display = 'flex'
        } else {
            content.style.display = 'none'
        }
        
    })
})