function loadLocationsData(idParentCurrent = 'base') {
    let urlAllFilter = BASE_URL + 'Filter/getLocations/' + idParentCurrent
    console.log(idParentCurrent)

    async function fetchFilterJSON() {
        const response = await fetch(urlAllFilter);
        const locations = await response.json();
        return locations;
    }

    fetchFilterJSON().then(tableLocations => {
        tableLocations.map((x, index) => {
            // console.log(x)
            x.index = index + 1
        });
        console.log('Debajo está ')
        console.log(tableLocations)
        // Table init
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
        
        var printIcon = function (cell, formatterParams, onRendered) { //plain text value
        return /*html*/ `
        <i class="material-icons-outlined col-custom-icon">home</i>
        `;
        };
        let locationsTable = new Tabulator("#locationsTable", {
        data: tableLocations,
        // ajaxURL: BASE_URL + 'Filter/getFilter/' + 'base',
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
        popupContainer: "#modal-div",
        rowFormatter: function (row) {
            let rowField = row.getElement();
            let cellCheckbox = rowField.children[0]
            let cellActions = rowField.children[rowField.childElementCount - 2]
            let colCustomCheckboxCellTitle = row._row.parent.renderer.elementHorizontal.querySelector('.tabulator-col.custom-checkbox-cell .tabulator-col-title')
            let icon = document.createElement('i')
            if (row._row.table.getSelectedRows().length == tableLocations.length) {
                icon.style.display = 'none'
            }
            cellCheckbox.innerHTML = /* html */
                `<i class="material-icons-outlined checkbox"></i>`;
            icon.style.top = '-2px'
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
                    icon.style.top = '-2px'
                    icon.style.left = '0px'
                    icon.style.cursor = 'pointer'
                    icon.classList.add('material-icons-outlined')
                    icon.textContent = 'indeterminate_check_box'
                    colCustomCheckboxCellTitle.appendChild(icon)
                } else {
                    console.log('Nada checkbox')
                    colCustomCheckboxCellTitle.children[1].remove()
                }
        
                if (row._row.table.getSelectedRows().length == tableLocations.length) {
                    colCustomCheckboxCellTitle.children[1].remove()
                }
            };
            cellActions.innerHTML = /* html */
                `<div class="actions-table">
                    <i class="material-icons search-actions-table">search</i>
                    <i class="trigger-actions-table material-icons-outlined">more_vert</i>
                    <div class="content-more-vert">
                        <div class="item-more-vert">
                            <i class="material-icons-outlined">account_tree</i>
                        </div>
                        <div class="item-more-vert update">
                            <i class="material-icons-outlined">edit</i>
                        </div>
                        <div class="item-more-vert">
                            <i class="material-icons">content_copy</i>
                        </div>
                        <div class="item-more-vert delete">
                            <i class="material-icons-outlined">delete</i>
                        </div>
                        <div class="item-more-vert close-content-actions">
                            <i class="material-icons-outlined">close</i>
                        </div>
                    </div>
                </div>`
            let triggerCellActions = cellActions.querySelector('.trigger-actions-table')
            let closeContentActions = cellActions.querySelector('.close-content-actions')
            let deleteFilterBtn = cellActions.querySelector('.delete')
            let searchSubcategories = cellActions.querySelector('.search-actions-table')
            let updateFilterBtn = cellActions.querySelector('.update')
        
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
            deleteFilterBtn.onclick = () => {
                if (confirm(`¿Está seguro de eliminar ${ row._row.data.nombre }?`)) {
                    deleteFilter(row._row.data.id, row);
                }
            }
            let modal = document.querySelector('.update-location-form');
            let containerPersonalData = modal.querySelector('.container-personal-data');
            let close = modal.querySelector('.close-modal-form');
            let subcategoriesHTML = modal.querySelector('.chevrondown-gj8 .chevrondown-content-gj8.not')
            let name = modal.querySelector('.input-name');
            let type = modal.querySelector('.input-type');
            let status = modal.querySelector('.switch-gj8');
            let send = modal.querySelector('.send-update')
            updateFilterBtn.onclick = () => {
                // Star update
                // alert('Actualizando '+row._row.data.nombre)
                console.log('Actualizando. . .')
                subcategoriesHTML.innerHTML = ''
                async function fetchFilterParentJSON() {
                    const response = await fetch(BASE_URL + 'Filter/getLocationParent');
                    const categories = await response.json();
                    return categories;
                }
                
                fetchFilterParentJSON().then(tree => {
        
                    async function fetchFilterUpdateJSON() {
                        const response = await fetch(BASE_URL + 'Filter/selectOnlyLocation/'+row._row.data.id);
                        const categories = await response.json();
                        return categories;
                    }
                    
                    fetchFilterUpdateJSON().then(dataUpdate => {
                        // console.log(dataUpdate)
                        name.value = dataUpdate.nombre
                        name.focus()
                        if (dataUpdate.estado == 'active') {
                            status.classList.remove('off')
                        } else {
                            status.classList.add('off')
                        } 
                        type.textContent =  'Se guardará como: ' + dataUpdate.tipo
                        type.setAttribute('item', dataUpdate.idParent)
                        type.setAttribute('x', dataUpdate.id)
        
                        let radiosMapCategories = [...modal.querySelectorAll('.chevrondown-radio-button')]
                        let radioCurrent = radiosMapCategories.filter(x => x.attributes[1].nodeValue == dataUpdate.idParent)
        
                        console.log(radioCurrent)
                        
        
        
        
        
                        let nameMapCategories = [...modal.querySelectorAll('.chevrondown-name')]
                        let nameCurrent = nameMapCategories.filter( x => x.textContent.trim() == dataUpdate.nombre)
                        nameCurrent[0].parentElement.querySelector('.chevrondown-radio-button').remove()
                        nameCurrent[0].style.fontWeight = '700'
                        nameCurrent[0].parentElement.querySelector('.chevrondowm-editing')
                        nameCurrent[0].parentElement.querySelector('.chevrondown-editing').textContent = 'Editando:'
                        let previewParent = modal.querySelector('.preview-parent .preview-name')
                        let previewChild = modal.querySelector('.preview-child .preview-name')
                        let boxScroll = modal.querySelector('.main-chevrondown-gj8 .chevrondown-gj8')
                        previewParent.textContent = radioCurrent[0].parentElement.querySelector('.chevrondown-name').textContent.trim()
                        previewChild.textContent = nameCurrent[0].textContent.trim();
                        [...modal.querySelectorAll('.chevrondown-radio-button')].map(x => x.classList.remove('active'))
                        radioCurrent[0].classList.add('active')
                        // console.log(nameParentCategorieCurrent.getBoundingClientRect().top)
                        // console.log(dataUpdate.idParent)
                        // boxScroll.offsetTop = '100px'
        
                        send.onclick = (e) => {
                            e.preventDefault();
                            // console.log('Datos enviados')
                            // console.log(modal)
                            // modal.style.display = 'none';
                            let pointCategories = [...modal.querySelectorAll('.chevrondown-radio-button')]
                            let idParent = pointCategories.filter(x => x.classList.contains('active'))
                            let parent = idParent[0].attributes[1].nodeValue
                            let nameParent = idParent[0].parentElement.querySelector('.chevrondown-name').textContent.trim()
                            let id = type.attributes.x.textContent
                            let categoryMark = idParent[0].parentElement.querySelector('.chevrondown-name').nextElementSibling
        
                            let categoryParent;
                            if (parent == 'base' && categoryMark == null) {
                                categoryParent = 'base'
                            } else if (parent != 'base' && categoryMark != null) {
                                categoryParent = 'categoria'
                            } else if (parent != 'base' && categoryMark == null) {
                                categoryParent = 'subcategoria'
                            }
        
                            if (parent != 'base') {
                                typeCategorie = 'subcategoria'
                            } else {
                                typeCategorie = 'categoria'
                            }
        
                            let req = (window.XMLHttpRequest) ? new XMLHttpRequest() : ActiveXObject('Microsoft.XMLHTTP')
                            let url = BASE_URL + 'Filter/updateFilter/' + id
                            
                            req.open("POST", url, true);
                            function datosFormulario() {
                                let datos = '';
                                datos += 'nombre=' + name.value;
                                datos += '&tipo=' + typeCategorie;
                                datos += '&estado=' + (status.classList.contains('off') ? 'inactive' : 'active');
                                datos += '&pais=' + parent;
                                datos += '&division=' + parent;
                                datos += '&idParent=' + parent;
                                return datos;
                            }
                            console.log(datosFormulario())
                            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                            req.send(datosFormulario())
                            req.onreadystatechange = (e) => {
                                if (req.readyState == 4 && req.status == 200) {
                                    console.log(req.response)
                                    req.response = ''
                                    // console.log('New Update')
                                    let data = JSON.parse(req.responseText)
                                    
                                    if (data.status) {
                                        createToast('success', data.msg)
                                        modal.style.display = 'none';
                                        // loadLocationsData(parent);
                                        loadTreeFilter();
                                        reloadTableFilter(parent);
                                        console.log(categoryParent)
                                        const breadcumbLinks = [...document.querySelectorAll('.breadcumb.breadcumb-locations .links .d-flex.fadeInLeft')] 
        
                                        if (categoryParent == 'categoria') {
                                            breadcumbLinks.map(x => {
                                                x.remove()
                                            })
                                            console.log('Nombre Papa categoria: ',nameParent,'------- IdPapa: ',parent)
                                            addLinkBreadCumbLocations(nameParent, parent)
                                        } else if (categoryParent == 'subcategoria') {
                                            console.log('Nombre Papa subcategoria: ',nameParent,'------- IdPapa: ',parent)
                                            breadcumbLinks.map(x => {
                                                x.remove()
                                            })
                                            async function fetchFilterJSON() {
                                                const response = await fetch(BASE_URL + 'Filter/tree/' + parent);
                                                const categories = await response.json();
                                                return categories;
                                            }
                                        
                                            fetchFilterJSON().then(x => {
                                                // console.log(x)
                                                x.map(item => {
                                                    if (item) {
                                                        // console.log(item)
                                                        addLinkBreadCumbLocations(item.nombre, item.id)
                                                        // No se tiene que ejecutar de nuevo el loadLocationsData() tu veras como hacer para hacer que todo salga bien
                                                        // console.log(locationsTable)

                                                        
                                                    }
                                                })
                                            })
                                        }
        
                                    } else {
                                        // createToast('warning', data.msg)
                                    }
                                }
                            }
                        }
        
        
        
        
                    });
                    
                    tree.map(item => {
                        if (item.subLocation.length > 0) {
                            subcategoriesHTML.innerHTML += /* html */ `
                            <div class="chevrondown-item-gj8">
                                <div class="chevrondown-head-gj8">
                                    <i class="material-icons">chevron_right</i>
                                    <span class="chevrondown-radio-button" item="${item.id}"></span>
                                    <span class="chevrondown-editing"></span>
                                    <span class="chevrondown-name">${ item.nombre }</span> <span class="category-mark">(Localización)</span>
                                </div>
                                <div class="chevrondown-content-gj8">
                                    ${ viewSubCat(item.subLocation) }
                                </div>
                            </div>`
                        } else {
                            subcategoriesHTML.innerHTML += /* html */ `
                            <div class="chevrondown-head-gj8">
                                <div class="sp"></div>
                                <span class="chevrondown-radio-button" item="${item.id}"></span>
                                <span class="chevrondown-editing"></span>
                                <span class="chevrondown-name">${ item.nombre }</span> <span class="category-mark">(Localización)</span>
                            </div>`
                        }
                    });
        
                    let chevrondownHead = [...modal.querySelectorAll('.chevrondown-head-gj8 i')];
                    let radioBtns = [...modal.querySelectorAll('.chevrondown-gj8 .chevrondown-radio-button')];
                    let chevrondownContents = [...modal.querySelectorAll('.chevrondown-content-gj8')];
        
                    chevrondownHead.map((item, index) => {
                        const content = item.parentElement.parentElement.children[1]
                        const arrow = item
                        if (content != undefined && arrow != undefined) {
                            item.addEventListener('click', (e) => {
                                // console.log(content)
                                e.preventDefault();
                                if (content.classList.contains('not')) {
                                    // console.log(content)
                                    content.style.display = 'block'
                                    arrow.style.transform = 'rotate(90deg)'
                                } else {
                                    if (content.style.display == '' || content.style.display == 'none') {
                                        content.style.display = 'block'
                                        arrow.style.transform = 'rotate(90deg)'
                                    } else {
                                        content.style.display = 'none'
                                        arrow.style.transform = 'rotate(0deg)'
                                    }
                                }
                            });
                        }
                    });
                    radioBtns.map(btn => {
                        btn.addEventListener('click', (e) => {
                            e.preventDefault();
                            let content = btn.parentElement.parentElement.children[1]
                            let text = btn.parentElement
                            let arrow = btn.parentElement.querySelector('i')
        
                            if (arrow != null) {
                                console.log(btn.attributes[1].nodeValue)
                                if (btn.attributes[1].nodeValue == 'base') {
                                    document.querySelector('.update-location-form .input-type').textContent = 'Se guardará como: categoría'
                                } else {
                                    document.querySelector('.update-location-form .input-type').textContent = 'Se guardará como: subcategoría'
                                }
                                radioBtns.map(_btn => {
                                    if (_btn.classList.contains('active')) {
                                        // console.log(_btn.closest('.chevrondown-item-gj8').querySelector('.chevrondown-content-gj8'))
                                        // console.log(btn.closest('.chevrondown-item-gj8'))
                                        _btn.classList.remove('active')
        
                                        if (_btn.classList.contains('not')) {
                                            btn.classList.add('active')
                                            content.style.display = 'block'
                                            arrow.style.transform = 'rotate(90deg)'
                                        } else {
                                            btn.classList.add('active')
                                            content.style.display = 'block'
                                            arrow.style.transform = 'rotate(90deg)'
                                        }
                                    }
                                })
                            } else {
                                if (btn.attributes[1].nodeValue == 'base') {
                                    document.querySelector('.update-location-form .input-type').textContent = 'Se guardará como: categoría'
                                } else {
                                    document.querySelector('.update-location-form .input-type').textContent = 'Se guardará como: subcategoría'
                                }
                                radioBtns.map(_btn => {
                                    if (_btn.classList.contains('active')) {
                                        // console.log(_btn.closest('.chevrondown-item-gj8').querySelector('.chevrondown-content-gj8'))
        
                                        if (_btn.closest('.chevrondown-item-gj8').querySelector('.chevrondown-content-gj8').contains(e.target)) {
                                            // console.log('Estoy dentro de ti content')
                                        } else {
                                            _btn.closest('.chevrondown-item-gj8').querySelector('.chevrondown-content-gj8').style.display = 'none'
                                            _btn.closest('.chevrondown-item-gj8').querySelector('i.material-icons').style.transform = 'rotate(0deg)'
                                            // console.log('Fuera del content')
                                        }
                                        _btn.classList.remove('active')
                                        btn.classList.add('active')
                                    }
                                })
                            }
        
        
        
        
                        });
                    });
                    chevrondownContents.map(content => {
                        content.style.display = 'block'
                    });
                    [...modal.querySelectorAll('.chevrondown-gj8 i')].map(i => {
                        i.style.transform = 'rotate(90deg)'
                    });
                    //  Hasta aquí
        
        
        
                });
                
                modal.style.display = 'block'
                close.addEventListener('click', (e) => {
                    modal.style.display = 'none'
                })
                containerPersonalData.addEventListener('click', (e) => {
                    e.preventDefault();
                    // console.log('message')
                    if (!modal.querySelector('.personal-data').contains(e.target)) {
                        modal.style.display = 'none'
                    }
                });
        
                function viewSubCat(categories) {
                    let html = ''
                    categories.map(x => {
                        if (x.subLocation.length > 0) {
                            html += /* html */ `
                        <div class="chevrondown-item-gj8">
                            <div class="chevrondown-head-gj8">
                                <i class="material-icons">chevron_right</i>
                                <span class="chevrondown-radio-button" item="${x.id}"></span>
                                <span class="chevrondown-editing"></span>
                                <span class="chevrondown-name">${ x.nombre }</span>
                            </div>
                            `
                            html += /* html */ `
                            <div class="chevrondown-content-gj8">
                                ${ viewSubCat(x.subLocation) }
                            </div>
                        </div>`
                        } else {
                            html += /* html */ `
                        <div class="chevrondown-head-gj8">
                            <div class="sp"></div>
                            <span class="chevrondown-radio-button" item="${x.id}"></span>
                            <span class="chevrondown-editing"></span>
                            <span class="chevrondown-name">${ x.nombre }</span>
                        </div>`
                        }
                    })
                    return html;
                }
                // end update
            }
        
            if (row._row.data.subcategory.length > 0) {
                searchSubcategories.style.display = 'block'
                searchSubcategories.onclick = () => {
                    viewSubCatJson(row._row.data.subcategory[0].idParent)
                    let link = row._row.data.nombre
                    let id = row._row.data.id
                    let subcategory = row._row.data.subcategory
                    addLinkBreadCumbLocations(link, id, subcategory)
                }
            } else {
                searchSubcategories.style.display = 'none'
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
                field: "index",
                width: 70,
                minWidth: 70,
                hozAlign: 'left',
                resizable: false,
                cssClass: 'custom-id',
                headerFilter: "input"
            },
            {
                title: "Nombre",
                field: "nombre",
                minWidth: 150,
                resizable: true,
                headerMenu: headerMenu,
                headerFilter: "input"
            },
            {
                title: "Tipo",
                field: "tipo",
                minWidth: 100,
                resizable: true,
                headerMenu: headerMenu,
                headerFilter: "input"
        
            },
            {
                title: "Estado",
                field: "estado",
                hozAlign: "left",
                minWidth: 120,
                resizable: true,
                headerMenu: headerMenu,
                headerFilter: "input"
            },
            {
                title: "País",
                field: "pais",
                hozAlign: "left",
                minWidth: 120,
                resizable: true,
                headerMenu: headerMenu,
                headerFilter: "input"
            },
            {
                title: "División",
                field: "division",
                hozAlign: "left",
                minWidth: 120,
                resizable: true,
                headerMenu: headerMenu,
                headerFilter: "input"
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
        
        function viewSubCatJson(id) {
            let urlAllFilter = BASE_URL + 'Filter/getLocations/' + id
            async function fetchFilterJSON() {
                const response = await fetch(urlAllFilter);
                const categories = await response.json();
                return categories;
            }
            
            fetchFilterJSON().then(subcategories => {
                subcategories.map((x, index) => {
                    x.index = index + 1
                });
                locationsTable.replaceData(subcategories)
            
            })
        }
        function reloadTableFilter(id) {
            async function fetchFilterJSON() {
                const response = await fetch(BASE_URL + 'Filter/getFilter/' + id);
                const categories = await response.json();
                return categories;
            }
        
            fetchFilterJSON().then(data => {
                data.map((x, index) => {
                    x.index = index + 1
                });
                // console.log(data)
                locationsTable.replaceData(data)
                // console.log(locationsTable)
            })
        }
        // Breadcumb
        function addLinkBreadCumbLocations(link, id, type) {
            const breadcumbCategories = document.querySelector('.breadcumb.breadcumb-locations .links');
            if (link != undefined) {
                console.log(link)
                console.log('Desde Breadcumb click')
                breadcumbCategories.innerHTML += /* html */ `
                <div class="d-flex fadeInLeft">
                    <i class="material-icons dark">chevron_right</i>
                    <a href="#">
                        <a href="#" item="${ id }" class="user-trigger span link-sub">${ link } </a>
                    </a>
                </div>`
            }
            const allLinksBreadcumbLocations = [...document.querySelectorAll('.breadcumb.breadcumb-locations .link-sub')];
            console.log(allLinksBreadcumbLocations)
            allLinksBreadcumbLocations.map(x => {
                x.onclick = (e) => {
                    e.preventDefault();
                    let item = e.currentTarget.attributes[1].nodeValue
                    let name = e.currentTarget.textContent.trim()
                    if (item == 'base') {
                        [...document.querySelectorAll('.breadcumb.breadcumb-locations .links .d-flex.fadeInLeft')].map(item => {
                            item.remove()
                        });
                    }
                    console.log(name, '---',item)
                    delElementBreadCumb(e.currentTarget.parentElement.nextElementSibling)
                    function delElementBreadCumb(next) {
                        if (next != null) {
                            delElementBreadCumb(next.nextElementSibling)
                            next.remove()
                        }
                    }

                    async function fetchFilterJSON() {
                        const response = await fetch(BASE_URL + 'Filter/getLocations/' + item);
                        const locations = await response.json();
                        return locations;
                    }
                
                    fetchFilterJSON().then(data => {
                        data.map((x, index) => {
                            x.index = index + 1
                        });
                        // console.log(data)
                        locationsTable.replaceData(data)
                        console.log(locationsTable)
                    })
                }
            })
        }
        
        
        addLinkBreadCumbLocations()
        
        // Seleccion a todos
        document.querySelector('.locationsTable .items-actions .item.all').addEventListener("click", function () {
        locationsTable.deselectRow();
        locationsTable.selectRow();
        });
        // Selección página actual
        document.querySelector('.locationsTable .items-actions .item.current').addEventListener("click", function () {
        locationsTable.deselectRow();
        locationsTable.selectRow("visible")
        });
        // Seleccion inactivos
        document.querySelector('.locationsTable .items-actions .item.inactive').addEventListener("click", function () {
        locationsTable.deselectRow();
        let rows = locationsTable.getRows()
        rows.filter(function (row) {
            if (row._row.data.estado == 'inactive') {
                locationsTable.selectRow(row);
            }
        });
        });
        // Seleccion activos
        document.querySelector('.locationsTable .items-actions .item.active').addEventListener("click", function () {
        locationsTable.deselectRow();
        let rows = locationsTable.getRows()
        console.log(rows)
        rows.filter(function (row) {
            if (row._row.data.estado == 'active') {
                locationsTable.selectRow(row);
            }
        });
        });
        // Action eliminar
        document.querySelector('.locationsTable .items-actions .item.isDelete').addEventListener("click", function () {
        let rows = locationsTable.getRows()
        let rowsSelected = [];
        rows.filter(function (row) {
            if (row.isSelected()) {
                rowsSelected.push(row)
            }
        });
        if (rowsSelected.length == 0) {
            createToast('warning', 'Seleccione al menos un registro para eliminar')
        } else {
            if (confirm(`¿Está seguro de eliminar estos ${ rowsSelected.length } registros?`)) {
                rowsSelected.map(x => {
                    deleteFilter(x._row.data.id, x);
                });
            }
        }
        });
        // Action desactivar
        document.querySelector('.locationsTable .items-actions .item.isDesactive').addEventListener("click", function () {
        let rows = locationsTable.getRows()
        let rowsSelected = [];
        rows.filter(function (row) {
            if (row.isSelected()) {
                rowsSelected.push(row)
            }
        });
        
        if (confirm(`¿Está seguro de desactivar estas ${ rowsSelected.length } filas?`)) {
            rowsSelected.map(row => {
                row.update({
                    estado: 'inactive'
                })
            })
        }
        });
        // Action activar
        document.querySelector('.locationsTable .items-actions .item.isActive').addEventListener("click", function () {
        let rows = locationsTable.getRows()
        let rowsSelected = [];
        rows.filter(function (row) {
            if (row.isSelected()) {
                rowsSelected.push(row)
            }
        });
        
        if (confirm(`¿Está seguro de activar estas ${ rowsSelected.length } filas?`)) {
            rowsSelected.map(row => {
                row.update({
                    estado: 'active'
                })
            })
        }
        });
        // Action duplicar
        document.querySelector('.locationsTable .items-actions .item.isDuplicate').addEventListener("click", function () {
        let rows = locationsTable.getRows()
        let rowsSelected = [];
        rows.filter(function (row) {
            if (row.isSelected()) {
                rowsSelected.push(row)
            }
        });
        if (confirm(`¿Está seguro de duplicar estas ${ rowsSelected.length } filas?`)) {
            rowsSelected.map(row => {
                locationsTable.addRow(Object.assign({}, row.getData()))
            })
        }
        });
        
        function deleteFilter(id, item = '') {
            let urlAllFilter = BASE_URL + 'Filter/delLocation/'+id
                    
            async function fetchDelFilterJSON() {
                const response = await fetch(urlAllFilter);
                const filters = await response.json();
                return filters;
            }
            
            fetchDelFilterJSON().then(res => {
                console.log(res)
                if (res) {
                    if (item != '') {
                        item.delete()
                        // createToast('success', '¡Registro eliminado con exito!')
                    }
                    loadLocationsData();
                    loadLocationsTree();
                } else {
                    // createToast('warning', 'Error al eliminar. . .')
                }
            })
        }
        // table end
    }); // end fetch
}

loadLocationsData();
// console.clear();


// Desde aquí para abajo
function loadLocationsTree() {
    let urlAllLocationsParent = BASE_URL + 'Filter/getLocationParent'
    let arrX = [];
    let locationsTree = document.querySelector('#locations-tree');
    locationsTree.innerHTML = '';
    // locationsTree.parentElement.querySelector('.chevrondown-radio-button.not').classList.add('active')
    async function fetchLocationParentJSON() {
        const response = await fetch(urlAllLocationsParent);
        const locations = await response.json();
        return locations;
    }

    fetchLocationParentJSON().then(tree => {
        console.log('Loocations tree')
        console.log(tree)
        tree.map(item => {
            console.log(item)
            // AQUÍ HAY QU VERIFICAR SI LA CATEGORÍA ESTÁ ACTIVA PARA SU APARICIÓN
            if (item.subLocation.length > 0) {
                locationsTree.innerHTML += /* html */ `
            <div class="chevrondown-item-gj8">
                <div class="chevrondown-head-gj8">
                    <i class="material-icons">chevron_right</i>
                    <span class="chevrondown-radio-button" item="${item.id}"></span>
                    ${ item.nombre } <span class="category-mark">(Localización)</span>
                </div>
                <div class="chevrondown-content-gj8">
                    ${ viewSubCat(item.subLocation) }
                </div>
            </div>`
            } else {
                locationsTree.innerHTML += /* html */ `
            <div class="chevrondown-head-gj8">
                <div class="sp"></div>
                <span class="chevrondown-radio-button" item="${item.id}"></span>
                ${ item.nombre } <span class="category-mark">(Localización)</span>
            </div>
            `
            }
            // desde aca
            let chevrondownHead = [...document.querySelectorAll('.chevrondown-head-gj8 i')];
            let radioBtns = [...document.querySelectorAll('.chevrondown-gj8 .chevrondown-radio-button')];
            let chevrondownContents = [...document.querySelectorAll('.chevrondown-content-gj8')];

            chevrondownHead.map((item, index) => {
                const content = item.parentElement.parentElement.children[1]
                const arrow = item
                if (content != undefined && arrow != undefined) {

                    item.addEventListener('click', (e) => {
                        // console.log(content)
                        e.preventDefault();
                        if (content.classList.contains('not')) {
                            // console.log(content)
                            content.style.display = 'block'
                            arrow.style.transform = 'rotate(90deg)'
                        } else {
                            if (content.style.display == '' || content.style.display == 'none') {
                                content.style.display = 'block'
                                arrow.style.transform = 'rotate(90deg)'
                            } else {
                                content.style.display = 'none'
                                arrow.style.transform = 'rotate(0deg)'
                            }
                        }
                    });
                }
            });
            radioBtns.map(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    let content = btn.parentElement.parentElement.children[1]
                    let text = btn.parentElement
                    let arrow = btn.parentElement.querySelector('i')
                    if (arrow != null) {
                        radioBtns.map(_btn => {
                            if (_btn.classList.contains('active')) {
                                _btn.classList.remove('active')

                                if (_btn.classList.contains('not')) {
                                    btn.classList.add('active')
                                    content.style.display = 'block'
                                    arrow.style.transform = 'rotate(90deg)'
                                } else {
                                    btn.classList.add('active')
                                    content.style.display = 'block'
                                    arrow.style.transform = 'rotate(90deg)'
                                }
                            }
                        })
                    } else {
                        radioBtns.map(_btn => {
                            if (_btn.classList.contains('active')) {
                                if (_btn.closest('.chevrondown-item-gj8').querySelector('.chevrondown-content-gj8').contains(e.target)) {
                                } else {
                                    _btn.closest('.chevrondown-item-gj8').querySelector('.chevrondown-content-gj8').style.display = 'none'
                                    _btn.closest('.chevrondown-item-gj8').querySelector('i.material-icons').style.transform = 'rotate(0deg)'
                                }
                                _btn.classList.remove('active')
                                btn.classList.add('active')
                            }
                        })
                    }
                });
            });
            document.querySelector('.main-chevrondown-gj8 .expand-less-gj8').addEventListener('click', (e) => {
                e.preventDefault();
                chevrondownContents.map(content => {
                    content.style.display = 'none'
                });
                [...document.querySelectorAll('.chevrondown-gj8 i')].map(i => {
                    i.style.transform = 'rotate(0deg)'
                });
            });
            document.querySelector('.main-chevrondown-gj8 .expand-more-gj8').addEventListener('click', (e) => {
                e.preventDefault();
                chevrondownContents.map(content => {
                    content.style.display = 'block'
                });
                [...document.querySelectorAll('.chevrondown-gj8 i')].map(i => {
                    i.style.transform = 'rotate(90deg)'
                });
            });
            //  Hasta aquí
        });

        function viewSubCat(locations) {
            let html = ''
            locations.map(x => {
                if (x.subLocation.length > 0) {
                    html += /* html */ `
                <div class="chevrondown-item-gj8">
                    <div class="chevrondown-head-gj8">
                        <i class="material-icons">chevron_right</i>
                        <span class="chevrondown-radio-button" item="${x.id}"></span>
                        ${ x.nombre }
                    </div>`
                    html += /* html */ `
                    <div class="chevrondown-content-gj8">
                        ${ viewSubCat(x.subLocation) }
                    </div>
                </div>`
                } else {
                    html += /* html */ `
                <div class="chevrondown-head-gj8">
                    <div class="sp"></div>
                    <span class="chevrondown-radio-button" item="${x.id}"></span>
                    ${ x.nombre }
                </div>`
                }
            })
            return html;
        }
    }); // End fetch tree
}
loadLocationsTree()