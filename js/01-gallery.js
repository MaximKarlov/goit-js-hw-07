import {galleryItems} from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from "basiclightbox";

const galleryRef = document.querySelector(".gallery");
const cardsMakeup = createImgCards(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", cardsMakeup);

function createImgCards(galleryItems) {
    return galleryItems
        .map(({preview, original, description}) => {
            return `<div class="gallery__item">
            <a class="gallery__link" rel="noopener noreferrer">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
            </a>
            </div>`;
        })
        .join("");
}

//
galleryRef.addEventListener("click", makeModal);

function makeModal(evt) {
    const imgVerification = evt.target.nodeName;
    if (imgVerification !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" alt= "fuck, its not working">
    `);
    instance.show();
}
