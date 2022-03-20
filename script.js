"use strict"

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 600,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    centeredSlidesBounds: true,
    slideToClickedSlide: true,
    watchOverFlow: true,
    watchSlidesProgress: true,
    freeMode: true,
    obserever: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicMainBullets: 7,
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

document.querySelector('.btn-next--brands').addEventListener('click', function (){
    let panel = this.previousElementSibling;
    if (panel.clientHeight > 176) {
    this.innerHTML = ' <img class="btn-next__icon" src="images/expand.svg" alt="Двойная стрелка вниз">Показать все';
        panel.style.maxHeight = "176px";
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.innerHTML = ' <img class="btn-next__icon" src="images/expand.svg" alt="Двойная стрелка вниз">Скрыть';
    }
})