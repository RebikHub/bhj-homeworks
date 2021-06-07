const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');

document.getElementsByClassName('modal__close')[0].onclick = function() {
    return modalMain.classList.remove('modal_active');
}

document.getElementsByClassName('show-success')[0].onclick = function() {
    modalMain.classList.remove('modal_active');
    return modalSuccess.classList.add('modal_active');
}

document.getElementsByClassName('modal__close')[2].onclick = function() {
    return modalSuccess.classList.remove('modal_active');
}