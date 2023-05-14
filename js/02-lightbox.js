import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImageMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createImageMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class = "gallery__item" href = "${original}">
        <img class = "gallery__image" src = "${preview}" alt = "${description}" />
        </a>`;
    })
    .join("");
  return markup;
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
