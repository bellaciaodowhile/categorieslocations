console.log('App.js')

// Helpers
const hideSection = (el) => {
  document.addEventListener('mouseup', function(e) {
    let section = el;
    if (!section.contains(e.target)) {
      section.classList.add('none');
    }
  });
}
const inputsAll = [...document.querySelectorAll('input')]
inputsAll.map(el => {
  el.autocomplete = 'off'
})

// Alerts
const alerts = [...document.querySelectorAll('.alert-g')]
alerts.map(el => {
  const close = el.children[0]
  close.addEventListener('click', (e) => {
    e.preventDefault()
    el.style.display = 'none'
  })
})

// Eliminando acentos
function removeAccents(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

const colorText = 'var(--color-text)';
const colorPrimary = '#2e8b57';
const colorPrimaryLight = 'var(--color-primary-light)';
const colorSecondary = '#555';
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo img')
const logoMobile = document.querySelector('.logo img.nav-logo-mobile')

const burguer = document.querySelector('.burguer div')
const iconsNav = [...document.querySelectorAll('nav .items .item i')]
const language = document.querySelector('.item .language')
const languageSpan = [...document.querySelectorAll('.item .language span')]
let prevScrollpos = document.body.scrollTop;

const changeColorNav = () => {
  let currentScrollPos = document.body.scrollTop;
  if (currentScrollPos <= 2) {
    if (window.innerWidth < 917) {
      logoMobile.setAttribute('src', BASE_URL + 'Assets/img/app/gloobal-jardins-logo.png')
    } else {
      logo.setAttribute('src', BASE_URL + 'Assets/img/app/logo-dark.png')
    }
    nav.style.background = '#fff'
    burguer.style.background = colorPrimary
    burguer.style.setProperty('--color-primary', colorPrimary);
    iconsNav.map(icon => icon.style.color = colorSecondary)
    language.style.border = '2px solid ' + colorSecondary;
    language.style.color = colorSecondary
    languageSpan.map((el) => {
      el.style.setProperty('--icon-language', '#fff')
    })
    // document.body.style.padding = '167px 0 0 0'

  } else if (prevScrollpos > currentScrollPos) {
    if (window.innerWidth < 917) {
      logoMobile.setAttribute('src', BASE_URL + 'Assets/img/app/gloobal-jardins-logo-light.png')
    } else {
      logo.setAttribute('src', BASE_URL + 'Assets/img/app/logo-light.png')
    }
    nav.style.background = colorPrimary + 'e8'
    burguer.style.background = '#fff'
    burguer.style.setProperty('--color-primary', '#fff');
    iconsNav.map(icon => icon.style.color = '#fff')
    language.style.border = '2px solid #fff';
    language.style.color = '#fff'
    languageSpan.map((el) => {
      el.style.setProperty('--icon-language', '#2e8b57e8')
    })
    document.querySelector("header").style.top = "0";
    // document.body.style.padding = '167px 0 0 0'
    
  } else  {
    if (window.innerWidth < 917) {
      logoMobile.setAttribute('src', BASE_URL + 'Assets/img/app/gloobal-jardins-logo.png')
    } else {
      logo.setAttribute('src', BASE_URL + 'Assets/img/app/logo-dark.png')
    }
    nav.style.background = '#fff'
    burguer.style.background = colorPrimary
    burguer.style.setProperty('--color-primary', colorPrimary);
    iconsNav.map(icon => icon.style.color = colorSecondary)
    language.style.border = '2px solid ' + colorSecondary;
    language.style.color = colorSecondary
    languageSpan.map((el) => {
      el.style.setProperty('--icon-language', '#fff')
    })
    document.querySelector("header").style.top = "-167px";
    // document.body.style.padding = '0 0 0 0'

  }
  prevScrollpos = currentScrollPos;
}

// Hide Login - Register
const hideLoginRegister = (e) => {
  if (window.innerWidth > 499 && document.body.scrollTop > 0) {
    loginRegister.style.display = 'none';
  }
  
}
document.body.addEventListener('scroll', function() { 
  changeColorNav();
  hideLoginRegister() 
}); 


// * Trayendo categorías 
function getCategoriesTabs(idParent = 'base') {

  async function getCategoriesTabs() {
    const res = await fetch(BASE_URL + 'Filter/getCategoriesTabs/' + idParent);
    const req = await res.json();
    return req;
  }

  getCategoriesTabs().then(res => {
    console.log(res)
    let categoriesTabs = document.querySelector('#categories__tabs');
    categoriesTabs.innerHTML = ''
    res.map((item, index) => {
      categoriesTabs.innerHTML += /* html */ `
      <li class="tab-yt ${index == 0 ? 'active' : ''}">${ item.nombre }</li>`
    })
    // * Tabs menu
    const wrapperTabs = document.querySelector('.wrapper-yt')
    wrapperTabs.addEventListener('wheel', (e) => {
      e.preventDefault();
      wrapperTabs.scrollLeft += e.deltaY;
    });
    const sectionYt = document.querySelector('section .yt')
    const tabsBox = document.querySelector(".tabs-box-yt"),
    allTabs = tabsBox.querySelectorAll(".tab-yt"),
    arrowIcons = document.querySelectorAll(".icon-yt i");
    let isDragging = false;
    const handleIcons = (scrollVal) => {
      let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
      arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
      arrowIcons[1].parentElement.style.display =
      maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
    };
    arrowIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        let scrollWidth = (tabsBox.scrollLeft += icon.id === "left" ? -340 : 340);
        handleIcons(scrollWidth);
      });
    });
    allTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
      });
    });
    const dragging = (e) => {
      if (!isDragging) return;
      tabsBox.classList.add("dragging");
      tabsBox.scrollLeft -= e.movementX;
      handleIcons(tabsBox.scrollLeft);
    };
    const dragStop = () => {
      isDragging = false;
      tabsBox.classList.remove("dragging");
    };
    tabsBox.addEventListener("mousedown", () => (isDragging = true));
    tabsBox.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
  }) 
  

}
getCategoriesTabs()

















