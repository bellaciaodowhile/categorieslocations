let inputsFormUser = [...document.querySelectorAll('.input-form.user-data input')]
inputsFormUser.map(el => {
    let span = el.parentElement.children[0]
    el.addEventListener('focus', (e) => {
        span.style.top = '-15px'
        span.style.color = 'mediumvioletred'
    })
    el.addEventListener('blur', (e) => {
        if (el.value.trim( ).length == 0) {
            span.style.top = '8px'
            span.style.color = 'silver'
        } else {
            span.style.top = '-15px'
            span.style.color = 'mediumvioletred'
        }
    })
})
const selectInputForm = []
// Inputs Date
const inputsDate = [...document.querySelectorAll('.input-form .date input')]
inputsDate.map((el, index) => {
    el.value = ''
})
