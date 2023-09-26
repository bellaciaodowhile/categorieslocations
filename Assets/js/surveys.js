let surveyIndex = 0
let fontsIndex = 0
const addMoreOptionSurveys = [...document.querySelectorAll('.main-surveys .option-survey .addMoreOptionSurvey')]
addMoreOptionSurveys.map((el, index) => {
    el.addEventListener('click', (e) => {
        moreOptionsSurveyFunc()
        console.log(this, ' = ',index)
    })
})
const moreOptionSurveys = document.querySelector('.main-surveys.surveys')

function moreOptionsSurveyFunc() {

    const optionSurvey = document.createElement('div')
    optionSurvey.classList.add('option-survey')
    const iconDrag = document.createElement('i')
    iconDrag.classList.add('material-icons', 'icon-drag')
    iconDrag.textContent = 'drag_indicator'
    const input = document.createElement('div')
    input.classList.add('input-form', 'user-data', 'group-my')
    const label = document.createElement('label')
    label.classList.add('txt-field')
    const inputText = document.createElement('input')
    inputText.setAttribute('placeholder', 'Escribe aquí una de las opciones')
    inputText.setAttribute('name', `surveyArticle${surveyIndex += 1}`)
    input.appendChild(label).appendChild(inputText)
    const btnLight = document.createElement('div')
    btnLight.classList.add('btn-light', 'addMoreOptionSurvey')
    btnLight.onclick = moreOptionsSurveyFunc
    const iLight = document.createElement('i')
    iLight.classList.add('material-icons-outlined')
    iLight.textContent = 'add_circle_outline'
    btnLight.appendChild(iLight)
    const btnPink = document.createElement('div')
    btnPink.classList.add('btn-pink')
    btnPink.setAttribute('onclick', 'this.parentElement.remove()')
    const iPink = document.createElement('i')
    iPink.classList.add('material-icons-outlined')
    iPink.textContent = 'close'
    btnPink.appendChild(iPink)
    optionSurvey.appendChild(iconDrag)
    optionSurvey.appendChild(input)
    optionSurvey.appendChild(btnLight)
    optionSurvey.appendChild(btnPink)
    moreOptionSurveys.appendChild(optionSurvey)
}
// Articles Fonts Step 3
const addMoreOptionFonts = [...document.querySelectorAll('.main-surveys.surveys .option-survey .addMoreOptionFonts')]
addMoreOptionFonts.map((el, index) => {
    el.addEventListener('click', (e) => {
        moreOptionsFontsFunc()
        console.log(this, ' = ',index)
    })
})
const moreOptionFonts = document.querySelector('.main-surveys.fonts')
function moreOptionsFontsFunc() {

    const optionSurvey = document.createElement('div')
    optionSurvey.classList.add('option-survey')
    const iconDrag = document.createElement('i')
    iconDrag.classList.add('material-icons', 'icon-drag')
    iconDrag.textContent = 'drag_indicator'
    const input = document.createElement('div')
    input.classList.add('input-form', 'user-data', 'group-my', 'mr-1')
    const label = document.createElement('label')
    label.classList.add('txt-field')
    const inputText = document.createElement('input')
    inputText.setAttribute('placeholder', 'Escribe aquí un texto')
    inputText.setAttribute('name', `fontsArticle${fontsIndex += 1}`)
    input.appendChild(label).appendChild(inputText)
    const inputTwo = document.createElement('div')
    inputTwo.classList.add('input-form', 'user-data', 'group-my')
    const labelTwo = document.createElement('label')
    labelTwo.classList.add('txt-field')
    const inputTextTwo = document.createElement('input')
    inputTextTwo.setAttribute('placeholder', 'Escribe aquí un enlace')
    inputTextTwo.setAttribute('name', `fontLinkArticle${fontsIndex += 1}`)
    inputTwo.appendChild(labelTwo).appendChild(inputTextTwo)
    const btnLight = document.createElement('div')
    btnLight.classList.add('btn-light', 'addMoreOptionFonts')
    btnLight.onclick = moreOptionsFontsFunc
    const iLight = document.createElement('i')
    iLight.classList.add('material-icons-outlined')
    iLight.textContent = 'add_circle_outline'
    btnLight.appendChild(iLight)
    const btnPink = document.createElement('div')
    btnPink.classList.add('btn-pink')
    btnPink.setAttribute('onclick', 'this.parentElement.parentElement.remove()')
    const iPink = document.createElement('i')
    iPink.classList.add('material-icons-outlined')
    iPink.textContent = 'close'
    btnPink.appendChild(iPink)


    const dFlex = document.createElement('div')
    dFlex.classList.add('d-flex')
    dFlex.appendChild(btnLight)
    dFlex.appendChild(btnPink)
    optionSurvey.appendChild(iconDrag)
    optionSurvey.appendChild(input)
    optionSurvey.appendChild(inputTwo)
    optionSurvey.appendChild(dFlex)
    moreOptionFonts.appendChild(optionSurvey)
}


