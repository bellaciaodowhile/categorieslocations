console.log('Cv Validations')

// Validations CV Step 1
const switchsNormalOneCv = [...document.querySelectorAll('.list-settings-step .switch-normal')]
// const fieldsAllCV = [...document.querySelectorAll('.container-cv .field')]
// Arrays para validaciones dinámicas
let dinamicStep3Config = []
let dinamicStep4Config = []
let dinamicStep5Config = []
let dinamicStep6Config = []
switchsNormalOneCv.map((el, index) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const fieldSelect = [...document.querySelectorAll('.container-cv .field')].filter(field => {
            if (field.attributes.field.textContent == el.attributes.field.textContent) {
                if (field != undefined) return field
            }
        })
        
        if (el.querySelector('input').checked) {
            // Desactivado
            el.querySelector('input').checked = false
            if (fieldSelect[0].closest('.step-3')) {
                console.log('3 - 0')
                dinamicStep3Config.push({
                    field: fieldSelect[0].attributes.field.textContent,
                    isActive: '0'
                })
            }
            if (fieldSelect[0].closest('.step-4')) {
                console.log('4 - 0')
                dinamicStep4Config.push({
                    field: fieldSelect[0].attributes.field.textContent,
                    isActive: '0'
                })
            }
            if (fieldSelect[0].closest('.step-5')) {
                console.log('5 - 0')
                dinamicStep5Config.push({
                    field: fieldSelect[0].attributes.field.textContent,
                    isActive: '0'
                })
            }
            if (fieldSelect[0].closest('.step-6')) {
                console.log('6 - 0')
                dinamicStep6Config.push({
                    field: fieldSelect[0].attributes.field.textContent,
                    isActive: '0'
                })
            }
            fieldSelect.map(x => {
                x.style.display = 'none'
                x.setAttribute('isActive', '0')
            })
        } else {
            // Activado
            el.querySelector('input').checked = true
            fieldSelect.map(x => {
                x.style.display = 'block'
                x.setAttribute('isActive', '1')
            })
            if (fieldSelect[0].closest('.step-3')) {
                console.log('3 - 1')
                dinamicStep3Config.map(function(dato){
                    if(dato.field == fieldSelect[0].attributes.field.textContent){
                        dato.isActive = '1';
                    }
                    return dato;
                });
            }
            if (fieldSelect[0].closest('.step-4')) {
                console.log('4 - 1')
                dinamicStep4Config.map(function(dato){
                    if(dato.field == fieldSelect[0].attributes.field.textContent){
                        dato.isActive = '1';
                    }
                    return dato;
                });
            }
            if (fieldSelect[0].closest('.step-5')) {
                console.log('5 - 1')
                dinamicStep5Config.map(function(dato){
                    if(dato.field == fieldSelect[0].attributes.field.textContent){
                        dato.isActive = '1';
                    }
                    return dato;
                });
            }
            if (fieldSelect[0].closest('.step-6')) {
                console.log('6 - 1')
                dinamicStep6Config.map(function(dato){
                    if(dato.field == fieldSelect[0].attributes.field.textContent){
                        dato.isActive = '1';
                    }
                    return dato;
                });
            }
        }
        validationsArrStep3(dinamicStep3Config)
        validationsArrStep4(dinamicStep4Config)
        validationsArrStep5(dinamicStep5Config)
        validationsArrStep6(dinamicStep6Config)
        forValidationsArr()
    })
})

