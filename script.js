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
<<<<<<< HEAD
    body.classList.toggle('light-theme');
    profileTitleLink1.classList.toggle('light-theme');
    profileTitleLink2.classList.toggle('light-theme');
    seperator.classList.toggle('light-theme');
    openMenu.classList.toggle('light-theme');
    profileTitle.classList.toggle('light-theme');
});
=======
    body.classList.toggle('dark-theme');
});

//reveal web elment by scrolling

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++){
        var winheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < winheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

// loading effect

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})
>>>>>>> 7c3a02f635375ae6d0225fa05337e02f1c6eed6c
