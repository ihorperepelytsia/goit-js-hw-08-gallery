"use strict";

const listGallery = document.querySelector(".js-gallery");
const boxModal = document.querySelector(".lightbox");
const boxOverlay = document.querySelector(".lightbox__content");
const boxBigImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);

listGallery.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
boxOverlay.addEventListener("click", closeModalOverlay);

function openModal(event) {
  boxModal.classList.add("is-open");
  boxBigImage.src = event.target.dataset.source;
  event.preventDefault();
  window.addEventListener("keydown", closeKeyPress);
}

function closeModal() {
  boxModal.classList.remove("is-open");
  boxBigImage.src = "#";
  window.removeEventListener("keydown", closeKeyPress);
}

function closeModalOverlay(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closeModal();
}

function closeKeyPress(event) {
  if (event.code !== "Escape") {
    return;
  }
  closeModal();
}
