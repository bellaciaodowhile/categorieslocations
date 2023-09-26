let sliderGloobal = [...document.querySelectorAll('.slider-range')]

    // sliderValue = document.querySelector('.slider-value');
    sliderGloobal.map(el => {
        el.oninput = function(e) {
            showValue(e.target);
          }
          
          function showValue(e) {  
            let context = e.parentElement.children[1].attributes[1].textContent
            el.parentElement.children[1].innerHTML = el.value + ' ' + context;
            var sliderPosition = ( el.value / el.max )
            
            if(el.value === el.min) {
              el.parentElement.children[1].style.left = ((sliderPosition * 100)  + 2 ) + "%";
            }
            else if ( el.value === el.max) {
              el.parentElement.children[1].style.left =  ((sliderPosition * 100) - 2 ) + "%";
            } 
            else {
              el.parentElement.children[1].style.left = ((sliderPosition * 100)) + "%";
            }
          }
    })
    

