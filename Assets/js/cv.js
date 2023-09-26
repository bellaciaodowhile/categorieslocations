console.log('Curriculum Vitae')
// To Steps Cv
const blockActive = document.querySelector('.main-sidebar-cv .block-active')
const allBtnSteps = [...document.querySelectorAll('.posting-cv .step-trigger')]
const itemsSidebarCv = [...document.querySelectorAll('.main-sidebar-cv .item-sidebar-cv')]
allBtnSteps.map((el, index) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const step = el.getAttribute('step')
        const stepCurrentCv = document.querySelector('.posting-cv .step-cv-number')
        const stepCurrentName = document.querySelector('.posting-cv .current-step-name')
        const stepCurrentNames = step == '1' ? 'Datos personales' 
        :step == '2' ? 'Presentación personal' 
        :step == '3' ? 'Experiencia profesional'
        :step == '4' ? 'Formación academica reglada'
        :step == '5' ? 'Cursos adicionales'
        :step == '6' ? 'Idiomas'
        :step == '7' ? 'Disponibilidades'
        : 'Hobbies / Hábitos'

        if (step != null) {
            itemsSidebarCv.map(el => {
                if (el == itemsSidebarCv[step-1]) {
                    el.classList.add('active')
                    blockActive.style.top = (el.offsetTop + 2) + 'px'
                } else {
                    el.classList.remove('active')
                }
            })
            stepCurrentCv.innerHTML = step
            stepCurrentName.innerHTML = stepCurrentNames
            const barsCv = [...document.querySelectorAll('.posting-cv .bars-cv .bar')]
            for (let bar = 0; bar <= barsCv.length; bar++) {
                const lineBar = barsCv[bar-1]
                 if (lineBar != undefined) {
                    if (bar <= step) {
                        lineBar.classList.add('active')
                     } else {
                        lineBar.classList.remove('active')
                     }
                 }
            }
            allBtnSteps.map((x, i) => {
                if (x.getAttribute('step') == step) {
                    const stepContent = document.querySelector(`.posting-cv .step-${x.getAttribute('step')}`)
                    if (stepContent != null) {
                        stepContent.style.display = 'block'
                    }
                } else {
                    const stepContent = document.querySelector(`.posting-cv .step-${x.getAttribute('step')}`)
                    if (stepContent != null) {
                        stepContent.style.display = 'none'
                    }
                }
            })
        }
    })
})

// Direction PLace Step 3 
const directionPlaceStep3 = document.querySelector('.step-3 .item-expand-more .direction-place')
directionPlaceStep3.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Direction Place')
    const mainMapDirection = document.querySelector('.step-3 .main-map-direction')
    mainMapDirection.style.display = 'flex'
})

