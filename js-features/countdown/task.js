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

// Повышенный уровень сложности #2

// const timerId = document.getElementById('timer');

// function download(file) {
//     const link = document.createElement('a');
//     link.href = 'data:text/plan';
//     link.setAttribute('target', '_blank')
//     link.setAttribute('download', file);
//     link.style.display = 'none';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }

// function timerWin() {
//     return function() {
//         let seconds = +timerId.textContent;
//         if (seconds !== 0) {
//             return timerId.textContent = seconds - 1;
//         }
//         clearInterval(interval);
//         return download('text.txt');
//     }
// }

// let interval = setInterval(timerWin(), 100)