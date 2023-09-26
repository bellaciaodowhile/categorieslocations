const selectFormGloobal = [...document.querySelectorAll('.select-form-gloobal')]
selectFormGloobal.map(el => {
    const mainButton = el.children[0]
    const optionsSelectFormGloobal = el.querySelector('.options')
    const contentOptionsSelectFormGloobal = el.querySelector('.content-options')
    const arrayOptionsSelectFormGloobal = [...el.querySelectorAll('.options .option')]
    mainButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (optionsSelectFormGloobal.style.display == '' || optionsSelectFormGloobal.style.display == 'none') {
            optionsSelectFormGloobal.style.display = 'block'
        } else {
            optionsSelectFormGloobal.style.display = 'none'
        }
    })
    contentOptionsSelectFormGloobal.addEventListener('click', function (e) {
        e.preventDefault();
        arrayOptionsSelectFormGloobal.map(function (el, index) {
            if (el.contains(e.target)) {
                el.children[0].classList.add('active')
                mainButton.children[0].textContent = el.children[0].textContent
                mainButton.children[0].style.color = 'var(--color-text)'
                optionsSelectFormGloobal.style.display = 'none'
            } else {
                el.children[0].classList.remove('active')
            }
        })
    });
})

// Selected Checbox 
const selectFormGloobalCheckbox = document.querySelector('.select-form-gloobal-checkbox')
const mainButtonCheckbox = selectFormGloobalCheckbox.children[0]
const optionsSelectFormGloobalCheckbox = selectFormGloobalCheckbox.querySelector('.options')
const contentOptionsSelectFormGloobalCheckbox = selectFormGloobalCheckbox.querySelector('.content-options')
const arrayOptionsSelectFormGloobalCheckbox = [...selectFormGloobalCheckbox.querySelectorAll('.options .option')]
mainButtonCheckbox.addEventListener('click', function (e) {
    e.preventDefault();
    if (optionsSelectFormGloobalCheckbox.style.display == '' || optionsSelectFormGloobalCheckbox.style.display == 'none') {
        optionsSelectFormGloobalCheckbox.style.display = 'block'
    } else {
        optionsSelectFormGloobalCheckbox.style.display = 'none'
    }
})
let adsCount = 0
contentOptionsSelectFormGloobalCheckbox.addEventListener('click', function (e) {
    e.preventDefault();
    arrayOptionsSelectFormGloobalCheckbox.map(function (el, index) {
        if (el.contains(e.target)) {
            if (el.children[0].style.background == '' || el.children[0].style.background == 'white') {
                el.children[0].style.background = colorPrimaryLight
                mainButtonCheckbox.children[0].style.color = colorPrimaryLight 
                mainButtonCheckbox.children[0].textContent = (adsCount += 1) + (adsCount == 1 ? ' anuncio seleccionado' : ' anuncios seleccionados')
            } else {
                el.children[0].style.background = 'white'
                mainButtonCheckbox.children[0].textContent = (adsCount -= 1) + (adsCount == 1 ? ' anuncio seleccionado' : ' anuncios seleccionados')
                setTimeout(() => {
                    if (adsCount == 0) {
                        mainButtonCheckbox.children[0].style.color = 'silver' 
                        mainButtonCheckbox.children[0].textContent = 'Selecciona anuncios'
                    }
                }, 10)
            }
        }
    })
});
// const contentOptionsYears = [...document.querySelectorAll('.select-form-gloobal .content-options.years')]
// contentOptionsYears.map(x => {
//     let date = new Date();
//     console.log(date.getFullYear())
//     for (let year = 1960; year <= date.getFullYear(); year++) {
//         x.innerHTML += /* html */ `
//         <div class="option">
//             <div> ${ year } </div>
//         </div>`
//     }
// })
