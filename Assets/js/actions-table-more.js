const triggerActionsTable = [...document.querySelectorAll('.trigger-actions-table')]
const currentActionTable = []
triggerActionsTable.map((el, index) => {

  el.addEventListener('click', (e) => {
    e.preventDefault();
    currentActionTable.push(index)
    currentActionTableF()
    const contentMoreVert = el.parentElement.children[2]

    if (contentMoreVert.style.display == '' || contentMoreVert.style.display == 'none') {
      contentMoreVert.style.display = 'flex'
    } else {
      contentMoreVert.style.display = 'none'
    }

    contentMoreVert.addEventListener('click', (x) => {
      x.preventDefault();
      if (contentMoreVert.contains(x.target)) {
        contentMoreVert.style.display = 'none'
      }
    })
  })
})
function currentActionTableF() {
  const currentActionTableOnly = currentActionTable[currentActionTable.length - 1]
  triggerActionsTable.map((el, index) => {
    const contentMoreVert = el.parentElement.children[2]
    if (index != currentActionTableOnly) {
      contentMoreVert.style.display = 'none'
    }
  })
}