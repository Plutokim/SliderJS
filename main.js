let sdvig =0;
let width;
let active =0;
const control = document.querySelectorAll('.container');
const images = document.querySelectorAll('.slider .slider-line img')
const sliderLine = document.querySelector('.slider-line');
function init(){
    width=document.querySelector('.slider').offsetWidth;
    sliderLine.style.width=width*images.length+'px';
    for(let i =0; i<images.length; i++){
        images[i].style.width=width+'px';
        images[i].style.height='100%'; 
    }
    roll();
}
window.addEventListener('resize',init)
init();
document.querySelector('.previous').addEventListener('click',function(){
    active--;
    if (active<0){
    active=images.length-1;
    }
    roll();
})
document.querySelector('.next').addEventListener('click',function(){
active++;
if (active>=images.length){
active=0;
}
roll();
})
function roll(){
    sliderLine.style.transform='translate(-'+active*width+'px)';
}
