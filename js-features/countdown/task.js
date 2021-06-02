// Таймер обратного отсчёта

const timerId = document.getElementById('timer');

function timerWin() {
    return function() {
        let seconds = +timerId.textContent;
        if (seconds !== 0) {
            return timerId.textContent = seconds - 1;
        }
        clearInterval(interval);
        return alert('Вы победили в конкурсе!');
    }
}

let interval = setInterval(timerWin(), 100)

// Повышенный уровень сложности #1

// const statusId = document.getElementById('status');

// function timer(seconds) {
//     return function() {
//         statusId.textContent = `00:00:${seconds}`;
//         if (+seconds !== 0) {
//             if (seconds > 10) {
//                 return seconds -= 1;
//             } else {
//                 return seconds = '0' + (seconds - 1);
//             }
//         }
//         clearInterval(interval);
//         return alert('Вы победили в конкурсе!');
//     }
// }
// let interval = setInterval(timer(30), 100)