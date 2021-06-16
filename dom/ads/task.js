const arrRotator = Array.from(document.getElementsByClassName('rotator__case'));

function rotation() {
    let index = 0;
    setInterval(() => {
        arrRotator.forEach((e) => {
            if (e.classList.contains('rotator__case_active')) {
                e.classList.remove('rotator__case_active');
            };
        });
        let index = Math.floor(Math.random() * (arrRotator.length));
        arrRotator[index].classList.add('rotator__case_active');
        arrRotator[index].style.color = arrRotator[index].dataset.color;
    }, arrRotator[index].dataset.speed);
};
rotation();