// Cv Step 3 - Activity Importants
const addMoreOptionActivityImportants = [...document.querySelectorAll('.main-surveys.activity-importants .option-survey .addMoreOptionActivity')]
addMoreOptionActivityImportants.map((el, index) => {
    el.addEventListener('click', (e) => {
        moreOptionsActivityFunc()
    })
})
const moreOptionActivityImportant = document.querySelector('.main-surveys.activity-importants')
function moreOptionsActivityFunc() {
    let item = `
        <div class="d-flex">
            <i class="material-icons icon-drag">drag_indicator</i>
            <div class="input-form user-data group-my">
                <label class="txt-field">
                    <input placeholder="Indica otro cargo desempeñado" type="text" name="linkVideoName"
                        class="color-text" />
                </label>
            </div>
            <div class="d-flex buttons">
                <div class="btn-light addMoreOptionActivity">
                    <i class="material-icons-outlined">add_circle_outline</i>
                </div>
                <div class="btn-pink" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="material-icons-outlined">close</i>
                </div>
            </div>
        </div>
        <div class="grid-inputs-2">
            <div class="col">
                <div class="input-form user-data normal-my">
                    <label class="txt-field icon-right date">
                        <span
                            class="input-normal">Desde&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <input type="date" name="fromDate" placeholder="Desde" />
                        <i class="icon-right material-icons-outlined date-trigger">date_range</i>
                    </label>
                </div>
            </div>
            <div class="col">
                <div class="input-form user-data normal-my">
                    <label class="txt-field icon-right date">
                        <span
                            class="input-normal">Hasta&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <input type="date" name="toDate" placeholder="Hasta" />
                        <i class="icon-right material-icons-outlined date-trigger">date_range</i>
                    </label>
                </div>
            </div>
        </div>`
    let div = document.createElement('div')
    div.classList.add('option-survey', 'fisrt', 'd-flex', 'column', 'card-other')
    div.innerHTML = item
    div.children[0].children[2].children[0].onclick = moreOptionsActivityFunc
    moreOptionActivityImportant.appendChild(div)
     // Function Inputs Forms 
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
 // End function inputs forms
}

