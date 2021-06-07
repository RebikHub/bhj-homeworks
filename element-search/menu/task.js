const menuItem = document.getElementsByClassName('menu__item');
const menuLink = document.getElementsByClassName('menu__link');
const itemActive = document.querySelector('.menu_active');

console.log(itemActive);

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        if (menuItem[i].querySelector('.menu_sub') !== null && menuItem[i].querySelector('.menu_active') === null) {
            menuItem[i].querySelector('.menu_sub').classList.add('menu_active');
            // menuItem.array.forEach(element => {
            //     return element == itemActive
            // });
            return menuItem[i].href = false;
        } else if (menuItem[i].querySelector('.menu_sub') !== null && menuItem[i].querySelector('.menu_active') !== null) {
            menuItem[i].querySelector('.menu_sub').classList.remove('menu_active');
            return menuItem[i].href = false;
        }
    }
}