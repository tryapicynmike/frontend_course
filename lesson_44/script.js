let curent = 1;
const slides = document.querySelectorAll('.slide');

function showslide(index){
    for (let i = 0; i< slides.length; i++){
        if(i === index){
            slides[i].classList.add('active');
        } else {
            slides[i].classList.remove('active');
        }
    }
}
setInterval(() => {
    curent = (curent +1) % slides.length;
    showslide(curent);
},3000)

showslide(curent);