// Sidebar
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')
const showSidebar = document.querySelector('.burguer')
const hideSidebar = [document.querySelector('.sidebar .logo .menu'), overlay]
showSidebar.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.style.display = 'block'
  sidebar.style.left = 0
  document.body.style.overflow = 'none'
  loginRegister.classList.add('none')
})
hideSidebar.map(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'none'
    sidebar.style.left = '-300px'
    document.body.style.overflow = 'scroll'
  })
})

// Expand more and less - content sidebar
const mores = [...document.querySelectorAll('.more')]
mores.map(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const son = el.parentElement.children[3] // Este valor se cambiará en caso de que no sea el item 4 en el bloque
    let icon = el.children[0].children[0]
    let text = el.children[1]
    if (icon.textContent === 'expand_more') {
      icon.textContent = 'expand_less'
      text.textContent = 'Mostrar menos'
      son.style.display = 'block'
    } else {
      icon.textContent = 'expand_more'
      text.textContent = 'Mostrar más'
      son.style.display = 'none'
    }
  })
})

// Form
const inputs = document.querySelectorAll(".container-login input");
inputs.forEach((input) => {
  input.onfocus = () => {
    input.previousElementSibling.classList.add("top");
    input.previousElementSibling.classList.add("focus");
    input.parentNode.classList.add("focus");
  };
  input.onblur = () => {
    input.value = input.value.trim();
    if (input.value.trim().length == 0) {
      input.previousElementSibling.classList.remove("top");
    }
    input.previousElementSibling.classList.remove("focus");
    input.parentNode.classList.remove("focus");
  };
});

function openTab(evt, loginRegister) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(loginRegister).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// ---- Trigger´s Nav 
// User
let loginRegisterTrigger = document.querySelector('.login-register-trigger')
let loginRegister = document.querySelector('.login-register')
let btnCloseLoginRegister = document.querySelector('.close-login-register')
document.addEventListener('click', function(e) {
  const trigger = loginRegisterTrigger;
  const container = loginRegister;
  const close = btnCloseLoginRegister
  if (trigger.contains(e.target)) {
    // Button
    if (loginRegister.style.display === "none" || loginRegister.style.display === '') {
      loginRegister.style.display = "block"
    } else {
      loginRegister.style.display = "none"
    }
  } else if (container.contains(e.target)){
    if (close.contains(e.target)) {
      loginRegister.style.display = "none"
    }
  } else  {
    loginRegister.style.display = "none"
  }
});


