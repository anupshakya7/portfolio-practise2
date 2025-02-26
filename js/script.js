function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var typed = new Typed('.input',{
    strings:["Full Stack Developer","Laravel Developer","Vue Developer","React Developer","Wordpress Developer"],
    typedSpeed:200,
    backSpeed:100,
    loop:true
});