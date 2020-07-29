const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const boots = document.querySelectorAll('.boot');
const gradients = document.querySelectorAll('.gradient');
const bootBg = document.querySelectorAll('.bootBackground');

let prevColor= "blue";
let animationEnd = true;

function changeSize(){
sizes.forEach(size=> size.classList.remove('active'));
this.classList.add('active');
}
function changeColor(){
    if(!animationEnd) return;
    let primary= this.getAttribute('primary');
    let color= this.getAttribute('color');
    let boot = document.querySelector(`.boot[color= "${color}"]`);
    let gradient = document.querySelector(`.gradient[color= "${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color= "${prevColor}"]`);

    colors.forEach(c=> c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary' , primary);

    boots.forEach(s=>s.classList.remove('show'));
    boot.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = true;

    gradient.addEventListener('animatedend' , ()=>{
        animationEnd=true;
    });
}
sizes.forEach(size=> size.addEventListener('click' , changeSize));
colors.forEach(c=> c.addEventListener('click' , changeColor));

let x = window.matchMedia("(max-width:1000px)");

function changeHeight(){
    if (x.matches) {
        let jerseyHeight = jerseys[0].offsetHeight;
        bootBg.style.height= `${jerseyHeight *0.9}px`;
    }
    else{
        bootBg.style.height = "475px"; 
    }
}
changeHeight();

window.addEventListener('resize', changeHeight);