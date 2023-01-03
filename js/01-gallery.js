import {galleryItems} from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const cardsMakeup = createImgCards(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", cardsMakeup);

function createImgCards(galleryItems) {
    return galleryItems
        .map(({preview, original, description}) => {
            return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
        })
        .join("");
}
console.log(galleryItems);
