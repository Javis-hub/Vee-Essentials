let bar = document.getElementById("bar");
let nav = document.getElementById("openNav");
let close = document.getElementById("close");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); 
    })
} 
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});






