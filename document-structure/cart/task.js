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

        } else {

            for (let elem of document.getElementsByClassName('cart__product')) {

                if (elem.dataset.id === dataId) {
                    let number = elem.querySelector('.cart__product-count').textContent;
                    elem.querySelector('.cart__product-count').textContent = (+number) + (+productQuantity[i].textContent);
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