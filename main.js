const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide=n=>{
    for(slide of slides){
        slide.classList.remove('active')
    }
    slides[n].classList.add('active');
};
const activeDot=n=>{
    for(dot of dots){
        dot.classList.remove('active')
    }
    dots[n].classList.add('active');
};


const nextSlide=()=>{
    if(index==slides.length-1){
        index=0;
        activeSlide(index);
        activeDot(index);
    }else{
        index++;
        activeDot(index);
        activeSlide(index);
    }

}

const prevSlide=()=>{
    if(index==0){
        index=slides.length-1;
        activeSlide(index);
        activeDot(index);
    }else{
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

dots.forEach((item,indexDot)=>{
    item.addEventListener('click',()=>{
        index=indexDot;
        activeDot(index);
        activeSlide(index);
    })
})

next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);


setInterval( nextSlide, 2000 );