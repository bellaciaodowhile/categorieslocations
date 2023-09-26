console.log('Menu User')

const slider = document.querySelector('.tabs-user-main .tabs-user-x');
const itemsSlider = [...document.querySelectorAll('.tabs-user-main .tabs-user-x li')]
const itemsContentSlider = [...document.querySelectorAll('.menu-user-content .tab')]
const markerBottom = document.querySelector('.tabs-user-main .tabs-user-x span.marker-bottom')
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1;
  slider.scrollLeft = scrollLeft - walk;
});




((e)=>{
  markerBottom.style.left = (itemsSlider[0].offsetLeft + 3 ) + 'px'
})();

slider.addEventListener('click', (e) => {
  itemsSlider.map((el, index) => {
    const left = el.offsetLeft
    const width = el.clientWidth 
    
    if (el.contains(e.target)) {
      markerBottom.style.left = (left + 3) + 'px'
      markerBottom.style.width = (width - 3) + 'px'
      // Content Tab
      itemsContentSlider[index].style.display = 'block'
    } else {
      itemsContentSlider[index].style.display = 'none'
    } 
   })
})
slider.addEventListener("wheel", (e) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaY;
});