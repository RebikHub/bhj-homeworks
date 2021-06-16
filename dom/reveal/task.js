const arrReveal = Array.from(document.getElementsByClassName('reveal'));

window.addEventListener('scroll', onScroll)

function onScroll() {
    arrReveal.forEach((e) => {
        if (e.getBoundingClientRect().y < 928 && e.getBoundingClientRect().y > (-172)) {
            return e.classList.add('reveal_active');
        }
    })
}