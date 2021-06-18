const widget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');
const answers = [
    'Добрый день!',
    'Все операторы сейчас заняты.',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Мы ничего не будем вам продавать!',
    'До свидания!'
]

widget.addEventListener('click', () => widget.classList.add('chat-widget_active'));

function inputMessage(e) {
    let index = Math.floor(Math.random() * (answers.length));
    if (e.key === 'Enter' && input.value !== '') {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${`${(new Date).getHours()}:${(new Date).getMinutes()}`}</div>
            <div class="message__text">${input.value}</div>
        </div>`
        input.value = '';
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${`${(new Date).getHours()}:${(new Date).getMinutes()}`}</div>
            <div class="message__text">${answers[index]}</div>
        </div>`
    }
};

input.addEventListener('keyup', inputMessage);