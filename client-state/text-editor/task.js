const editor = document.querySelector('#editor');
const btnClear = document.querySelector('.clear-textarea');

pasteText();

function onEditor() {
    localStorage.text = JSON.stringify(editor.value);
};

function onClear() {
    editor.value = '';
};

function pasteText() {
    if (localStorage.text) {
        editor.value = JSON.parse(localStorage.text);
    };
};

editor.addEventListener('input', onEditor);
btnClear.addEventListener('click', onClear);