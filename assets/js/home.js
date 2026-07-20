"use strict"

document.querySelectorAll('.email-box').forEach(box => {
    const input = box.querySelector('input');
    const btn = box.querySelector('.submit-btn');
    const msg = box.parentElement.querySelector('.signupMessage');

    input.addEventListener('focus', () => btn.classList.add('active'));
    input.addEventListener('blur', () => btn.classList.remove('active'));
    btn.addEventListener('click', () => {
        msg.textContent = "Check your email for a confirmation message. Thanks for subscribing!";
    });
});

const track = document.querySelector('.cards-track');
const cards = document.querySelectorAll('.product-card');
const prevBtn = document.querySelector('.slider-arrow.prev');
const nextBtn = document.querySelector('.slider-arrow.next');
let index = 0;
const visible = 3;
function updateSlider() {
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    track.style.transform = `translateX(${-index * step}px)`;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index >= cards.length - visible;
}
nextBtn.addEventListener('click', () => {
    if (index < cards.length - visible) { index++; updateSlider(); }
});
prevBtn.addEventListener('click', () => {
    if (index > 0) { index--; updateSlider(); }
});
updateSlider();

const headerNavbar = document.querySelector('.header-navbar');
const navItems = document.querySelectorAll('.nav-item');
let isMenuOpen = false;
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (isMenuOpen) {
            headerNavbar.classList.add('switching');
        } else {
            headerNavbar.classList.remove('switching');
        }
        isMenuOpen = true;
    });
});
headerNavbar.addEventListener('mouseleave', () => {
    isMenuOpen = false;
    headerNavbar.classList.remove('switching');
});

const searchIconBtn = document.querySelector('.search-icon-btn');
const searchOverlay = document.querySelector('.search-overlay');
const searchOverlayClose = document.querySelector('.search-overlay-close');
const searchOverlayInput = document.querySelector('.search-overlay-input');
const searchUnderline = document.querySelector('.search-underline');
const searchTextMeasure = document.querySelector('.search-text-measure');
searchIconBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    setTimeout(() => searchOverlayInput.focus(), 300);
});
function closeSearchOverlay() {
    searchOverlay.classList.remove('active');
    searchOverlayInput.value = '';
    searchUnderline.style.width = '0px';
}
searchOverlayClose.addEventListener('click', closeSearchOverlay);
searchOverlayInput.addEventListener('input', () => {
    searchTextMeasure.textContent = searchOverlayInput.value;
    searchUnderline.style.width = searchTextMeasure.offsetWidth + 'px';
});
const cartIconBtn = document.querySelector('.cart-icon-wrap');
const cartSidebarOverlay = document.querySelector('.cart-sidebar-overlay');
const cartSidebarClose = document.querySelector('.cart-sidebar-close');
const cartSidebarBackdrop = document.querySelector('.cart-sidebar-backdrop');

cartIconBtn.addEventListener('click', () => {
    cartSidebarOverlay.classList.remove('hide-cart-sidebar');
    setTimeout(() => {
        cartSidebarOverlay.classList.add('open');
    }, 10);
});

function closeCart() {
    cartSidebarOverlay.classList.remove('open');
    cartSidebarOverlay.classList.add('hide-cart-sidebar');
}

cartSidebarClose.addEventListener('click', closeCart);
cartSidebarBackdrop.addEventListener('click', closeCart);