// Cv Step 8 - Deportes Practicados
const addMoreOptionDeportesPracticados = [...document.querySelectorAll('.main-surveys.deportes-practicados .option-survey .addMoreOptionsDeportesPracticados')]
addMoreOptionDeportesPracticados.map((el, index) => {
    el.addEventListener('click', (e) => {
        moreOptionsDeportesPracticadosFunc()
    })
})
const moreOptionDeportesPracticados = document.querySelector('.main-surveys.deportes-practicados')
function moreOptionsDeportesPracticadosFunc() {
    let item = `
    <i class="material-icons icon-drag subtitle">drag_indicator</i>
    <div>
        <h4 class="subtitle normal"><strong>Nombrar el deporte</strong></h4>
        <div class="d-flex">
            <div class="input-form user-data group-my">
                <label class="txt-field">
                    <input placeholder="Escribe aquí un texto" type="text" name="linkVideoName" class="color-text" />
                </label>
            </div>
            <div class="btn-light addMoreOptionsDeportesPracticados">
                <i class="material-icons-outlined">add_circle_outline</i>
            </div>
            <div class="btn-pink" onclick="this.parentElement.parentElement.parentElement.remove()">
                <i class="material-icons-outlined">close</i>
            </div>
        </div>
    </div>
    <div class="grid-inputs-2">
        <div class="col">
            <h4 class="subtitle normal"><strong>Asiduidad en la práctica del deporte</strong></h4>
            <div class="radio-wrapper articles normal-my">
                <label for="asiduidadDeporte-1" class="option asiduidadDeporte-1">
                    <div class="dot"></div>
                    <span>Diaria</span>
                </label>
                <label for="asiduidadDeporte-2" class="option asiduidadDeporte-2">
                    <div class="dot"></div>
                    <span>Semanal</span>
                </label>
                <label for="asiduidadDeporte-3" class="option asiduidadDeporte-3">
                    <div class="dot"></div>
                    <span>Mensual</span>
                </label>
            </div>
        </div>
        <div class="col">
            <div class="yes-horasPracticadasPorSemana">
                <h4 class="subtitle normal"><strong>Horas practicadas por semana</strong></h4>
                <div class="input-form user-data normal-my">
                    <label class="txt-field">
                        <span class="input-normal"></span>
                        <input type="number" name="fromDate" placeholder="Especificar horas" />
                    </label>
                </div>
            </div>
            <div class="yes-horasPracticadasPorDia">
                <h4 class="subtitle normal"><strong>Horas practicadas por día</strong></h4>
                <div class="input-form user-data normal-my">
                    <label class="txt-field">
                        <span class="input-normal"></span>
                        <input type="number" name="fromDate" placeholder="Especificar horas" />
                    </label>
                </div>
            </div>
            <div class="yes-horasPracticadasPorMes">
                <h4 class="subtitle normal"><strong>Horas practicadas por mes</strong></h4>
                <div class="input-form user-data normal-my">
                    <label class="txt-field">
                        <span class="input-normal"></span>
                        <input type="number" name="fromDate" placeholder="Especificar horas" />
                    </label>
                </div>
            </div>
        </div>
    </div>`
    let div = document.createElement('div')
    div.classList.add('option-survey', 'fisrt', 'block')
    div.innerHTML = item
    div.children[1].children[1].children[1].onclick = moreOptionsDeportesPracticadosFunc
    let itemHorasPracticadasSemana = div.querySelector('.grid-inputs-2 .yes-horasPracticadasPorSemana')
    let itemHorasPracticadasDia = div.querySelector('.grid-inputs-2 .yes-horasPracticadasPorDia')
    let itemHorasPracticadasMes = div.querySelector('.grid-inputs-2 .yes-horasPracticadasPorMes')
    let itemDiario = div.querySelector('.grid-inputs-2 .asiduidadDeporte-1')
    let itemSemanal = div.querySelector('.grid-inputs-2 .asiduidadDeporte-2')
    let itemMensual = div.querySelector('.grid-inputs-2 .asiduidadDeporte-3')
    itemDiario.children[0].style.background = colorPrimaryLight
    itemDiario.style.fontWeight = 'bold'
    itemHorasPracticadasDia.style.display = 'block'
    itemDiario.onclick = function(e) {
        itemDiario.children[0].style.background = colorPrimaryLight
        itemDiario.style.fontWeight = 'bold'
        itemMensual.children[0].style.background = '#fff'
        itemMensual.style.fontWeight = 'normal'
        itemSemanal.children[0].style.background = '#fff'
        itemSemanal.style.fontWeight = 'normal'
        itemHorasPracticadasDia.style.display = 'block'
        itemHorasPracticadasSemana.style.display = 'none'
        itemHorasPracticadasMes.style.display = 'none'
    }
    itemSemanal.onclick = function(e) {
        itemDiario.children[0].style.background = '#fff'
        itemDiario.style.fontWeight = 'normal'
        itemMensual.children[0].style.background = '#fff'
        itemMensual.style.fontWeight = 'normal'
        itemSemanal.children[0].style.background = colorPrimaryLight
        itemSemanal.style.fontWeight = 'bold'
        itemHorasPracticadasDia.style.display = 'none'
        itemHorasPracticadasSemana.style.display = 'block'
        itemHorasPracticadasMes.style.display = 'none'
    }
    itemMensual.onclick = function(e) {
        itemDiario.children[0].style.background = '#fff'
        itemDiario.style.fontWeight = 'normal'
        itemMensual.children[0].style.background = colorPrimaryLight
        itemMensual.style.fontWeight = 'bold'
        itemSemanal.children[0].style.background = '#fff'
        itemSemanal.style.fontWeight = 'normal'
        itemHorasPracticadasDia.style.display = 'none'
        itemHorasPracticadasSemana.style.display = 'none'
        itemHorasPracticadasMes.style.display = 'block'
    }
    moreOptionDeportesPracticados.appendChild(div)
}

