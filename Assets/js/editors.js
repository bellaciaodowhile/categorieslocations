console.log('Editors JS')
editorMainFunction('step-2')
editorMainFunction('step-3')
editorMainFunction('step-7')
function editorMainFunction(parent) {
    const mainEditors = [...document.querySelectorAll(`.${parent} .main-dropdown-editors`)]
    mainEditors.map((editor, index) => {
        let textAreaEditors = editor.parentElement.parentElement.querySelector('.textarea')
        let triggerBold = editor.parentElement.parentElement.querySelector('.bold')
        let triggerItalic = editor.parentElement.parentElement.querySelector('.italic')
        let triggerUnderlined = editor.parentElement.parentElement.querySelector('.underlined')
        let triggerAlignLeft = editor.parentElement.parentElement.querySelector('.align-left')
        let triggerAlignCenter = editor.parentElement.parentElement.querySelector('.align-center')
        let triggerAlignRight = editor.parentElement.parentElement.querySelector('.align-right')
        let triggerAlignJustify = editor.parentElement.parentElement.querySelector('.align-justify')
        let triggerRemoveFormat = editor.parentElement.parentElement.querySelector('.remove-format')
        let triggerBulleted = editor.parentElement.parentElement.querySelector('.bulleted')
        editor.addEventListener('click', (e) => {
            e.preventDefault();
            if (editor.parentElement.children[1].style.display == '' || editor.parentElement.children[1].style.display == 'none') {
                editor.parentElement.children[1].style.display = 'flex'
            } else {
                editor.parentElement.children[1].style.display = 'none'
            }
        })
        triggerBold.addEventListener("click", function() { boldF(); reloadFontSize() });
        triggerItalic.addEventListener("click", function() { italic(); reloadFontSize()});
        triggerUnderlined.addEventListener("click", function() { underline(); reloadFontSize() });
        triggerAlignLeft.addEventListener("click", function() { alignLeft(); reloadFontSize() });
        triggerAlignCenter.addEventListener("click", function() { alignCenter(); reloadFontSize() });
        triggerAlignRight.addEventListener("click", function() { alignRight(); reloadFontSize() });
        triggerAlignJustify.addEventListener("click", function() { alignJustify(); reloadFontSize() });
        triggerRemoveFormat.addEventListener("click", function() { removeFormat(); reloadFontSize()});
        triggerBulleted.addEventListener("click", function() { insertUnorderedList(); reloadFontSize()});  
        
    })














}











function reloadFontSize() {
    [...document.querySelectorAll('.content-textarea .textarea *')].map(x => {
        x.style.fontSize = '1em';
    });
    [...document.querySelectorAll('.content-textarea ul')].map(x => {
        x.style.listStyle = 'inside';
    });
    // list-style: inside;
};
function boldF() {
    document.execCommand('bold',false,null);
}
function italic() {
    document.execCommand('italic',false,null);
}
function underline() {
    document.execCommand('underline',false,null);
}
function alignLeft() {
    document.execCommand('justifyLeft',false,null);
}
function alignCenter() {
    document.execCommand('justifyCenter',false,null);
}
function alignRight() {
    document.execCommand('justifyRight',false,null);
}
function alignJustify() {
    document.execCommand('justifyFull',false,null);
}
function removeFormat() {
    document.execCommand('removeFormat',false,null);
}
function insertUnorderedList() {
    document.execCommand('insertUnorderedList',false,null);
}
function indent() {
    document.execCommand('indent',false,null);
}

