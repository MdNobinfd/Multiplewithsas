// for navber active start 
const activePage =window.location.pathname;
const naveLinks = document.querySelectorAll('nav a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('activa');
    }
});
// for navber active end 
// for navber backgorund color
let navber = document.querySelector('nav')
let navLink = document.querySelector('nav-link')
window.addEventListener('scroll', () =>{
    let scrollwidth = this.window.scrollY;
    if (scrollwidth > 100) {
        navber.classList.add('scroll-color')
    } else{
        navber.classList.remove('scroll-color')
    }
});