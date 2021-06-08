const arrayItem = Array.from(document.getElementsByClassName('slider__item'));
const arrowLeft = document.getElementsByClassName('slider__arrow_prev');
const arrowRight = document.getElementsByClassName('slider__arrow_next');
const arrayDots = Array.from(document.getElementsByClassName('slider__dot'));
let numberImage = 0;
arrayDots[numberImage].classList.add('slider__dot_active');

arrowLeft[0].onclick = function() {
    arrayItem.forEach((e, i) => {
        if (e.classList.contains('slider__item_active') && i === 0) {
            e.classList.remove('slider__item_active');
            arrayDots[i].classList.remove('slider__dot_active');
            numberImage = arrayItem.length - 1;
        } else if (e.classList.contains('slider__item_active') && i !== 0) {
            e.classList.remove('slider__item_active');
            arrayDots[i].classList.remove('slider__dot_active');
            numberImage = i - 1;
        }
    })
    arrayDots[numberImage].classList.add('slider__dot_active');
    return arrayItem[numberImage].classList.add('slider__item_active')
}

arrowRight[0].onclick = function() {
    arrayItem.forEach((e, i) => {
        if (e.classList.contains('slider__item_active') && i < 4) {
            e.classList.remove('slider__item_active');
            arrayDots[i].classList.remove('slider__dot_active');
            numberImage = i + 1;
        } else if (e.classList.contains('slider__item_active') && i === 4) {
            e.classList.remove('slider__item_active');
            arrayDots[i].classList.remove('slider__dot_active');
            numberImage = 0;
        }
    })
    arrayDots[numberImage].classList.add('slider__dot_active');
    return arrayItem[numberImage].classList.add('slider__item_active')
}

for (let i = 0; i < arrayDots.length; i++) {
    arrayDots[i].onclick = function() {
        arrayDots.forEach(element => {
            if (element.classList.contains('slider__dot_active') && element !== arrayDots[i]) {
                element.classList.remove('slider__dot_active');
            }
        })
        arrayItem.forEach(element => {
            if (element.classList.contains('slider__item_active')) {
                element.classList.remove('slider__item_active');
            }
        })
        arrayDots[i].classList.add('slider__dot_active');
        return arrayItem[i].classList.add('slider__item_active');
    }
}