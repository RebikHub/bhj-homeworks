const checkbox = document.getElementsByClassName('interest__check');

function onChecked(e) {
    if (e.target.checked !== true) {
        e.target.checked = false;
        for (let index of checkbox) {
            if (index.checked === true) {
                index.checked = false;
            };
        };
    } else {
        for (let index of checkbox) {
            if (index.checked === true) {
                index.checked = false;
            };
        };
        let parent = e.target.closest('.interest');
        for (let index of parent.querySelectorAll('input')) {
            index.checked = true;
        };
    }
};

for (let element of checkbox) {
    element.addEventListener('change', onChecked);
};