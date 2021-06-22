const checkbox = Array.from(document.getElementsByClassName('interest__check'));

function nodeArray(selector, parent = document) {
    return [].slice.call(parent.querySelectorAll(selector));
};

function onCheckedParents(e) {
    let check = e.target;

    if (!checkbox.indexOf(check)) {
        return;
    };
    const children = nodeArray('input', check.parentNode);
    children.forEach(child => child.checked = check.checked);

    while (check) {
        const parent = check.closest('ul').parentElement.querySelector('input');
        const sibling = nodeArray('input', parent.closest('li').querySelector('ul'));
        const checkStatus = sibling.map(elem => elem.checked);
        const every = checkStatus.every(Boolean);
        const some = checkStatus.some(Boolean);
        parent.checked = every;

        if (!every && every !== some) {
            parent.indeterminate = true;
        } else {
            parent.indeterminate = false;
        };

        if (check != parent) {
            check = parent;
        } else {
            check = 0;
        };
    };
}

function onCheckedChildren(e) {
    let childs = e.target.closest('.interest').querySelectorAll('input');
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

for (let element of checkbox) {
    element.addEventListener('change', onCheckedChildren);
    element.addEventListener('change', onCheckedParents);
};


// function onCheckedParents(e) {
//     let parents = e.target.closest('ul').parentElement.querySelector('input');
//     let sibling = Array.from(e.target.closest('ul').querySelectorAll('input'));

//     if (e.target.matches('.interests_active .interest__check')) {
//         parents.closest('ul').parentElement.querySelector('input').indeterminate = true
//         parents.indeterminate = true
//     } else {
//         parents.closest('ul').parentElement.querySelector('input').indeterminate = false
//         parents.indeterminate = false
//     }

//     for (let element of checkbox) {
//         if (element.checked === true && element.closest('ul').parentElement.querySelector('input').indeterminate === false) {
//             element.closest('ul').parentElement.querySelector('input').indeterminate = true
//         }
//     }
//     for (let i = 0; i < checkbox.length; i++) {
//         if (checkbox[i].closest('.interest').querySelectorAll('input').length > 1) {}
//         for (const el of checkbox[i].closest('.interest').querySelectorAll('input')) {
//             if (el.checked === true) {
//                 checkbox[i].closest('ul').parentElement.querySelector('input').indeterminate = true
//             }
//         }
//     }
// }