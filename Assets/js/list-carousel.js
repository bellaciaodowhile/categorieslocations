

let sectionCarousel = [...document.querySelectorAll('#list-carousel')]
let isDraggingList = false;
sectionCarousel.map((el, index) => {
  let leftArrowCarousel = sectionCarousel[index].children[1].children[0].children[0]
  let tabsBoxList = sectionCarousel[index].children[1].children[1]
  let rightArrowCarousel = sectionCarousel[index].children[1].children[2].children[0]
  let arrowIconsList = [rightArrowCarousel, leftArrowCarousel];

  let handleIconsList = (scrollVal) => {
    let maxScrollableWidth = tabsBoxList.scrollWidth - tabsBoxList.clientWidth;
    leftArrowCarousel.parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
  };
  arrowIconsList.forEach((icon) => {
    icon.addEventListener("click", () => {
      let scrollWidth = (tabsBoxList.scrollLeft += icon.id === "left_list_carousel" ? -340 : 340);
      handleIconsList(scrollWidth);
    });
  });
  let draggingList = (e) => {
    if (!isDraggingList) return;
    tabsBoxList.classList.add("dragging");
    tabsBoxList.scrollLeft -= e.movementX;
    handleIconsList(tabsBoxList.scrollLeft);
  };
  let dragStopList = () => {
    isDraggingList = false;
    tabsBoxList.classList.remove("dragging");
  };
  tabsBoxList.addEventListener("mousedown", () => (isDraggingList = true));
  tabsBoxList.addEventListener("mousemove", draggingList);
  document.addEventListener("mouseup", dragStopList);
})

// - - - OPEN OPTIONS CARDS - - -
let moreVert = [...document.querySelectorAll('.tab-list-carousel .open-options-card')]
let modalSettingsMain = document.querySelector('.modal-settings-main')
let closeModalSettingsMain = document.querySelector('.close-modal-settings')
document.addEventListener('click', function(e) {   
  moreVert.map(el => {
    if (el.contains(e.target)) {
      modalSettingsMain.style.display = "flex"
    } else if (modalSettingsMain.contains(e.target)) {
      modalSettingsMain.style.display = "none"
    }
  })
})
let itemsSettingsCardList = document.querySelector('.modal-settings-main .items-settings')
dataSettingsListCard.map(el => {
  let item = `
  <a href="${ el.href }" class="item-modal-settings-card">
  <i class="${ el.materialIcons }">${ el.icon }</i> ${ el.name }
  </a>
  `
  itemsSettingsCardList.innerHTML += item 
})