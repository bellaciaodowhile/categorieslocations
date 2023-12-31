const subtabsGj8 = [...document.querySelectorAll('.main-parent-subtabs-gj8')];
subtabsGj8.map((main, index) => {
    let mainTabsSubtabs = [...main.querySelectorAll('.tab-trigger-subtabs-gj8')];
    let contentTabsSubtabs = [...main.querySelectorAll('.tab-content-subtabs-gj8')];
    mainTabsSubtabs.map((tabTrigger, iTrigger) => {
        tabTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            contentTabsSubtabs.map((content, iContent) => {
                if (iContent == iTrigger) {
                    content.style.display = 'block'
                    mainTabsSubtabs[iContent].classList.add('active')
                } else {
                    content.style.display = 'none'
                    mainTabsSubtabs[iContent].classList.remove('active')
                }
            });
        });
    });
});