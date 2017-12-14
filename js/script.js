let menuVisibility = document.getElementById('menu');

function clicked(clickedButton) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(clickedButton).classList.add('active');
    menuVisibility.style.visibility = 'hidden';
}

function clickedMenuButton() {
    if (menuVisibility.style.visibility === '') {
        menuVisibility.style.visibility = 'visible';
    } else if (menuVisibility.style.visibility === 'hidden') {
        menuVisibility.style.visibility = 'visible';
    } else {
        menuVisibility.style.visibility = 'hidden';
    }
}
