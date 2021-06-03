//  Игра-кликер

const cookieId = document.getElementById('cookie');
const counterId = document.getElementById('clicker__counter');
const speedClickId = document.getElementById('speed__counter')
let time = 0;

const clicker = function() {
    counterId.textContent;
    return function() {
        speedClickId.textContent = (1 / ((Date.now() - time) / 1000)).toFixed(2)
        if (cookieId.style.width === '200px') {
            cookieId.style.width = '300px';
        } else {
            cookieId.style.width = '200px';
        }
        time = Date.now();
        return counterId.textContent++;
    }
}

cookieId.onclick = clicker();