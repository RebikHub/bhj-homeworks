const checkbox = document.getElementsByClassName('interest__check');

console.log(checkbox);

function onChecked(e) {
    let parents = e.target.closest('.interests').parentElement.querySelector('input');
    let childs = e.target.closest('.interest').querySelectorAll('input');
    let sibling = Array.from(this.closest('.interests').querySelectorAll('input'));

    console.log(sibling);
    console.log(sibling.every((e) => {
        console.log(e);
    }));

    if (this.checked === true) {
        parents.indeterminate = true
        for (let index of childs) {
            index.checked = true;
        };
    } else {
        parents.indeterminate = false
        for (let index of childs) {
            index.checked = false;
        };
    }
    if (sibling.every((e) => {
            e.checked === true
        })) {
        e.closest('.interests').parentElement.querySelector('input').checked = true
    }
}

for (let element of checkbox) {
    element.addEventListener('change', onChecked);
};