"use strict";

import galleryItems from "./gallery-items.js";

const createLi = (img) => {
  const li = document.createElement("li");
  return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${img.original}"
      >
        <img
          class="gallery__image"
          src="${img.preview}"
          data-source="${img.original}"
          alt="${img.description}"
        />
      </a>
    </li>`;
};

const gallery = galleryItems.reduce((acum, el) => acum + createLi(el), "");

const ul = document.querySelector(".gallery");

ul.insertAdjacentHTML("afterbegin", gallery);