// Cv Step 8 - Libros leidos
const addMoreOptionLibrosLeidos = [...document.querySelectorAll('.main-surveys.libros-leidos .option-survey .addMoreOptionsLibroLeido')]
addMoreOptionLibrosLeidos.map((el, index) => {
    el.addEventListener('click', (e) => {
        moreOptionsLibrosLeidosFunc()
    })
})
const moreOptionLibrosLeidos = document.querySelector('.main-surveys.libros-leidos')
function moreOptionsLibrosLeidosFunc() {
    let item = `
        <i class="material-icons icon-drag subtitle">drag_indicator</i>
        <div class="grid-inputs-2">
            <div class="col">
                <h4 class="subtitle normal"><strong>Título del libro</strong></h4>
                <div class="input-form user-data normal-my">
                    <label class="txt-field">
                        <span class="input-normal"></span>
                        <input type="text" name="nameValue" placeholder="Especificar título" />
                    </label>
                </div>
            </div>
            <div class="col">
                <h4 class="subtitle normal"><strong>Autor del libro</strong></h4>
                <div class="d-flex">
                    <div class="input-form user-data normal-my">
                        <label class="txt-field">
                            <span class="input-normal"></span>
                            <input type="text" name="nameValue" placeholder="Especifica autor" />
                        </label>
                    </div>
                    <div class="btn-light addMoreOptionsLibroLeido">
                        <i class="material-icons-outlined">add_circle_outline</i>
                    </div>
                    <div class="btn-pink" onclick="this.parentElement.parentElement.parentElement.parentElement.remove()">
                        <i class="material-icons-outlined">close</i>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex jcsb baseline fw-w">
            <div class="col">
                <h4 class="subtitle normal"><strong>¿Qué extraes de la lectura de éste libro?</strong></h4>
            </div>
            <div class="col">
                <h4 class="subtitle small">
                    max. 600 carácteres
                </h4>
            </div>
        </div>
        <div class="input-form user-data ads">
            <label class="txt-field">
                <textarea name="description" cols="30" rows="10"
                    placeholder="Añade información: tus impresiones acerca de la lectura del libro"></textarea>
            </label>
        </div>`
    let div = document.createElement('div')
    div.classList.add('option-survey', 'fisrt', 'block')
    div.innerHTML = item
    div.children[1].children[1].children[1].children[1].onclick = moreOptionsLibrosLeidosFunc
    moreOptionLibrosLeidos.appendChild(div)
}

