const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('ba-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('ba-x');
    navlist.classList.remove('open');
}