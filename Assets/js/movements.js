// My Movements
console.log('My Movements')
const triggerMyMovements = document.querySelector('.trigger-my-movements')
const myMovements = document.querySelector('.my-movements')
triggerMyMovements.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.add('active')
    myMovements.style.display = 'block'
    myAds.style.display = 'none'
    postingAd.style.display = 'none'
    myPay.style.display = 'none'
    triggerMyPay.classList.remove('active')
    triggerMyAds.classList.remove('active')
})
// Tabs
const myMovementsTabs = document.querySelector('.my-movements .tabs-my-movements');
const itemTabsMyMovements = [...document.querySelectorAll('.my-movements .tabs-my-movements .tab-trigger-my-movements')]
const itemsContentTabsMyMovements = [...document.querySelectorAll('.my-movements .tabs-content-my-movements .tab-item-my-movements')]
myMovementsTabs.addEventListener('click', (e) => {
    e.preventDefault();
    const markerTabsMyMovements = myMovementsTabs.children[0]
    itemTabsMyMovements.map((el, index) => {
        let offsetright = window.innerWidth - el.offsetLeft - el.offsetWidth
        const left = el.offsetLeft
        const width = el.clientWidth
        if (el.contains(e.target)) {
            markerTabsMyMovements.style.left = (left + 30) + 'px'
            markerTabsMyMovements.style.width = (width - 43) + 'px'
            itemsContentTabsMyMovements[index].style.display = 'block'
            el.classList.add('active')
        } else if (!el.contains(e.target)) {
            el.classList.remove('active')
            itemsContentTabsMyMovements[index].style.display = 'none'
        }
    })
})