const subscribeModal = document.querySelector('#subscribe-modal');
const modalClose = document.querySelector('.modal__close');

subscribeModal.classList.add('modal_active');

getStatus();

function saveStatus() {
    document.cookie = "user=au";
    console.log(document.cookie);
    subscribeModal.classList.remove('modal_active')
}

function getStatus() {
    return console.log(document.cookie);
}

modalClose.addEventListener('click', saveStatus);