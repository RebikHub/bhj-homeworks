const product = document.getElementsByClassName('product');
const productImg = document.getElementsByClassName('product__image');
const productQuantity = document.getElementsByClassName('product__quantity-value');
const productAdd = document.getElementsByClassName('product__add');
const cartProducts = document.querySelector('.cart__products')
const productQuantityControl = document.getElementsByClassName('product__quantity-controls');
const controlDec = document.getElementsByClassName('product__quantity-control_dec');
const controlInc = document.getElementsByClassName('product__quantity-control_inc');
const cart = document.querySelector('.cart');

cart.style = 'display: none';

function displayBascet() {

    if (document.getElementsByClassName('cart__product').length === 0) {
        cart.style = 'display: none';
    };

};

function removeCart() {

    for (let elem of document.getElementsByClassName('cart__product')) {
        elem.addEventListener('click', () => {
            elem.remove();
            displayBascet();
        });
    };

};

function animationImg(arg) {
    let cloneImg = `<img class="cart__product-image" id="img" src="${productImg[arg].src}">`;
    let beginLeft = productImg[arg].getBoundingClientRect().left;
    let beginTop = productImg[arg].getBoundingClientRect().top;
    let endLeft;
    let endTop;
    for (let elem of document.getElementsByClassName('cart__product')) {
        if (elem.dataset.id === product[arg].dataset.id) {
            endLeft = elem.querySelector('.cart__product-image').getBoundingClientRect().left;
            endTop = elem.querySelector('.cart__product-image').getBoundingClientRect().top;
        };
    };
    let stepLeft = (endLeft - beginLeft) / 10;
    let stepTop = (beginTop - endTop) / 10;
    cart.insertAdjacentHTML("beforebegin", cloneImg);
    let img = document.querySelector('#img');
    console.log(beginLeft);
    img.style = `left: ${beginLeft}`;
    img.style = `left: ${beginTop}`;
    return timerAnimation();
}
let beginLeft;
let beginTop;
let endLeft;
let endTop;
let stepLeft;
let stepTop;


function step() {
    document.querySelector('body').style = 'position: relative';
    img.style = 'position: absolute';
    if (beginLeft <= img.getBoundingClientRect().left <= endLeft || beginTop <= img.getBoundingClientRect().top <= endTop) {
        img.style.left = `${beginLeft + stepLeft}px`;
        img.style.top = `${beginTop - stepTop}px`;
        console.log(beginLeft);
    } else {
        img.remove();
        stopTimer();
    }
}

function timerAnimation() {
    return timerId = setInterval(step, 1000);
}

function stopTimer() {
    return clearInterval(timerId);
}


for (let i = 0; i < productAdd.length; i++) {

    productAdd[i].addEventListener('click', () => {

        let dataId = product[i].dataset.id;
        let trueOrFalse = false;

        for (let elem of document.querySelectorAll('.cart__product')) {
            if (elem.dataset.id === dataId) {
                trueOrFalse = true;
            };
        };

        if (!trueOrFalse && (+productQuantity[i].textContent) > 0) {

            const html = `<div class="cart__product" data-id="${product[i].dataset.id}">
    <img class="cart__product-image" src="${productImg[i].src}">
    <div class="cart__product-count">${productQuantity[i].textContent}</div>
    </div>`;
            cartProducts.insertAdjacentHTML('afterbegin', html);
            cart.style = 'display: block';
            removeCart();
            animationImg(i);

        } else {

            for (let elem of document.getElementsByClassName('cart__product')) {

                if (elem.dataset.id === dataId) {
                    let number = elem.querySelector('.cart__product-count').textContent;
                    elem.querySelector('.cart__product-count').textContent = (+number) + (+productQuantity[i].textContent);
                    animationImg(i);

                };
            };
        };

    });

};

for (let i = 0; i < productQuantityControl.length; i++) {

    controlDec[i].addEventListener('click', () => {
        if (+controlDec[i].parentElement.querySelector('.product__quantity-value').textContent > 0) {
            controlDec[i].parentElement.querySelector('.product__quantity-value').textContent -= 1;
        };
    });

    controlInc[i].addEventListener('click', () => {
        if (+controlInc[i].parentElement.querySelector('.product__quantity-value').textContent >= 0) {
            ++controlInc[i].parentElement.querySelector('.product__quantity-value').textContent;
        };
    });

};