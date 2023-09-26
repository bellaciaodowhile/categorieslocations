console.log('Table List Show')

const tableGeneral = [...document.querySelectorAll('table.table-general')]

tableGeneral.map((el, indexTable) => {
  
  const allTh = el.children[0].children[0]
  const allTd = el.children[1]
  
  const total = allTh.childElementCount - 1
  const boxListItems = el.children[0].children[0].children[total]
  let checkboxs = boxListItems.children[1].children[0]
  const eyeTrigger = boxListItems.children[0] 
  const tBody = allTd.closest('tbody')
  const mainBox =  boxListItems.children[1] 
  // console.log(boxListItems.children[0])
  
  
  
  const richestPeople = [
    [
      [
        '1 Data',
        '1 Data',
        '1 Data',
        '1 Data',
        '1 Data',
        '1 Data',
        '1 Data',
        '1 Data'
      ],
      [
        '2 Data',
        '2 Data',
        '2 Data',
        '2 Data',
        '2 Data',
        '2 Data',
        '2 Data',
        '2 Data'
      ],
      [
        '3 Data',
        '3 Data',
        '3 Data',
        '3 Data',
        '3 Data',
        '3 Data',
        '3 Data',
        '3 Data'
      ],
      [
        '4 Data',
        '4 Data',
        '4 Data',
        '4 Data',
        '4 Data',
        '4 Data',
        '4 Data',
        '4 Data'
      ],
      [
        '5 Data',
        '5 Data',
        '5 Data',
        '5 Data',
        '5 Data',
        '5 Data',
        '5 Data',
        '5 Data'
      ],
      [
        '6 Data',
        '6 Data',
        '6 Data',
        '6 Data',
        '6 Data',
        '6 Data',
        '6 Data',
        '6 Data'
      ],
      [
        '7 Data',
        '7 Data',
        '7 Data',
        '7 Data',
        '7 Data',
        '7 Data',
        '7 Data',
        '7 Data'
      ],
      [
        '8 Data',
        '8 Data',
        '8 Data',
        '8 Data',
        '8 Data',
        '8 Data',
        '8 Data',
        '8 Data'
      ],
      [
        '9 Data',
        '9 Data',
        '9 Data',
        '9 Data',
        '9 Data',
        '9 Data',
        '9 Data',
        '9 Data'
      ],
      [
        '10 Data',
        '10 Data',
        '10 Data',
        '10 Data',
        '10 Data',
        '10 Data',
        '10 Data',
        '10 Data'
      ],
    ],
    [
      [
        '<label class="checkbox-table"> <input type="checkbox"> <span class="checkmark"></span> </label>',
        '1',
        '<div class="position-arrow"><div class="arrows"><i style="display: none"  class="material-icons-outlined">arrow_drop_up</i><i class="material-icons-outlined">arrow_drop_down</i></div> <div class="position">1</div> </div>',
        '1 Direction',
        '1 Direction',
        '1 Direction',
        '1 Direction',
        '1 Direction',
        '1 Direction',
        ` <div class="actions-table">
            <i class="material-icons">search</i>
            <i class="trigger-actions-table material-icons-outlined">more_vert</i>
            <div class="content-more-vert">
                <div class="item-more-vert">
                    <i class="material-icons-outlined">drive_file_rename_outline</i>
                    Editar
                </div>
                <div class="item-more-vert">
                    <i class="material-icons">public</i>
                    Ver
                </div>
                <div class="item-more-vert">
                    <i class="material-icons-outlined">account_tree</i>
                    Mover
                </div>
                <div class="item-more-vert">
                    <i class="material-icons">content_copy</i>
                    Duplicar
                </div>
                <div class="item-more-vert">
                    <i class="material-icons-outlined">delete</i>
                    Borrar
                </div>
            </div>
        </div>`,
        
      ],
      [
        '<label class="checkbox-table"> <input type="checkbox"> <span class="checkmark"></span> </label>',
        '2',
        '<div class="position-arrow"><div class="arrows"><i class="material-icons-outlined">arrow_drop_up</i><i class="material-icons-outlined">arrow_drop_down</i></div> <div class="position">2</div> </div>',
        '2 Direction',
        '2 Direction',
        '2 Direction',
        '2 Direction',
        '2 Direction',
        '2 Direction',
        ` <div class="actions-table">
            <i class="material-icons">search</i>
            <i class="trigger-actions-table material-icons-outlined">more_vert</i>
            <div class="content-more-vert">
                <div class="item-more-vert">
                    <i class="material-icons-outlined">drive_file_rename_outline</i>
                    Editar
                </div>
                <div class="item-more-vert">
                    <i class="material-icons">public</i>
                    Ver
                </div>
                <div class="item-more-vert">
                    <i class="material-icons-outlined">account_tree</i>
                    Mover
                </div>
                <div class="item-more-vert">
                    <i class="material-icons">content_copy</i>
                    Duplicar
                </div>
                <div class="item-more-vert">
                    <i class="material-icons-outlined">delete</i>
                    Borrar
                </div>
            </div>
        </div>`,
        
      ],
      [
        '<label class="checkbox-table"> <input type="checkbox"> <span class="checkmark"></span> </label>',
        '3',
        '<div class="position-arrow"><div class="arrows"><i class="material-icons-outlined">arrow_drop_up</i><i class="material-icons-outlined">arrow_drop_down</i></div> <div class="position">3</div> </div>',
        '3 Direction',
        '3 Direction',
        '3 Direction',
        '3 Direction',
        '3 Direction',
        '3 Direction',
        ` <div class="actions-table">
            <i class="material-icons">search</i>
            <i class="trigger-actions-table material-icons-outlined">more_vert</i>
            <div class="content-more-vert">
                <div class="item-more-vert">
                    <i class="material-icons-outlined">drive_file_rename_outline</i>
                    Editar
                </div>
                <div class="item-more-vert">
                    <i class="material-icons">public</i>
                    Ver
                </div>
                <div class="item-more-vert">
                    <i class="material-icons-outlined">account_tree</i>
                    Mover
                </div>
                <div class="item-more-vert">
                    <i class="material-icons">content_copy</i>
                    Duplicar
                </div>
                <div class="item-more-vert">
                    <i class="material-icons-outlined">delete</i>
                    Borrar
                </div>
            </div>
        </div>`,
        
      ],
      [
        '<label class="checkbox-table"> <input type="checkbox"> <span class="checkmark"></span> </label>',
        '4',
        '<div class="position-arrow"><div class="arrows"><i class="material-icons-outlined">arrow_drop_up</i><i class="material-icons-outlined">arrow_drop_down</i></div> <div class="position">4</div> </div>',
        '4 Direction',
        '4 Direction',
        '4 Direction',
        '4 Direction',
        '4 Direction',
        '4 Direction',
        ` <div class="actions-table">
            <i class="material-icons">search</i>
            <i class="trigger-actions-table material-icons-outlined">more_vert</i>
            <div class="content-more-vert">
                <div class="item-more-vert">
                    <i class="material-icons-outlined">drive_file_rename_outline</i>
                    Editar
                </div>
                <div class="item-more-vert">
                    <i class="material-icons">public</i>
                    Ver
                </div>
                <div class="item-more-vert">
                    <i class="material-icons-outlined">account_tree</i>
                    Mover
                </div>
                <div class="item-more-vert">
                    <i class="material-icons">content_copy</i>
                    Duplicar
                </div>
                <div class="item-more-vert">
                    <i class="material-icons-outlined">delete</i>
                    Borrar
                </div>
            </div>
        </div>`,
        
      ],
      [
        '<label class="checkbox-table"> <input type="checkbox"> <span class="checkmark"></span> </label>',
        '5',
        '<div class="position-arrow"><div class="arrows"><i class="material-icons-outlined">arrow_drop_up</i><i style="display: none" class="material-icons-outlined">arrow_drop_down</i></div> <div class="position">5</div> </div>',
        '5 Direction',
        '5 Direction',
        '5 Direction',
        '5 Direction',
        '5 Direction',
        '5 Direction',
        ` <div class="actions-table">
            <i class="material-icons">search</i>
            <i class="trigger-actions-table material-icons-outlined">more_vert</i>
            <div class="content-more-vert">
                <div class="item-more-vert">
                    <i class="material-icons-outlined">drive_file_rename_outline</i>
                    Editar
                </div>
                <div class="item-more-vert">
                    <i class="material-icons">public</i>
                    Ver
                </div>
                <div class="item-more-vert">
                    <i class="material-icons-outlined">account_tree</i>
                    Mover
                </div>
                <div class="item-more-vert">
                    <i class="material-icons">content_copy</i>
                    Duplicar
                </div>
                <div class="item-more-vert">
                    <i class="material-icons-outlined">delete</i>
                    Borrar
                </div>
            </div>
        </div>`,
        
      ],
    ]
    
  ];
  
    const listItems = [];
    let dragStartIndex;
    createList();
    
    function createList() {
      
      tBody.innerHTML = '';
      const data = [...richestPeople][indexTable]
      for (let index = 0; index < data.length; index++) {
        const listItem = document.createElement('tr');
        listItem.draggable = true
        listItem.setAttribute('data-index', index);
        listItem.classList.add('draggable')
        
        listItem.innerHTML = `
        <td > <i class="material-icons">drag_indicator</i> </td>
        <td style="display: ${data[index][0] == undefined ? 'none':''} " > ${ data[index][0] } </td>
        <td style="display: ${data[index][1] == undefined ? 'none':''} " > ${ data[index][1] } </td>
        <td style="display: ${data[index][2] == undefined ? 'none':''} " > ${ data[index][2] } </td>
        <td style="display: ${data[index][3] == undefined ? 'none':''} " > ${ data[index][3] } </td>
        <td style="display: ${data[index][4] == undefined ? 'none':''} " > ${ data[index][4] } </td>
        <td style="display: ${data[index][5] == undefined ? 'none':''} " > ${ data[index][5] } </td>
        <td style="display: ${data[index][6] == undefined ? 'none':''} " > ${ data[index][6] } </td>
        <td style="display: ${data[index][7] == undefined ? 'none':''} " > ${ data[index][7] } </td>
        <td style="display: ${data[index][8] == undefined ? 'none':''} " > ${ data[index][8] } </td>
        <td style="display: ${data[index][9] == undefined ? 'none':''} " > ${ data[index][9] } </td>
        <td style="display: ${data[index][10] == undefined ? 'none':''} " > ${ data[index][10] } </td>
        `;
        
        listItems.push(listItem);
        
        tBody.appendChild(listItem);
        
      }
      addEventListeners();    
    }












    // -----------  TRABAJANDO PAGINACIÓN -------------------------------------------------------------------------- 
    const dataRow = [...richestPeople][indexTable]
    let pageIndex = 0;
    let itemsPerPage = 5; // IMPORTANT!!!
    let totalPage = 2;
    
    let nextPage = el.parentElement.children[1].children[2].children[2]
    let prevPage = el.parentElement.children[1].children[2].children[1]
    
    // console.log(listItems[0])
    // Estoy iterando esto para colocar a los demas con display none y que muestree los 2 primeros segun la cantidad que quiere mostrar con display table-cell Pagination
    for (let i = pageIndex; i < dataRow.length; i++) {
      // console.log(listItems[i])
      // console.log(i)
      if (!(i < itemsPerPage)) {

        // console.log(listItems[i])
        listItems[i].style.display = 'none'

      }
    }
    
    let nextPrev = []
    // nextPage.addEventListener('click', (e) => {
    //   e.preventDefault();


      
    //   pageIndex = pageIndex + itemsPerPage
    //   totalPage = pageIndex + itemsPerPage
    //   changePagination(pageIndex, totalPage)
    //   console.log(pageIndex, totalPage)
    //   if (pageIndex == itemsPerPage) {
    //     nextPrev.push(pageIndex, totalPage)
    //   } else {
    //     // nextPrev.push()

    //     console.log(returnOne(), returnTwo())
    //   }
      
      
    // })
    
   
    
    // prevPage.addEventListener('click', (e) => {
    //   e.preventDefault();
      
    //   const firstLastValue = nextPrev[nextPrev.length - 1]
    //   const secondLastValue = nextPrev[nextPrev.length - 2]


    //   pageIndex = secondLastValue - itemsPerPage
    //   totalPage = firstLastValue - itemsPerPage
    //   changePagination(pageIndex, totalPage) 
    //   returnOne(pageIndex); returnTwo(totalPage);
    //   console.log(pageIndex, totalPage )
      
    // })





    function changePagination(from, to) {
  








      for (let index = from; index < dataRow.length; index++) {

        // if (Math.sign(to) == -1 || Math.sign(from) == -1) {

        //   console.log('No hacer nada')
        //   from = 0;
        //   to = itemsPerPage;
        //   // console.log(from,' - ',to)
        // } else {

        //   console.log('------------')
        //   if (index < to) {
        //     console.log(index, ' < ' ,to)
        //     // console.log(index, ' = Mostrar')
        //   } else {
        //     // console.log(index, ' = No mostrar')
        //     console.log(index, ' > ' ,to)

        //   }

        // }
        
      }

    }


    // ------------ FIN TRABAJANDO PAGINACIÓN -----------------------------------------------------------------------












    
    function dragStart() {
      dragStartIndex = +this.closest('tr').getAttribute('data-index');
    }
    
    function dragEnter() {
      this.classList.add('over');
    }
    
    function dragLeave() {
      this.classList.remove('over');
    }
    
    function dragOver(e) {
      e.preventDefault();
    }
    
    function dragDrop() {
      const dragEndIndex = +this.getAttribute('data-index');
      
      swapItems(dragStartIndex, dragEndIndex);  
      this.classList.remove('over');
      
    }
    
   if (indexTable == 0) {
    // Profile User
    function swapItems(fromIndex, toIndex) {
      const totalFields = listItems[fromIndex].children.length
      let htmlFromIndex = `<tr>
      <td > <i class="material-icons">drag_indicator</i> </td>`
      for (let i = 1; i < totalFields; i++) {
        let item = listItems[fromIndex].children[i].textContent.trim()
        htmlFromIndex += `
        <td style="display:${item == 'undefined' ? 'none':''}">${ item }</td>`
      }
      htmlFromIndex += `</tr>`
      
      let htmlToIndex = `<tr>
      <td > <i class="material-icons">drag_indicator</i> </td>`
      for (let i = 1; i < totalFields; i++) {
        let item = listItems[toIndex].children[i].textContent.trim()
        htmlToIndex += `
        <td style="display:${item == 'undefined' ? 'none':''}">${ item }</td>`
      }
      htmlToIndex += `</tr>`
      
      listItems[fromIndex].innerHTML = htmlToIndex;
      listItems[toIndex].innerHTML = htmlFromIndex;
      
    }
   } else {
    // Directions
    function swapItems(fromIndex, toIndex) {
      const totalFields = listItems[fromIndex].children.length
      let htmlFromIndex = `<tr>
      <td > <i class="material-icons">drag_indicator</i> </td>
      <td ><label class="checkbox-table"> <input type="checkbox"> <span class="checkmark"></span> </label></td>
      `
      for (let i = 2; i < totalFields; i++) {
        let item = listItems[fromIndex].children[i].textContent.trim()
       if (i != 10 || i != 3) {
        htmlFromIndex += `
        <td style="display:${item == 'undefined' ? 'none':''}">${ item }</td>`
       }
        // console.log(i)
        if (i == 3) {
          htmlFromIndex += `<td ><div class="position-arrow"><div class="arrows"><i class="material-icons-outlined">arrow_drop_up</i><i class="material-icons-outlined">arrow_drop_down</i></div> <div class="position">4</div> </div></td >`
        }
       if (i == 10) {
        htmlFromIndex += `<td ><div class="actions-table">
        <i class="material-icons">search</i>
        <i class="trigger-actions-table material-icons-outlined">more_vert</i>
        <div class="content-more-vert">
            <div class="item-more-vert">
                <i class="material-icons-outlined">drive_file_rename_outline</i>
                Editar
            </div>
            <div class="item-more-vert">
                <i class="material-icons">public</i>
                Ver
            </div>
            <div class="item-more-vert">
                <i class="material-icons-outlined">account_tree</i>
                Mover
            </div>
            <div class="item-more-vert">
                <i class="material-icons">content_copy</i>
                Duplicar
            </div>
            <div class="item-more-vert">
                <i class="material-icons-outlined">delete</i>
                Borrar
            </div>
        </div>
    </div></td>`
       }

      }
      htmlFromIndex += `</tr>`
      
      let htmlToIndex = `<tr>
      <td > <i class="material-icons">drag_indicator</i> </td>
      <td ><label class="checkbox-table"> <input type="checkbox"> <span class="checkmark"></span> </label></td>`
      for (let i = 2; i < totalFields; i++) {
        let item = listItems[toIndex].children[i].textContent.trim()
       if (i != 10 || i != 3) {
        htmlToIndex += `
        <td style="display:${item == 'undefined' ? 'none':''}">${ item }</td>`
       }
        if (i == 3) {
          htmlFromIndex += `<td ><div class="position-arrow"><div class="arrows"><i class="material-icons-outlined">arrow_drop_up</i><i class="material-icons-outlined">arrow_drop_down</i></div> <div class="position">4</div> </div></td >`
        }
        if (i == 10) {
          // console.log(itemHtml)
          htmlFromIndex += `<td><div class="actions-table">
          <i class="material-icons">search</i>
          <i class="trigger-actions-table material-icons-outlined">more_vert</i>
          <div class="content-more-vert">
              <div class="item-more-vert">
                  <i class="material-icons-outlined">drive_file_rename_outline</i>
                  Editar
              </div>
              <div class="item-more-vert">
                  <i class="material-icons">public</i>
                  Ver
              </div>
              <div class="item-more-vert">
                  <i class="material-icons-outlined">account_tree</i>
                  Mover
              </div>
              <div class="item-more-vert">
                  <i class="material-icons">content_copy</i>
                  Duplicar
              </div>
              <div class="item-more-vert">
                  <i class="material-icons-outlined">delete</i>
                  Borrar
              </div>
          </div>
      </div></td>`
         }
      }
      htmlToIndex += `</tr>`
      
      listItems[fromIndex].innerHTML = htmlToIndex;
      listItems[toIndex].innerHTML = htmlFromIndex;
      
    }
   }
    
    function addEventListeners() {
      const draggables = document.querySelectorAll('.draggable');
      const dragListItems = tBody.querySelectorAll('tr');
      
      draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
      });
      
      dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
      });
    }
    
    
    
    
    eyeTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (mainBox.style.display == '' || mainBox.style.display == 'none') {
        mainBox.style.display = 'flex'
      } else {
        mainBox.style.display = 'none'
      }
    })


    
    const positionTd = []
    
    for (let index = 0; index < total; index++) {
      
      let lastItemListShow = (total - 1);
      
      checkboxs.innerHTML += '<label class="container-box-list"> ' + allTh.children[index].textContent +'  <input type="checkbox" '+`${ index == lastItemListShow ? 'checked' : '' }`+' > <span class="checkmark"></span> </label>'
      
      const input = checkboxs.children[index].children[0]
      
      if (input.checked == true) {
        input.checked = false
        allTh.children[index].style.display = 'none'
        positionTd.push({
          index,
          show: false
        })
      } else {
        input.checked = true
        allTh.children[index].style.display = 'table-cell'
        positionTd.push({
          index,
          show: true
        })
      }
    }
    
    
    setTimeout(() => {
      for (let index = 0; index < total; index++) { 
        const label = checkboxs.children[index]
        const input = checkboxs.children[index].children[0]
        
        if (input.checked == true) {
          input.checked = false
          allTh.children[index].style.display = 'none'
          positionTd.push({
            index,
            show: false
          })
        } else {
          input.checked = true
          allTh.children[index].style.display = 'table-cell'
          positionTd.push({
            index,
            show: true
          })
        }
        
        label.onclick = (e) => {
          e.preventDefault();
          
          if (input.checked == true) {
            input.checked = false
            allTh.children[index].style.display = 'none'
            positionTd.push({
              index,
              show: false
            })
          } else {
            input.checked = true
            allTh.children[index].style.display = 'table-cell'
            positionTd.push({
              index,
              show: true
            })
          }
          positionColumn()
        }
      }
      positionColumn()
    }, 1000);
    
    
    const numberTr = el.children[1].childElementCount
    // console.log(numberTr)
    positionColumn()
    function positionColumn() {
      const position = positionTd[positionTd.length - 1]
      // console.log(position)
      // for (let index = 0; index < numberTr; index++) {
      //   const countTh = allTd.children[index].childElementCount
      //   for (let x = 0; x < countTh; x++) {
      //     const valueTd = allTd.children[index].children[x]
      //     // console.log(valueTd)
      //     if (x == position.index) {
      //       // console.log(x)
      //       if (position.show) {
      //         valueTd.style.display = 'table-cell'
      //       } else {
      //         valueTd.style.display = 'none'
      //       }
      //     }
      //   }
      //   // console.log(countTh)
      
      // }
    }
  
  
  
  
  
}) // end




