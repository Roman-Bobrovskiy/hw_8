let gallery = document.querySelector('.gallery')
console.log(gallery);
let imagesLink = document.querySelectorAll('.gallery__link')
console.log(imagesLink);
let images = gallery.querySelectorAll('.gallery__image')
console.log(images);
let modalImage = document.querySelector('.lightbox__image')
let lightbox = document.querySelector('.lightbox')
console.log(lightbox);
let lightboxContent = document.querySelector('.lightbox__content')
console.log(lightboxContent);
let lightboxImage = document.querySelector('.lightbox__image')
let btnLeft = document.querySelector('.arrow_left')
let btnRight = document.querySelector('.arrow_right')
let btnClose = document.querySelector('.lightbox__button')

// let img01 = document.querySelector('.img01')
// console.log(img01);

// img01.addEventListener('click', onClickImage)

// function onClickImage (event) {
//     if(event.target) {
//         lightbox.classList.add('is-open')
//     }
//     lightboxImage.src = img01.src
// }
for(key of images)
key.addEventListener('click', onClickImage)
function onClickImage (e) {
    
    if(e.target) {
        lightbox.classList.add('is-open')
        
    }
    lightboxImage.src = this.src
    
}
btnRight.addEventListener ('click', clickBtnRight)
let num = 0
function clickBtnRight () {
    num++
    if(num == images.length){num = 0}
    lightboxImage.src = images[num].src
}
btnLeft.addEventListener ('click', clickBtnLeft)

function clickBtnLeft () {
    num--
    if(num == -1){num = images.length-1 }
    lightboxImage.src = images[num].src
}

window.addEventListener('keydown', arrowLeft);

function arrowLeft (event) {
    if(event.code == "ArrowLeft"){
    num--
    if(num == -1){num = images.length-1 }
    lightboxImage.src = images[num].src
    }
    
}

window.addEventListener('keydown', arrowRight);
function arrowRight (event){
    if(event.code == "ArrowRight"){
    num++
    if(num == images.length){num = 0}
    lightboxImage.src = images[num].src
    }
}
window.addEventListener('keydown', (event) => {
    if(event.code === "Escape") {
        lightbox.classList.remove('is-open')
    }
})
window.addEventListener('click', (event)=>{
    let nodeName = event.target.nodeName
        console.log(nodeName);
        if(nodeName === 'HTML'){
            lightbox.classList.remove('is-open')
        }
        if(nodeName === 'DIV'){
            lightbox.classList.remove('is-open')
        }
 });
 btnClose.addEventListener('click', () => {
    lightbox.classList.remove('is-open')
 })