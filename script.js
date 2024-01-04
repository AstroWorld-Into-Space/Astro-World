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

//Cookies

const cookieBox = document.querySelector(".cook-wrapper");
const buttons = document.querySelectorAll(".c-button");

const executeCode = () =>{
    //if the cookie contains AstroWorld, the code will be ruturned and the code below will not run
    if (document.cookie.includes("AstroWorld")) return;

    cookieBox.classList.add("show");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            //if the button contains acceptBtn
            if (button.id == "acceptBtn"){
                //set cookie for 1 month. 60 = 1 min, 60 = 1 hour, 24 = 1 day, 30 = 30 days
                document.cookie = "cookieBy = AstroWorld; max-age=" + 60 * 60 * 24 * 30;
            }
        })
    })
}


//will execute the code
window.addEventListener("load",executeCode);
