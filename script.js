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

// dark mode

const body = document.querySelector('.containerWrapper');
const toggleBtn = document.getElementById('toggle');
const profileTitleLink1 = document.querySelector('.profileTitleLink1');
const profileTitleLink2 = document.querySelector('.profileTitleLink2');
const seperator = document.querySelector('.seperator');
const profileTitle = document.querySelector('.profileTitle')

toggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    profileTitleLink1.classList.toggle('light-theme');
    profileTitleLink2.classList.toggle('light-theme');
    seperator.classList.toggle('light-theme');
    openMenu.classList.toggle('light-theme');
    profileTitle.classList.toggle('light-theme');
});