// ---- Search nav 
const searchBoxMain = document.querySelector('.search-box-main')
const triggerSearch = document.querySelector('.magnifying-glass')
// Tabs filters
const tabOne = document.querySelector('.tab.one')
const tabTwo = document.querySelector('.tab.two')
tabOne.children[0].style.opacity = 1
// Tabs content
const tabContentOne = document.querySelector('.tabs-content .tab.one')
const tabContentTwo = document.querySelector('.tabs-content .tab.two')
// Trigger Filters Expand More
const expandMoreFilter = document.querySelector('.search-box-main .select')
const boxFilters = document.querySelector('.box-filters')
// Checkboxs Trigger
const allTrigger = document.querySelector('.checkbox.all')
const categoryTrigger = document.querySelector('.checkbox.category')
const subCategoryTrigger = document.querySelector('.checkbox.sub-category')
// Checkboxs Content
const allContent = document.querySelector('.checkboxs-content .all')
const categoryContent = document.querySelector('.checkboxs-content .category')
const subCategoryContent = document.querySelector('.checkboxs-content .sub-category')
// Close Search Main
const closeSearchMain = document.querySelector('.search i.search')
// ExpandItems
// Expand item filters 

// Document click SEARCH
document.addEventListener('click', (e) => {
  if (triggerSearch.contains(e.target)) {
    searchBoxMain.style.display = 'flex'
  } else if (expandMoreFilter.contains(e.target)) {
    if (boxFilters.style.display === '' || boxFilters.style.display === 'none') {
      boxFilters.style.display = 'block'
      expandMoreFilter.children[1].textContent = 'expand_less'
    } else {
      boxFilters.style.display = 'none'
      expandMoreFilter.children[1].textContent = 'expand_more'
    }
  } else if (allTrigger.contains(e.target)) {
    allContent.style.display = 'block'
    categoryContent.style.display = 'none'
    subCategoryContent.style.display = 'none'
    allTrigger.children[0].classList.add('active')
    categoryTrigger.children[0].classList.remove('active')
    subCategoryTrigger.children[0].classList.remove('active')
  } else if (categoryTrigger.contains(e.target)) {
    allContent.style.display = 'none'
    categoryContent.style.display = 'block'
    subCategoryContent.style.display = 'none'
    allTrigger.children[0].classList.remove('active')
    categoryTrigger.children[0].classList.add('active')
    subCategoryTrigger.children[0].classList.remove('active')
  } else if (subCategoryTrigger.contains(e.target)) {
    allContent.style.display = 'none'
    categoryContent.style.display = 'none'
    subCategoryContent.style.display = 'block'
    allTrigger.children[0].classList.remove('active')
    categoryTrigger.children[0].classList.remove('active')
    subCategoryTrigger.children[0].classList.add('active')
  } else if (closeSearchMain.contains(e.target)) {
    boxFilters.style.display = 'none'
    searchBoxMain.style.display = 'none'
  } else if (searchBoxMain.contains(e.target)) {
    if (tabOne.contains(e.target)) {
      tabOne.classList.add('active')
      tabOne.children[0].style.opacity = 1
      tabContentOne.classList.add('active')
      tabTwo.classList.remove('active')
      tabContentTwo.classList.remove('active')
      tabTwo.children[0].style.opacity = 0
    } else if (tabTwo.contains(e.target)) {
      tabTwo.classList.add('active')
      tabTwo.children[0].style.opacity = 1
      tabContentTwo.classList.add('active')
      tabOne.classList.remove('active')
      tabContentOne.classList.remove('active')
      tabOne.children[0].style.opacity = 0
    }
  } else {
    boxFilters.style.display = 'none'
    searchBoxMain.style.display = 'none'
  }  
});

