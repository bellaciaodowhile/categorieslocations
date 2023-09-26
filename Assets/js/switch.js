console.log('Switch')
const switchs = [...document.querySelectorAll('.switch-main-gj8 .switch-gj8')];
switchs.map(x => {
    x.addEventListener('click', (e) => {
        e.preventDefault();
        x.classList.toggle('off')
    });
})