import {galleryItems} from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
// galleryRef.insertAdjacentHTML("beforeend", cardsMakeup);

function createImgCards(galleryItems) {
    return galleryItems
        .map(({preview, original, description}) => {
            return `<a class="gallery__item" rel="noopener noreferrer" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt = "${description}"
     "
    />
  </a>`;
        })
        .join("");
}

const cardsMakeup = createImgCards(galleryItems);
galleryRef.innerHTML = cardsMakeup;

const gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
});
