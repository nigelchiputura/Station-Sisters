import { getImage } from "./utilities.js";
import { createListitem } from "./utilities.js";

const modal = document.getElementById("product-modal");
const closeBtn = document.querySelector(".modal-close");
const carousel = $("#product-carousel");

export function openProductModal(
  images,
  title,
  description,
  features,
  liveDemoLink
) {
  carousel.trigger("destroy.owl.carousel");
  carousel.html("");

  // inject images
  images.forEach((img) => {
    carousel.append(`
            <div class="item">
                <img src="${getImage(`gallery/${img}`)}" alt="">
            </div>
        `);
  });

  modal.querySelector("h2").textContent = title;
  modal.querySelector("p").textContent = description;

  let featuresList = modal.querySelector("ul");
  for (let i = 0; i < features.length; i++) {
    createListitem(featuresList, features[i]);
  }

  modal.querySelector("#live-demo").setAttribute("href", liveDemoLink);

  // Reinitialize Owl
  carousel.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2500,
  });

  modal.style.display = "block";
}

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
