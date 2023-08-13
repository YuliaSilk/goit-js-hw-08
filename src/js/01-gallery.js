// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const container = document.querySelector('.gallery')
// console.log(container);
function createMarkup(arr) {
return arr.map(({ preview, original, description }) => `
<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join('')
}

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

// console.log(SimpleLightbox);
new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionsDelay: 250,
});
    
console.log(galleryItems);
