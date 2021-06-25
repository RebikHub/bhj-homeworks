let xhr = new XMLHttpRequest();
let excRates = {};
const item = document.querySelector('.item');
const imgLoader = document.querySelector('#loader');
const items = document.querySelector('#items');

function getExcRates() {
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            let obj = JSON.parse(xhr.responseText);
            excRates = obj.response.Valute;
            localStorage.clear();
            getValueRates();
            saveValute();
        };
    });
};

function insertElement() {
    for (let i = 0; i < 3; i++) {
        let clone = item.cloneNode(true);
        items.insertAdjacentElement('afterbegin', clone);
    };
    let itemHtml = `<div class="item__code"></div>
    <div class="item__value"></div>
    <div class="item__currency"></div>`;
    for (let i = 0; i < document.querySelectorAll('.item').length; i++) {
        document.querySelectorAll('.item')[i].insertAdjacentHTML('afterbegin', itemHtml);
    };
    getExcRates();
};

function getValueRates() {
    const itemCode = document.querySelectorAll('.item__code');
    const itemValue = document.querySelectorAll('.item__value');
    const itemCurrency = document.querySelectorAll('.item__currency');

    itemCode[0].textContent = excRates.USD.CharCode;
    itemValue[0].textContent = excRates.USD.Value;
    itemCurrency[0].textContent = 'руб.';
    itemCode[1].textContent = excRates.EUR.CharCode;
    itemValue[1].textContent = excRates.EUR.Value;
    itemCurrency[1].textContent = 'руб.';
    itemCode[2].textContent = excRates.GBP.CharCode;
    itemValue[2].textContent = excRates.GBP.Value;
    itemCurrency[2].textContent = 'руб.';
    imgLoader.classList.remove('loader_active');
};

function saveValute() {
    let html = items.innerHTML;
    localStorage.setItem('usd', html);
};

function getValute() {
    if (localStorage.getItem('usd')) {
        getExcRates();
        return items.innerHTML = localStorage.getItem('usd');
    } else {
        items.innerHTML = '';
        return insertElement();
    };
};

getValute();