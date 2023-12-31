// mobile menu

const mainMenu = document.querySelector('.menuList');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100vh';
}

const body = document.querySelector('.containerWrapper');
const toggleBtn = document.getElementById('toggle');

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});