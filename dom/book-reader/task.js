const arrFontSize = Array.from(document.getElementsByClassName('font-size'));
const arrColor = Array.from(document.getElementsByClassName('color'))
const book = document.querySelector('.book__content');
const arrTextColor = [];
const arrBgColor = [];

arrColor.forEach((e) => {
    if (e.dataset.textColor) {
        arrTextColor.push(e);
    } else if (e.dataset.bgColor) {
        arrBgColor.push(e);
    };
});

function changeTextColor(ev) {
    ev.preventDefault();
    arrTextColor.forEach((e) => {
        if (e.classList.contains('color_active')) {
            e.classList.remove('color_active');
            book.classList.remove(`book_color-${e.dataset.textColor}`);
        };
    });
    this.classList.add('color_active');
    book.classList.add(`book_color-${this.dataset.textColor}`);
};

function changeBgColor(ev) {
    ev.preventDefault();
    arrBgColor.forEach((e) => {
        if (e.classList.contains('color_active')) {
            e.classList.remove('color_active');
            book.classList.remove(`book_bg-${e.dataset.bgColor}`);
        };
    });
    this.classList.add('color_active');
    book.classList.add(`book_bg-${this.dataset.bgColor}`);
};

function changeFont(ev) {
    ev.preventDefault();
    arrFontSize.forEach((e) => {
        if (e.classList.contains('font-size_active')) {
            e.classList.remove('font-size_active');
            book.classList.remove('font-size_small');
            book.classList.remove('font-size_big');
        };
    });
    if (this.classList.contains('font-size_small')) {
        this.classList.add('font-size_active');
        book.classList.add('font-size_small');
    } else if (this.classList.contains('font-size_big')) {
        this.classList.add('font-size_active');
        book.classList.add('font-size_big');
    } else if (!this.classList.contains('font-size_big') && !this.classList.contains('font-size_small')) {
        this.classList.add('font-size_active');
    };
};

arrFontSize.forEach((e) => {
    e.addEventListener('click', changeFont);
});

arrTextColor.forEach((e) => {
    e.addEventListener('click', changeTextColor);
});

arrBgColor.forEach((e) => {
    e.addEventListener('click', changeBgColor);
});