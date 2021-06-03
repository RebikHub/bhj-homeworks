//  Игра-кликер

const cookieId = document.getElementById('cookie');
const counterId = document.getElementById('clicker__counter');

const clicker = function() {
    +counterId.textContent;
    return function() {
        if (cookieId.style.width === '200px') {
            cookieId.style.width = '300px';
        } else {
            cookieId.style.width = '200px';
        }
        return counterId.textContent++;
    }
}

cookieId.onclick = clicker();