// Main Menu Cv
const containerCv = document.querySelector('.container-cv')
const btnMenutriggerCv = document.querySelector('.main-menu-cv .menu-trigger')
const sidebarCv = document.querySelector('.main-sidebar-cv')
const buttonsFixed = [...document.querySelectorAll('.buttons-fixed')]
btnMenutriggerCv.addEventListener('click', (e) => {
    e.preventDefault();
    if (sidebarCv.style.display == '' || sidebarCv.style.display == 'none') {
        sidebarCv.style.display = 'block'
        btnMenutriggerCv.children[0].textContent = 'close'
        containerCv.classList.add('sidebar-cv-active')
        buttonsFixed.map(el => {
            el.children[0].classList.add('active')
            el.querySelector('.sidebar-hidden-active').style.display = 'block'
        })
    } else {
        sidebarCv.style.display = 'none'
        btnMenutriggerCv.children[0].textContent = 'menu'
        containerCv.classList.remove('sidebar-cv-active')
        buttonsFixed.map(el => {
            el.children[0].classList.remove('active')
            el.querySelector('.sidebar-hidden-active').style.display = 'none'
        })
    }
})
const iconCloseSidebarResponsive = document.querySelector('.main-sidebar-cv .icon-close') 
iconCloseSidebarResponsive.addEventListener('click', (e) => {
    e.preventDefault()
    sidebarCv.style.display = 'none'
    btnMenutriggerCv.children[0].textContent = 'menu'
    containerCv.classList.remove('sidebar-cv-active')
    buttonsFixed.map(el => {
        el.children[0].classList.remove('active')
        el.querySelector('.sidebar-hidden-active').style.display = 'none'
    })
})
itemsSidebarCv.map((el, index) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        itemsSidebarCv.map((x, i) => {
            if (index == i) {
                el.classList.add('active')
                blockActive.style.top = (el.offsetTop + 2) + 'px'
            } else {
                x.classList.remove('active')
            }
        })
        
    })
})
// Tabs CV Settings
for (let i = 0; i < 8; i++) {
    const tabsSettingsItems = [...document.querySelectorAll(`.main-settings-step-${i + 1} .tab-settings-item`)]
    const tabsSettingsItemsContent = [...document.querySelectorAll(`.main-settings-step-${i + 1} .tab-content-settings`)]
    tabsSettingsItems.map((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            tabsSettingsItems.map((x, i) => {
                if (index == i) {
                    tabsSettingsItemsContent[i].style.display = 'block'
                    el.classList.add('active')
                } else {
                    tabsSettingsItemsContent[i].style.display = 'none'
                    x.classList.remove('active')
                }
            })
            
        
        })
    })
    // Hidden Settings Item
    let settingsItem = document.querySelector(`.main-settings-step-${i + 1} .settings-item`)
    let hiddenSettingsItem = document.querySelector(`.main-settings-step-${i + 1} .hidden-settings-item`)
    let mainSettingsDataPersonal = document.querySelector(`.main-settings-step-${i + 1} .main-settings-data-personal`)
    let settingsDataPersonalGeneral = [...document.querySelectorAll(`.settings-data-personal`)]
    hiddenSettingsItem.addEventListener('click', (e) => {
        e.preventDefault();
        settingsItem.style.display = 'none'
        containerCv.children[0].style.display = 'block'
        mainSettingsDataPersonal.style.display = 'none'
        settingsDataPersonalGeneral.map((el, index) => {
            el.style.display = 'block'
        })  
    })

    // Flash On Trigger 
    let flashOInTrigger = document.querySelector(`.main-settings-step-${i + 1} .flash-on-trigger-data-personal`)
    let flashOnTriggerTwo = document.querySelector(`.step-${i + 1} .flash-on-trigger-data-personal`)
    let flashOnData = [flashOInTrigger, flashOnTriggerTwo]
    flashOnData.map((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault(); 
            settingsItem.style.display = 'block'
            containerCv.children[0].style.display = 'none'
            mainSettingsDataPersonal.style.display = 'none'
        })
    })
    // Main Settings Data Personal
    let triggerSettingsDataPersonal = document.querySelector(`.main-settings-step-${i + 1} .trigger-settings-data-personal`)
    let triggerTwo = document.querySelector(`.step-${i + 1} .trigger-settings-data-personal`)
    let data = [triggerSettingsDataPersonal, triggerTwo]
    data.map((el, index) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            mainSettingsDataPersonal.style.display = 'block'
            if (index == 1) {
                el.innerHTML += ''
            }
            settingsDataPersonalGeneral.map((el, index) => {
                el.style.display = 'none'
            })  
        })
    })
    // Hidden Settings Data Personal
    let hiddenSettingsDataPersonal = document.querySelector(`.main-settings-step-${i + 1} .hidden-settings-data-personal`)
    hiddenSettingsDataPersonal.addEventListener('click', (e) => {
        e.preventDefault();
        containerCv.children[0].style.display = 'block'
        settingsDataPersonalGeneral.map((el, index) => {
            el.style.display = 'block'
        })  
        mainSettingsDataPersonal.style.display = 'none'
        settingsItem.style.display = 'none'
    })
}