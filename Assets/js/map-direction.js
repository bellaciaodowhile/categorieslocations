console.log('Map Directions')
const textLocation = mainMapDirection.querySelector('.location-map-direction')
const textLoc= mainMapDirection.querySelector('.loc-map-direction')
const closeMapDirection = document.querySelector('.footer-map .cancel')
const applyMapDirection = document.querySelector('.footer-map .apply')
const detectLocations = [...document.querySelectorAll('.detect-location')]
const timeRealLocations = [...document.querySelectorAll('.time-real-location')]

// console.log(detectLocations)
function dataMap(location, loc) {

}

closeMapDirection.addEventListener('click', (e) => {
    e.preventDefault()
    mainMapDirection.style.display = 'none'
    mainCreateDirection.style.display = 'flex'
})
applyMapDirection.addEventListener('click', (e) => {
    e.preventDefault()
    mainMapDirection.style.display = 'none'
    mainCreateDirection.style.display = 'flex'
    timeRealLocations.map((el, index) => {
        if (index == 0) {
            el.style.display = 'none'
        }
    })
})