// ---- Searchs real time 
// All
const inputSearch = document.querySelector('.tabs-content .input-search')
const categoryFilters = dataFilters[0].category
const subCategoryFilters = dataFilters[0].subCategory
const allFilters = categoryFilters.concat(subCategoryFilters);
const changeStatus = (s) => {
  return s = false
}
function filtering() {
  allContent.innerHTML = ''
  categoryContent.innerHTML = ''
  subCategoryContent.innerHTML = ''
  // Search All Content
  for (i = 0; i < allFilters.length; i++) {
    const more = allFilters[i].more
    const name = allFilters[i].name.toLowerCase()
    const category = allFilters[i].category.toLowerCase()
    const content = allFilters[i].content 
    const filter = inputSearch.value.toLowerCase()
    if (name.indexOf(filter) > -1 || category.indexOf(filter) > -1) {
      allContent.innerHTML += `
      <div class="item">
      <div class="d-flex">
      <label class="checkbox-container"> ${ name }
      <input class="done" type="checkbox">
      <div class="checkmark">
      <i class="material-icons">done</i>
      </div>
      </label>
      <label class="checkbox-container" style="display: ${more == 'true' ? 'block' : 'none' }">
      <input class="expand" type="checkbox">
      <div class="checkmark-expand">
      <i class="material-icons">expand_more</i>
      </div>
      </label>
      </div>
      <div class="item-category">
      ${ category }
      </div>
      <div class="sub-content">
      ${ content }
      </div>
      </div>`
    }
  }
  // Search Category Content
  for (i = 0; i < categoryFilters.length; i++) {
    const more = categoryFilters[i].more
    const name = categoryFilters[i].name.toLowerCase()
    const category = categoryFilters[i].category.toLowerCase()
    const content = categoryFilters[i].content 
    const filter = inputSearch.value.toLowerCase()
    if (name.indexOf(filter) > -1 || category.indexOf(filter) > -1) {
      categoryContent.innerHTML += `
      <div class="item">
      <div class="d-flex">
      <label class="checkbox-container"> ${ name }
      <input class="done" type="checkbox">
      <div class="checkmark">
      <i class="material-icons">done</i>
      </div>
      </label>
      <label class="checkbox-container" style="display: ${more == 'true' ? 'block' : 'none' }">
      <input class="expand" type="checkbox">
      <div class="checkmark-expand">
      <i class="material-icons">expand_more</i>
      </div>
      </label>
      </div>
      <div class="item-category">
      ${ category }
      </div>
      <div class="sub-content">
      ${ content }
      </div>
      </div>`
    }
  }
  // Search SubCategory Content
  for (i = 0; i < subCategoryFilters.length; i++) {
    const more = subCategoryFilters[i].more
    const name = subCategoryFilters[i].name.toLowerCase()
    const category = subCategoryFilters[i].category.toLowerCase()
    const content = subCategoryFilters[i].content 
    const filter = inputSearch.value.toLowerCase()
    if (name.indexOf(filter) > -1 || category.indexOf(filter) > -1) {
      // if (subCategoryContent.style.display == '' || subCategoryContent.style.display == 'block') {
      subCategoryContent.innerHTML += `
      <div class="item">
      <div class="d-flex">
      <label class="checkbox-container"> ${ name }
      <input class="done" type="checkbox">
      <div class="checkmark">
      <i class="material-icons">done</i>
      </div>
      </label>
      <label class="checkbox-container" style="display: ${more == 'true' ? 'block' : 'none' }">
      <input class="expand" type="checkbox">
      <div class="checkmark-expand">
      <i class="material-icons">expand_more</i>
      </div>
      </label>
      </div>
      <div class="item-category">
      ${ category }
      </div>
      <div class="sub-content">
      ${ content }
      </div>
      </div>`
      //  }
    }
  }
  // Search All Content
  if (allContent.style.display == '' || allContent.style.display == 'block') {
    if (allContent.innerHTML === '') {
      allContent.innerHTML = `
      <div class="item">
      <div class="text">
      No hay resultados disponibles
      </div>
      </div>`
    }
  }
  //  Search Category Content
  if (categoryContent.style.display == '' || categoryContent.style.display == 'block') {
    if (categoryContent.innerHTML === '') {
      categoryContent.innerHTML = `
      <div class="item">
      <div class="text">
      No hay categorías disponibles...
      </div>
      </div>`
    }
  }
  //  Search SubCategory Content
  if (subCategoryContent.style.display == '' || subCategoryContent.style.display == 'block') {
    if (subCategoryContent.innerHTML === '') {
      subCategoryContent.innerHTML = `
      <div class="item">
      <div class="text">
      No hay sub-categorías disponibles...
      </div>
      </div>`
    }
  }
  const expandTriggerItems = [...document.querySelectorAll('.checkmark-expand')]
  expandTriggerItems.map(el => {
    el.addEventListener('click', (e) => {
      const subContentItem = el.parentElement.parentElement.parentElement.children[2]
      if (subContentItem.style.display == '' || subContentItem.style.display == 'none') {
        subContentItem.style.display = 'block'
        el.children[0].textContent = 'expand_less'  
      } else {
        el.children[0].textContent = 'expand_more'  
        subContentItem.style.display = 'none'
      }
    })
  })
}
inputSearch.addEventListener('keyup', filtering)
filtering()


