import items from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
// console.log(gallery);
const imagesLink = document.querySelectorAll(".gallery__link");
console.log(imagesLink);
let images = document.querySelectorAll(".gallery__image");
console.log(images);
const modalImage = document.querySelector(".lightbox__image");
const lightbox = document.querySelector(".lightbox");
console.log(lightbox);
const lightboxContent = document.querySelector(".lightbox__content");
console.log(lightboxContent);
const lightboxImage = document.querySelector(".lightbox__image");
const btnLeft = document.querySelector(".arrow_left");
const btnRight = document.querySelector(".arrow_right");
const btnClose = document.querySelector(".lightbox__button");


let images2 = []
items.forEach(({preview, description, original}) => {
  let ul = document.querySelector('.gallery')
  ul.insertAdjacentHTML(
    "afterbegin",
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
  </li>`
  );
  images2.push(original)
  }); 
  console.log(images2);



// let img01 = document.querySelector('.img01')
// console.log(img01);

// img01.addEventListener('click', onClickImage)

// function onClickImage (event) {
//     if(event.target) {
//         lightbox.classList.add('is-open')
//     }
//     lightboxImage.src = img01.src
// }
// for (key of images2) 
// console.log(key)
gallery.addEventListener("click", onClickImage);
function onClickImage(e) {
  if (e.target) {
    lightbox.classList.add("is-open");
  }
  let imageRef = e.target
  lightboxImage.src = imageRef.dataset.source

}
btnRight.addEventListener("click", clickBtnRight);
let num = 0;
function clickBtnRight() {
  num++;
  if (num == images2.length) {
    num = 0;
  }
  lightboxImage.src = images2[num];
}
btnLeft.addEventListener("click", clickBtnLeft);

function clickBtnLeft() {
  num--;
  if (num == -1) {
    num = images2.length - 1;
  }
  lightboxImage.src = images2[num];
}

window.addEventListener("keydown", arrowLeft);

function arrowLeft(event) {
  if (event.code == "ArrowLeft") {
    num--;
    if (num == -1) {
      num = images2.length - 1;
    }
    lightboxImage.src = images2[num];
  }
}

window.addEventListener("keydown", arrowRight);
function arrowRight(event) {
  if (event.code == "ArrowRight") {
    num++;
    if (num == images2.length) {
      num = 0;
    }
    lightboxImage.src = images2[num];
  }
}
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    lightbox.classList.remove("is-open");
  }
});
window.addEventListener("click", (event) => {
  let nodeName = event.target.nodeName;
  console.log(nodeName);
  if (nodeName === "HTML") {
    lightbox.classList.remove("is-open");
  }
  if (nodeName === "DIV") {
    lightbox.classList.remove("is-open");
  }
});
btnClose.addEventListener("click", () => {
  lightbox.classList.remove("is-open");
});
