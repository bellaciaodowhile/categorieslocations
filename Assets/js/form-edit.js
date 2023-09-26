console.log('Form-inputs & Visibility')
const inputsUserData = [...document.querySelectorAll('.user-data input')]
inputsUserData.map(el => {
    let span = el.parentElement.children[0]
    el.addEventListener('focus', (e) => {
        span.style.top = '-15px'
    })
    el.addEventListener('blur', (e) => {
        if (el.value.trim( ).length == 0) {
            span.style.top = '8px'
        } else {
            span.style.top = '-15px'
        }
    })
})
const mainCreateDirection = document.querySelector('.main-create-direction')
const mainMapDirection = document.querySelector('.main-map-direction')
const inputsLocation = [...document.querySelectorAll('.search-location input')]
inputsLocation.map(el => {
    let place = el.parentElement.parentElement.children[1].children[0]
    let label = el.parentElement
    let span = el.parentElement.children[0]
    let spanDirections = el.parentElement.querySelector('.directions')
    let locationTimeReal = el.parentElement.parentElement.children[2]
    let detectLocation = label.querySelector('.detect-location')
    
    place.addEventListener('click', (e) => {
        e.preventDefault();
        if (place.id == 'place') {
            mainMapDirection.style.display = 'flex'
            mainCreateDirection.style.display = 'none'
        }
    })
    
    el.addEventListener('keyup', (e) => {
        
        if (el.value.length >= 2) {
            label.style.marginBottom = '0px'
            detectLocation.style.display = 'none'
            label.style.borderColor = 'mediumvioletred'
        } else {
            label.style.marginBottom = '63px'
            detectLocation.style.display = 'flex'
            label.style.borderColor = 'mediumvioletred'
        }
    })
    
    el.addEventListener('focus', (e) => {
        if (el.value.length >= 2) {
            label.style.borderColor = 'mediumvioletred'
            locationTimeReal.style.display = 'block'
        } else {
            detectLocation.style.display = 'flex'
        }
    })
    el.addEventListener('focusout', (e) => {
        detectLocation.style.display = 'none'
        label.style.marginBottom = '0px'
        locationTimeReal.style.display = 'none'
    })
    
    if (spanDirections != null) {
        spanDirections.style.top = '19px'
    }
    
    
    el.addEventListener('keyup', (e) => {
        
        locationTimeReal.innerHTML = ''
        const texto = el.value.toLowerCase()
        
        if (texto.length >= 2) {
            locationTimeReal.style.display = 'block'
            detectLocation.style.display = 'none'
            for (let location of dataLocations) {
                let place = location.location.toLowerCase()
                let loc = location.loc.toLowerCase()
                const placeFilter = place.replace(texto, `<strong>${ texto }</strong>`)
                const locFilter = loc.replace(texto, `<strong>${ texto }</strong>`)
                
                if (place.indexOf(texto) !== -1 || loc.indexOf(texto) !== -1) {
                    locationTimeReal.innerHTML += `
                    <div class="item-location" onclick="dataMap('${location.location}', '${location.loc}')">
                    <div class="title" style="text-transform: capitalize;">
                    ${ placeFilter }
                    </div>
                    <div class="subtitle">
                    <i class="material-icons-outlined">place</i>
                    <div class="text" style="text-transform: capitalize;">
                    ${ locFilter }
                    </div>
                    </div>
                    </div>`
                } 
            }
            
            if (locationTimeReal.innerHTML === '') {
                locationTimeReal.innerHTML = `
                <div class="item-location">
                <div class="title" style="text-transform: capitalize;">
                No se encuetran resultados
                </div>
                </div>`
            }
        } else {
            detectLocation.style.display = 'flex'
            locationTimeReal.style.display = 'none'
        }
    })
    
    el.addEventListener('focus', (e) => {
        
        if (el.value.length >= 2) {
            label.style.borderColor = 'mediumvioletred'
        } else {
            span.style.top = '-15px'
            label.style.marginBottom = '63px'
            label.style.borderColor = 'mediumvioletred'
            detectLocation.style.display = 'flex'
        }
    })
    el.addEventListener('blur', (e) => {
        if (el.value.trim( ).length == 0) {
            span.style.top = '19px'
            label.style.marginBottom = '0px'
            label.style.borderColor = 'silver'
        } else {
            span.style.top = '-15px'
            label.style.marginBottom = '0px'
            label.style.borderColor = 'silver'
        }
    })
});



const mainEditUser = [...document.querySelectorAll('.modal-form')];
mainEditUser.map(el => {
    const personalData = el.parentElement.children[0]
    const personalDataContent = el.parentElement.querySelector('.personal-data')
    const close = el.parentElement.children[0].querySelector('.close-modal-form')
    
    el.addEventListener('click', (e) => {
        e.preventDefault()
        personalData.style.display = 'flex'
    })
    personalData.addEventListener('click', (e) => {
        if (!personalDataContent.contains(e.target)) {
            personalData.style.display = 'none'
        } else if (close.contains(e.target)) {
            personalData.style.display = 'none'
        }
    })
})