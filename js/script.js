function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const typed = new Typed('.input',{
    strings:["Full Stack Developer","Laravel Developer","Vue Developer","React Developer","Wordpress Developer"],
    typedSpeed:200,
    backSpeed:100,
    loop:true
});

//Top Progress Bar
const filled = document.querySelector('.filled');

function update(){
    filled.style.width = `${((window.scrollY)/(document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);
}

update();