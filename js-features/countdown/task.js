const timerId = document.getElementById('timer');

setInterval(() => {
    let seconds = +timerId.textContent;
    if (seconds !== 0) {
        return timerId.textContent = seconds - 1;
    }
    return clearInterval();
}, 100)

setTimeout(() => alert('Вы победили в конкурсе!'), 6000)