let tabledataAdmin = [{
    id: '01',
    name: "Billy Bob",
    age: 12,
    gender: "masculino",
    height: 95,
    col: "active",
    dob: "14/05/2010"
},
{
    id: '02',
    name: "Ramon Velasquez",
    age: 42,
    gender: "femenino",
    height: 142,
    col: "inactive",
    dob: "30/07/1954"
},
{
    id: '03',
    name: "Steve McAlistaire",
    age: 35,
    gender: "masculino",
    height: 176,
    col: "active",
    dob: "04/11/1982"
},
{
    id: '04',
    name: "Billy Bob",
    age: 12,
    gender: "masculino",
    height: 95,
    col: "red",
    dob: "14/05/2010"
},
{
    id: '05',
    name: "Ramon Velasquez",
    age: 42,
    gender: "femenino",
    height: 142,
    col: "active",
    dob: "30/07/1954"
},
{
    id: '06',
    name: "Steve McAlistaire",
    age: 35,
    gender: "masculino",
    height: 176,
    col: "active",
    dob: "04/11/1982"
},
{
    id: '07',
    name: "Billy Bob",
    age: 12,
    gender: "masculino",
    height: 95,
    col: "active",
    dob: "14/05/2010"
},
{
    id: '08',
    name: "Ramon Velasquez",
    age: 42,
    gender: "femenino",
    height: 142,
    col: "inactive",
    dob: "30/07/1954"
},
{
    id: '09',
    name: "Steve McAlistaire",
    age: 35,
    gender: "masculino",
    height: 176,
    col: "inactive",
    dob: "04/11/1982"
},
{
    id: '10',
    name: "Billy Bob",
    age: 12,
    gender: "masculino",
    height: 95,
    col: "inactive",
    dob: "14/05/2010"
},
{
    id: '11',
    name: "Ramon Velasquez",
    age: 42,
    gender: "femenino",
    height: 142,
    col: "inactive",
    dob: "30/07/1954"
},
{
    id: '12',
    name: "Steve McAlistaire",
    age: 35,
    gender: "masculino",
    height: 176,
    col: "inactive",
    dob: "04/11/1982"
},
];
var rowMenu = [{
    label: "<i class='material-icons-outlined'>check_box</i> Change Name",
    action: function (e, row) {
        row.update({
            name: "Steve Bobberson"
        });
    }
},
{
    label: "<i class='fas fa-check-square'></i> Select Row",
    action: function (e, row) {
        row.select();
    }
},
{
    separator: true,
},
{
    label: "Admin Functions",
    menu: [{
            label: "<i class='fas fa-trash'></i> Delete Row",
            action: function (e, row) {
                row.delete();
            }
        },
        {
            label: "<i class='fas fa-ban'></i> Disabled Option",
            disabled: true,
        },
    ]
}
]
var headerMenu = function () {
var menu = [];
var columns = this.getColumns();

for (let column of columns) {

    let icon = document.createElement("i");
    icon.classList.add("material-icons-outlined");
    icon.textContent = (column.isVisible() ? "check_box" : "check_box_outline_blank");
    
    let label = document.createElement("span");
    let title = document.createElement("span");

    title.textContent = " " + column.getDefinition().title;

    label.appendChild(icon);
    label.appendChild(title);

    menu.push({
        label: label,
        action: function (e) {
            e.stopPropagation();

            column.toggle();

            if (column.isVisible()) {
                icon.textContent = 'check_box'
                icon.style.color = '#42b574'
            } else {
                icon.textContent = 'check_box_outline_blank'
                icon.style.color = '#737373'

            }
        }
    });
}

return menu;
};
var printIcon = function(cell, formatterParams, onRendered){ //plain text value
return /*html*/`
<i class="material-icons-outlined col-custom-icon">home</i>
`;
};
let tableAdmin = new Tabulator("#adminTable", {
data: tabledataAdmin,
layout: "fitColumns",
resizableColumnFit: false,
height: 'auto',
rowHeight: 40,
movableRows: true,
pagination: "local",
paginationSize: 6,
paginationSizeSelector: [3, 6, 8, 10],
locale: "en-gb",
langs: {
    "en-gb": {
        "pagination": {
            "page_title": 'Ver página',
            "page_size": 'Filas por página',
            "first": `<i class="material-icons-outlined">first_page</i>`,
            "first_title": 'Primera página',
            "last": `<i class="material-icons-outlined">last_page</i>`,
            "last_title": 'Última página',
            "prev": `<i class="material-icons-outlined">keyboard_arrow_left</i>`,
            "prev_title": 'Página anterior',
            "next": `<i class="material-icons-outlined">keyboard_arrow_right</i>`,
            "next_title": 'Siguiente',
        },
    }
},
popupContainer:"#modal-div",
rowFormatter: function (row) {
    let rowField = row.getElement();
    let cellCheckbox = rowField.children[0]
    let cellActions = rowField.children[rowField.childElementCount - 2]
    let colCustomCheckboxCellTitle = row._row.parent.renderer.elementHorizontal.querySelector('.tabulator-col.custom-checkbox-cell .tabulator-col-title')
    let icon = document.createElement('i')
    if (row._row.table.getSelectedRows().length == tabledataAdmin.length) {
        icon.style.display = 'none'
    }
    cellCheckbox.innerHTML = /* html */
    `<i class="material-icons-outlined checkbox"></i>`;
    icon.style.top = '0'
    colCustomCheckboxCellTitle.addEventListener('click', (e) => { 
        if (row._row.table.getSelectedRows().length >= 1) {
            colCustomCheckboxCellTitle.children[1].remove()
            row._row.table.deselectRow()
        }
    });
    cellCheckbox.onclick = () => {
        if ([...cellCheckbox.parentElement.classList][3] == 'tabulator-selected') {
            row.deselect();
        } else {
            row.select();
        }

        if (row._row.table.getSelectedRows().length >= 1) {
            if (colCustomCheckboxCellTitle.children[1] != undefined || colCustomCheckboxCellTitle.children[1] != null) {
                colCustomCheckboxCellTitle.children[1].remove()
            }
            icon.style.display = 'block'
            icon.style.color = '#737373'
            icon.style.position = 'absolute'
            icon.style.top = '0px'
            icon.style.left = '0px'
            icon.style.cursor = 'pointer'
            icon.classList.add('material-icons-outlined')
            icon.textContent = 'indeterminate_check_box'
            colCustomCheckboxCellTitle.appendChild(icon)
        } else {
            console.log('Nada')
            colCustomCheckboxCellTitle.children[1].remove()
        }

        if (row._row.table.getSelectedRows().length == tabledataAdmin.length) {
            colCustomCheckboxCellTitle.children[1].remove()
        }
    };
    cellActions.innerHTML = /* html */ 
    `<div class="actions-table">
        <i class="material-icons search-actions-table">search</i>
        <i class="trigger-actions-table material-icons-outlined">more_vert</i>
        <div class="content-more-vert">
            <div class="item-more-vert">
                <i class="material-icons">public</i>
            </div>
            <div class="item-more-vert">
                <i class="material-icons-outlined">account_tree</i>
            </div>
            <div class="item-more-vert">
                <i class="material-icons">content_copy</i>
            </div>
            <div class="item-more-vert">
                <i class="material-icons-outlined">delete</i>
            </div>
            <div class="item-more-vert close-content-actions">
                <i class="material-icons-outlined">close</i>
            </div>
        </div>
    </div>`
    let triggerCellActions = cellActions.querySelector('.trigger-actions-table')
    let closeContentActions = cellActions.querySelector('.close-content-actions')
    triggerCellActions.onclick = () => {
        if (cellActions.querySelector('.content-more-vert').style.display == '' || cellActions.querySelector('.content-more-vert').style.display == 'none') {
            cellActions.querySelector('.content-more-vert').style.display = 'flex'
        } else {
            cellActions.querySelector('.content-more-vert').style.display = 'none'
        }
    };
    closeContentActions.onclick = () => {
        cellActions.querySelector('.content-more-vert').style.display = 'none'
    }
},
columns: [{
        formatter: "rowSelection",
        titleFormatter: 'rowSelection',
        hozAlign: "left",
        headerSort: false,
        width: 50,
        cssClass: "custom-checkbox-cell",
        resizable: false,
    },
    {
        rowHandle: true,
        formatter: "handle",
        headerSort: false,
        width: 0,
        minWidth: 0,
        cssClass: 'cur-drag',
        resizable: false
    },
    {
        title: "#",
        field: "id",
        width: 70,
        minWidth: 70,
        editor: 'input',
        hozAlign: 'left',
        resizable: false,
        cssClass: 'custom-id',
        headerFilter:"input"
    },
    {
        title: "Name",
        field: "name",
        minWidth: 150,
        editor: 'input',
        resizable: true,
        headerMenu: headerMenu,
        headerFilter:"input"
    },
    {
        title: "Gender",
        field: "gender",
        minWidth: 100,
        editor: 'input',
        resizable: true,
        headerMenu: headerMenu,
        headerFilter:"input"

    },
    {
        title: "Rating",
        field: "rating",
        formatter: "star",
        formatterParams: {
            stars: 6
        },
        hozAlign: "left",
        minWidth: 120,
        editor: 'input',
        resizable: true,
        headerMenu: headerMenu,
        headerFilter:"input"
    },
    {
        title: "Favourite Color",
        field: "col",
        minWidth: 150, 
        editor: 'input',
        resizable: true,
        headerMenu: headerMenu,
        headerFilter:"input"
    },
    {
        title: "Date Of Birth",
        field: "dob",
        hozAlign: "left",
        minWidth: 150,
        editor: 'input',
        resizable: true,
        widthGrow: 1,
        headerMenu: headerMenu,
        headerFilter:"input"
    },
    {
        title: "Actions",
        field: "actions",
        hozAlign: "left",
        minWidth: 150,
        resizable: true,
        headerSort: false,
        widthGrow: 1,
        cssClass: 'actions-gloobal',
        headerMenu: headerMenu,
    },
],

});
// Seleccion a todos
document.querySelector('.adminTable .items-actions .item.all').addEventListener("click", function(){
tableAdmin.deselectRow();
tableAdmin.selectRow();
});
// Selección página actual
document.querySelector('.adminTable .items-actions .item.current').addEventListener("click", function(){
tableAdmin.deselectRow();
tableAdmin.selectRow("visible")
});
// Seleccion inactivos
document.querySelector('.adminTable .items-actions .item.inactive').addEventListener("click", function(){
tableAdmin.deselectRow();
let rows = tableAdmin.getRows()
rows.filter(function(row){
    if (row._row.data.col == 'inactive') {
        tableAdmin.selectRow(row);
    }
});
});
// Seleccion activos
document.querySelector('.adminTable .items-actions .item.active').addEventListener("click", function(){
tableAdmin.deselectRow();
let rows = tableAdmin.getRows()
rows.filter(function(row){
    if (row._row.data.col == 'active') {
        tableAdmin.selectRow(row);
    }
});
});
// Action eliminar
document.querySelector('.adminTable .items-actions .item.isDelete').addEventListener("click", function(){
let rows = tableAdmin.getRows()
let rowsSelected = [];
rows.filter(function(row){
    if (row.isSelected()) {
        rowsSelected.push(row)
    }
});
if (confirm(`¿Está seguro de eliminar estos ${ rowsSelected.length } registros?`)) {
    rowsSelected.map(x => {
        x.delete()
    })
}
});
// Action desactivar
document.querySelector('.adminTable .items-actions .item.isDesactive').addEventListener("click", function(){
let rows = tableAdmin.getRows()
let rowsSelected = [];
rows.filter(function(row){
    if (row.isSelected()) {
        rowsSelected.push(row)
    }
});

if (confirm(`¿Está seguro de desactivar estas ${ rowsSelected.length } filas?`)) {
    rowsSelected.map(row => {
        row.update({ col: 'inactive' })
    })
}
});
// Action activar
document.querySelector('.adminTable .items-actions .item.isActive').addEventListener("click", function(){
let rows = tableAdmin.getRows()
let rowsSelected = [];
rows.filter(function(row){
    if (row.isSelected()) {
        rowsSelected.push(row)
    }
});

if (confirm(`¿Está seguro de activar estas ${ rowsSelected.length } filas?`)) {
    rowsSelected.map(row => {
        row.update({ col: 'active' })
    })
}
});
// Action duplicar
document.querySelector('.adminTable .items-actions .item.isDuplicate').addEventListener("click", function(){
let rows = tableAdmin.getRows()
let rowsSelected = [];
rows.filter(function(row){
    if (row.isSelected()) {
        rowsSelected.push(row)
    }
});
if (confirm(`¿Está seguro de duplicar estas ${ rowsSelected.length } filas?`)) {
    rowsSelected.map(row => {
        tableAdmin.addRow(Object.assign({}, row.getData()))
    })
}
});
const dropdownTable = [...document.querySelectorAll('.dropdown-table')]
dropdownTable.map((el, index) => {
const trigger = el.children[0]
const content = el.children[1]
trigger.addEventListener('click', (e) => {
    e.preventDefault()

    if (content.style.display == '' || content.style.display == 'none') {
        content.style.display = 'flex'
    } else {
        content.style.display = 'none'
    }
    
})
})
// console.clear();