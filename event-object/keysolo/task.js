const wordSymbols = document.querySelector('.word');
const statusWin = document.querySelector('.status__wins');
const statusLoss = document.querySelector('.status__loss');
const statusTime = document.querySelector('.status__time')
let currentSymbol = '';
let timerId;

function restart() {
    statusWin.textContent = 0;
    statusLoss.textContent = 0;
    alert('START');
    stopTimer();
    newWord();
    return timer();
}

function setStatusTime() {
    if (+statusTime.textContent !== 0) {
        statusTime.textContent -= 1;
    } else {
        return fail();
    };
}

function timer() {
    return timerId = setInterval(setStatusTime, 1000);
}

function stopTimer() {
    return clearInterval(timerId);
}

function newWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'Россия',
        'kitty',
        'rock',
        'youtube',
        'Hello дружок',
        'popcorn',
        'cinema',
        'я люблю kitkat',
        'love',
        'javascript'
    ];
    const index = Math.floor(Math.random() * words.length);
    const word = words[index].toLowerCase();
    const html = [...word]
        .map((s, i) =>
            `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
        )
        .join('');
    wordSymbols.innerHTML = html;
    statusTime.textContent = document.getElementsByClassName('symbol').length;
    return currentSymbol = wordSymbols.querySelector('.symbol_current');
};

document.addEventListener('keyup', (e) => {
    if (e.key === 'Alt' && e.key === 'Shift' && e.key === 'Control') {
        return;
    } else if (e.key === 'Alt' || e.key === 'Shift' || e.key === 'Control') {
        return;
    } else if (e.key.toLowerCase() === currentSymbol.textContent) {
        return success();
    } else {
        return fail();
    }
});


function success() {
    currentSymbol.classList.add('symbol_correct');
    currentSymbol = currentSymbol.nextElementSibling;
    if (currentSymbol !== null) {
        return;
    }

    if (++statusWin.textContent === 10) {
        alert('Победа!');
        return restart();
    }
    stopTimer();
    newWord();
    return timer();
}

function fail() {
    if (++statusLoss.textContent === 5) {
        alert('Вы проиграли!');
        return restart();
    }
    stopTimer();
    newWord();
    return timer();
}

restart();