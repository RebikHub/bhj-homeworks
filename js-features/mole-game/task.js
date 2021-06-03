const deadId = document.getElementById('dead');
const lostId = document.getElementById('lost');

function getHole(i) {
    return document.getElementById(`hole${i}`)
};

function winOrLose() {
    if (+deadId.textContent === 10 && +lostId.textContent < 5) {
        alert('Победа!!!');
        deadId.textContent = 0;
        lostId.textContent = 0;
        return;
    } else if (+lostId.textContent === 5 && +deadId.textContent < 10) {
        alert('Вы проиграли!');
        deadId.textContent = 0;
        lostId.textContent = 0;
        return;
    }
    return;
}

function holeClick(i) {
    deadId.textContent;
    lostId.textContent;
    return function() {
        if (getHole(i).classList.contains('hole_has-mole')) {
            deadId.textContent++;
            return winOrLose();
        }
        lostId.textContent++;
        return winOrLose();
    }
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = holeClick(i);
}