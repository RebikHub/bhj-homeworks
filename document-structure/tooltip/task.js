const hasTooltip = document.getElementsByClassName('has-tooltip');
const tooltip = document.querySelector('.tooltip');
tooltip.setAttribute('data-position', 'bottom');

function removeClass() {
    if (tooltip.classList.contains('tooltip_active')) {
        return tooltip.classList.remove('tooltip_active');
    };
};

function onClick(e) {
    e.preventDefault();
    removeClass();
    let left = e.target.getBoundingClientRect().left;
    let top = e.target.getBoundingClientRect().top;
    tooltip.classList.add('tooltip_active');
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top + 20}px`;
    tooltip.textContent = e.target.title;
    setTimeout(removeClass, 2000);
};

for (let index of hasTooltip) {
    index.addEventListener('click', onClick);
};