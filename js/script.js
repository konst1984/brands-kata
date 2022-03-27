"use strict";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 600,
  spaceBetween: 16,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    // dynamicBullets: true,
    // dynamicMainBullets: 7,
  },
  mousewheel: {
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

document
  .querySelector(".btn-next--brands")
  .addEventListener("click", function () {
    let panel = this.previousElementSibling;
    if (panel.clientHeight > 176) {
      this.innerHTML =
        ' <img class="btn-next__icon" src="../assets/images/expand.svg" alt="Двойная стрелка вниз">Показать все';
      panel.style.maxHeight = "176px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.innerHTML =
        ' <img class="btn-next__icon" src="../assets/images/expand-up.svg" alt="Двойная стрелка вверх">Скрыть';
    }
  });