// Cv Step 8 - Aficiones y Hobbies
const addMoreOptionAficionesHobbies = [...document.querySelectorAll('.main-surveys.aficiones-hobbies .option-survey .addMoreOptionsAficionesHobbies')]
addMoreOptionAficionesHobbies.map((el, index) => {
    el.addEventListener('click', (e) => {
        moreOptionsAficionesHobbiesFunc()
    })
})
const moreOptionAficionesHobbies = document.querySelector('.main-surveys.aficiones-hobbies')
function moreOptionsAficionesHobbiesFunc() {
    let item = `
    <i class="material-icons icon-drag subtitle">drag_indicator</i>
    <div>
        <h4 class="subtitle normal"><strong>Tipo de afición o hobbie</strong></h4>
        <div class="d-flex">
            <div class="input-form user-data group-my">
                <label class="txt-field">
                    <input placeholder="Especificar una afición o hobbie" type="text" name="linkVideoName" class="color-text" />
                </label>
            </div>
            <div class="btn-light addMoreOptionsAficionesHobbies">
                <i class="material-icons-outlined">add_circle_outline</i>
            </div>
            <div class="btn-pink" onclick="this.parentElement.parentElement.parentElement.remove()">
                <i class="material-icons-outlined">close</i>
            </div>
        </div>
    </div>
    <div class="grid-inputs-2">
        <div class="col">
            <h4 class="subtitle normal"><strong>Asiduidad en la práctica del deporte</strong></h4>
            <div class="radio-wrapper articles normal-my">
                <label for="asiduidadAficionHobbie-1" class="option asiduidadAficionHobbie-1">
                    <div class="dot"></div>
                    <span>Diaria</span>
                </label>
                <label for="asiduidadAficionHobbie-2" class="option asiduidadAficionHobbie-2">
                    <div class="dot"></div>
                    <span>Semanal</span>
                </label>
                <label for="asiduidadAficionHobbie-3" class="option asiduidadAficionHobbie-3">
                    <div class="dot"></div>
                    <span>Mensual</span>
                </label>
            </div>
        </div>
        <div class="col">
        <div class="yes-horasPracticadasPorSemanaAficionHobbie">
            <h4 class="subtitle normal"><strong>Horas practicadas por semana</strong></h4>
            <div class="input-form user-data normal-my">
                <label class="txt-field">
                    <span class="input-normal"></span>
                    <input type="number" name="fromDate" placeholder="Especificar horas" />
                </label>
            </div>
            </div>
            <div class="yes-horasPracticadasPorDiaAficionHobbie">
                <h4 class="subtitle normal"><strong>Horas practicadas por día</strong></h4>
                <div class="input-form user-data normal-my">
                    <label class="txt-field">
                        <span class="input-normal"></span>
                        <input type="number" name="fromDate" placeholder="Especificar horas" />
                    </label>
                </div>
            </div>
            <div class="yes-horasPracticadasPorMesAficionHobbie">
                <h4 class="subtitle normal"><strong>Horas practicadas por mes</strong></h4>
                <div class="input-form user-data normal-my">
                    <label class="txt-field">
                        <span class="input-normal"></span>
                        <input type="number" name="fromDate" placeholder="Especificar horas" />
                    </label>
                </div>
            </div>
        </div>
    </div>`
    let div = document.createElement('div')
    div.classList.add('option-survey', 'fisrt', 'block')
    div.innerHTML = item
    div.children[1].children[1].children[1].onclick = moreOptionsAficionesHobbiesFunc
    let itemHorasPracticadasSemana = div.querySelector('.grid-inputs-2 .yes-horasPracticadasPorSemanaAficionHobbie')
    let itemHorasPracticadasDia = div.querySelector('.grid-inputs-2 .yes-horasPracticadasPorDiaAficionHobbie')
    let itemHorasPracticadasMes = div.querySelector('.grid-inputs-2 .yes-horasPracticadasPorMesAficionHobbie')
    let itemDiario = div.querySelector('.grid-inputs-2 .asiduidadAficionHobbie-1')
    let itemSemanal = div.querySelector('.grid-inputs-2 .asiduidadAficionHobbie-2')
    let itemMensual = div.querySelector('.grid-inputs-2 .asiduidadAficionHobbie-3')
    itemDiario.children[0].style.background = colorPrimaryLight
    itemDiario.style.fontWeight = 'bold'
    itemHorasPracticadasDia.style.display = 'block'
    itemDiario.onclick = function(e) {
        itemDiario.children[0].style.background = colorPrimaryLight
        itemDiario.style.fontWeight = 'bold'
        itemMensual.children[0].style.background = '#fff'
        itemMensual.style.fontWeight = 'normal'
        itemSemanal.children[0].style.background = '#fff'
        itemSemanal.style.fontWeight = 'normal'
        itemHorasPracticadasDia.style.display = 'block'
        itemHorasPracticadasSemana.style.display = 'none'
        itemHorasPracticadasMes.style.display = 'none'
    }
    itemSemanal.onclick = function(e) {
        itemDiario.children[0].style.background = '#fff'
        itemDiario.style.fontWeight = 'normal'
        itemMensual.children[0].style.background = '#fff'
        itemMensual.style.fontWeight = 'normal'
        itemSemanal.children[0].style.background = colorPrimaryLight
        itemSemanal.style.fontWeight = 'bold'
        itemHorasPracticadasDia.style.display = 'none'
        itemHorasPracticadasSemana.style.display = 'block'
        itemHorasPracticadasMes.style.display = 'none'
    }
    itemMensual.onclick = function(e) {
        itemDiario.children[0].style.background = '#fff'
        itemDiario.style.fontWeight = 'normal'
        itemMensual.children[0].style.background = colorPrimaryLight
        itemMensual.style.fontWeight = 'bold'
        itemSemanal.children[0].style.background = '#fff'
        itemSemanal.style.fontWeight = 'normal'
        itemHorasPracticadasDia.style.display = 'none'
        itemHorasPracticadasSemana.style.display = 'none'
        itemHorasPracticadasMes.style.display = 'block'
    }
    moreOptionAficionesHobbies.appendChild(div)
}

























new Sortable(mainSurveyAficionesHobbies, {
    animation: 150,
    ghostClass: 'blue-background-class'
})
new Sortable(mainSurveyDeportesPracticados, {
    animation: 150,
    ghostClass: 'blue-background-class'
})
new Sortable(mainSurveysFonts, {
    animation: 150,
    ghostClass: 'blue-background-class'
});
new Sortable(mainSurveysSurveys, {
    animation: 150,
    ghostClass: 'blue-background-class'
});
new Sortable(mainSurveyLibrosLeidos, {
    animation: 150,
    ghostClass: 'blue-background-class'
})