// Validations Inputs Text
let steps = [1, 3, 4, 5, 6, 7, 8]
function forValidationsArr() {
    steps.map((i, index) => {
        let valInputsTexts = [...document.querySelectorAll(`.val-input-text-${ i }`)]
        let emptys = valInputsTexts.filter(z => z.value == '')
        document.querySelector(`.cv-completed-${ i }`).style.display = 'none'
        document.querySelector(`.process-cv-${ i }`).style.display = 'block'
        document.querySelector(`.toasts-smalls-${ i }`).innerHTML = ''
        emptys.filter(f => {
            // console.log(f.closest('.field').attributes.isActive.nodeValue)
            if (f.closest('.field').attributes.isActive.nodeValue == '1') {
                document.querySelector(`.toasts-smalls-${ i }`).innerHTML += // html
                `<div class="toast-small">
                    <i class="material-icons-outlined mr-10">error_outline</i>
                    Añade: &nbsp;<strong>${ f.parentElement.parentElement.parentElement.children[0].textContent }</strong>&nbsp; en esta sección
                </div>`
            }
        })
        valInputsTexts.map(el => {
            let field = el.parentElement.parentElement.parentElement.children[0].textContent
            el.addEventListener('keyup', (e) => {
                // Si escribe
                document.querySelector(`.toasts-smalls-${ i }`).innerHTML = ''
                if (el.value.length >= 1) {
                    // let count = valInputsTexts.filter(z => z.value == '')
                    console.log(valInputsTexts.filter(z => z.value == '').length, ' Mayor a 1')
                    if (valInputsTexts.filter(z => z.value == '').length > 0) {
                        document.querySelector(`.cv-completed-${ i }`).style.display = 'none'
                        document.querySelector(`.process-cv-${ i }`).style.display = 'block'
                    } else {
                        document.querySelector(`.cv-completed-${ i }`).style.display = 'block'
                        document.querySelector(`.process-cv-${ i }`).style.display = 'none'
                    }
                    valInputsTexts.filter(z => {
                        console.log(z.closest('.field').attributes.isActive.nodeValue)
                        if (z.closest('.field').attributes.isActive.nodeValue == '1') {
                            if (z.value == '') {
                                document.querySelector(`.toasts-smalls-${ i }`).innerHTML += // html
                                `<div class="toast-small">
                                    <i class="material-icons-outlined mr-10">error_outline</i>
                                    Añade: &nbsp;<strong>${ z.parentElement.parentElement.parentElement.children[0].textContent }&nbsp;</strong> en los datos personales
                                </div>`
                            }
                        }
                    })
                } else {
                    // Si borra hasta 0
                    console.log(valInputsTexts.filter(z => z.value == '').length,' Menor a 1')
                    if (valInputsTexts.filter(z => z.value == '').length <= 0) {
                        document.querySelector(`.cv-completed-${ i }`).style.display = 'block'
                        document.querySelector(`.process-cv-${ i }`).style.display = 'none'
                    } else {
                        document.querySelector(`.cv-completed-${ i }`).style.display = 'none'
                        document.querySelector(`.process-cv-${ i }`).style.display = 'block'
                    }
                    valInputsTexts.filter(z => {
                        console.log(z.closest('.field').attributes.isActive.nodeValue)
                        if (z.closest('.field').attributes.isActive.nodeValue == '1') {
                            if (z.value == '') {
                                document.querySelector(`.toasts-smalls-${ i }`).innerHTML += // html
                                `<div class="toast-small">
                                    <i class="material-icons-outlined mr-10">error_outline</i>
                                    Añade: &nbsp;<strong>${ z.parentElement.parentElement.parentElement.children[0].textContent }&nbsp;</strong> en esta sección
                                </div>`
                            }
                        }
                    })
                }
    
            })
        })

    })
}
forValidationsArr()


// Validations Click 
function forValidationsClicksArr() {

    for (let i = 0; i < 1; i++) {
         let valInputsClicks = [...document.querySelectorAll(`.val-input-click-${ i + 1 }`)]
         let data = [];
         valInputsClicks.map((field, index) => {
            field.addEventListener('click', (e) => {
                e.preventDefault();
                data.push(field.attributes.field.textContent)
                dataNew()
            })
            document.querySelector(`.toasts-smalls-${ i + 1 }`).innerHTML += // html
            `<div class="toast-small ${field.attributes.field.textContent}">
                <i class="material-icons-outlined mr-10">error_outline</i>
                Añade: &nbsp;<strong>${ field.attributes.field.textContent }</strong>&nbsp; en esta seccción
            </div>`
         })
        function dataNew() {
            let newData = new Set(data)
            data = [...newData]
            data.map(x => {
                document.querySelector(`.toast-small.${ x }`).style.display = 'none'
            })
        }
        dataNew()
    }
}
forValidationsClicksArr()