"use strict"

const emailInput = document.getElementById('emailInput');
const submitBtn = document.getElementById('submitBtn');
emailInput.addEventListener('focus', function () {
    submitBtn.classList.add('active');
});
emailInput.addEventListener('blur', function () {
    submitBtn.classList.remove('active');
});
submitBtn.addEventListener('click', function () {
    document.querySelector('.signupMessage').textContent = "Check your email for a confirmation message. Thanks for subscribing!";
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