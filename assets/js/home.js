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

const viewport = document.querySelector('.cards-viewport');
const cards = document.querySelectorAll('.product-card');
const prevBtn = document.querySelector('.slider-arrow.prev');
const nextBtn = document.querySelector('.slider-arrow.next');
function visibleCount() {
    if (window.matchMedia('(max-width: 576px)').matches) return 2;
    if (window.matchMedia('(max-width: 991px)').matches) return 3;
    return 3;
}
function cardStep() {
    return cards[1].offsetLeft - cards[0].offsetLeft;
}
function clickStep() {
    if (window.matchMedia('(max-width: 576px)').matches) return visibleCount();
    return 1;
}
function updateSlider() {
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    prevBtn.disabled = viewport.scrollLeft <= 1;
    nextBtn.disabled = viewport.scrollLeft >= maxScroll - 1;
}
nextBtn.addEventListener('click', () => {
    viewport.scrollBy({ left: cardStep() * clickStep(), behavior: 'smooth' });
});
prevBtn.addEventListener('click', () => {
    viewport.scrollBy({ left: -cardStep() * clickStep(), behavior: 'smooth' });
});
viewport.addEventListener('scroll', updateSlider);
window.addEventListener('resize', updateSlider);
updateSlider();

const headerNavbar = document.querySelector('.header-navbar');
const navItems = document.querySelectorAll('.nav-item');
let isMenuOpen = false;
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (isMobileNav()) return;
        if (isMenuOpen) {
            headerNavbar.classList.add('switching');
        } else {
            headerNavbar.classList.remove('switching');
        }
        isMenuOpen = true;
    });
});
headerNavbar.addEventListener('mouseleave', () => {
    if (isMobileNav()) return;
    isMenuOpen = false;
    headerNavbar.classList.remove('switching');
});

function isMobileNav() {
    return window.matchMedia('(max-width: 991px)').matches;
}

navItems.forEach(item => {
    const topLink = item.querySelector(':scope > a');
    topLink.addEventListener('click', (e) => {
        if (!isMobileNav()) return;
        e.preventDefault();
        const wasOpen = item.classList.contains('open');
        navItems.forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
    });
});

const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('change', () => {
    if (!navToggle.checked) {
        navItems.forEach(i => i.classList.remove('open'));
    }
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

function isPhoneNav() {
    return window.matchMedia('(max-width: 576px)').matches;
}

document.querySelectorAll('.footer-col > h4').forEach(heading => {
    heading.addEventListener('click', () => {
        if (!isPhoneNav()) return;
        heading.parentElement.classList.toggle('open');
    });
});