let items= document.querySelectorAll('.slide-item');
let currentIndex=0;
let next= document.getElementById('next');
let prev= document.getElementById('prev');

function removeActiveclass(){
    items.forEach(item => item.classList.remove('active'));
}

next.addEventListener("click",()=>{
    currentIndex= (currentIndex + 1) % items.length;
    removeActiveclass();

    items[currentIndex].classList.add('active');
});

prev.addEventListener("click",()=>{
    currentIndex=(currentIndex - 1 + items.length )% items.length;    
    removeActiveclass();
    items[currentIndex].classList.add('active');
});