const checkbox = document.getElementsByClassName('interest__check');
const ul = document.querySelectorAll('ul');


console.log(checkbox);
console.log(ul)


function onChecked(e) {
    let parents = e.target.closest('.interests').parentElement.querySelector('input')
    let childs = e.target.closest('.interest').querySelectorAll('input');
    console.log(this.checked);

    if (this.checked === true) {
        for (let index of childs) {
            index.checked = true;
        };
    } else {
        for (let index of childs) {
            index.checked = false;
        };
    }
}
// if (e.target.closest('.interests').parentElement) {
//     console.log('yes');
// }
// console.log(parents);
// parents.indeterminate = true
// }


for (let element of checkbox) {
    element.addEventListener('change', onChecked);
};