// Languages Box Main
const languageTriggerMain = document.querySelector('.language-trigger')
const languageBoxMain = document.querySelector('.language-box-main')
const languageCurrent = document.querySelector('.language-trigger .language')
document.addEventListener('click', (e) => {
  if (languageTriggerMain.contains(e.target)){
    languageBoxMain.style.display = 'block'
  } else if (languageBoxMain.contains(e.target)) {
    if (languageBoxMain.children[1].contains(e.target)) {
      languageBoxMain.style.display = 'none'
      languageCurrent.innerHTML = 'FR  <span></span><span></span>'
    } else if (languageBoxMain.children[2].contains(e.target)) {
      languageBoxMain.style.display = 'none'
      languageCurrent.innerHTML = 'EN  <span></span><span></span>'
    } else if (languageBoxMain.children[3].contains(e.target)) {
      languageBoxMain.style.display = 'none'
      languageCurrent.innerHTML = 'ES  <span></span><span></span>'
    }
  } else  {
    languageBoxMain.style.display = 'none'
  }
})
// Dropdown Notifications
const triggerNotifications = document.querySelector('.trigger-notifications')
const notifications = document.querySelector('.notifications')
const closeNotifications = document.querySelector('.notifications .banner-notifications .close')
const bannerMessages = [...document.querySelectorAll('.banner-messages')]

document.addEventListener('click', (e) => {
  if (triggerNotifications.contains(e.target)) {
    notifications.style.right = 0
    overlay.style.display = 'block'
    document.body.style.overflow = 'hidden'
  } else if (closeNotifications.contains(e.target)) {
    notifications.style.right = '-370px' // Verificar el ancho del elemento notifications
    overlay.style.display = 'none'
  } else if (notifications.contains(e.target)){
    bannerMessages.map(el => {
      const contentBanner = el.parentElement.children[1]
      if (el.contains(e.target)) {
       if (contentBanner.style.display == '' || contentBanner.style.display == 'block') {
         contentBanner.style.display = 'none'
         el.children[0].children[2].textContent = 'expand_more'
       } else {
        contentBanner.style.display = 'block'
        el.children[0].children[2].textContent = 'expand_less'
       }
      } else if (contentBanner.contains(e.target)) {}
        else {
        contentBanner.style.display = 'none'
        el.children[0].children[2].textContent = 'expand_more'
      }
    })
  } else {
    notifications.style.right = '-370px' // Verificar el ancho del elemento notifications
  }
});





// ---- Validaciones
// Login
const formLogin = document.querySelector('.form-login')
document.addEventListener('DOMContentLoaded', (e) => {
  formLogin.addEventListener('submit', validationLogin)
})
const validationLogin = (e) => {
  e.preventDefault();
  const form = new FormData(formLogin)
  alert('Iniciando sesión...')
}




