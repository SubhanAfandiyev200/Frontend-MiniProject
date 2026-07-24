"use strict"

document.getElementById('backToTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.email-box').forEach(box => {
    const input = box.querySelector('input');
    const btn = box.querySelector('.submit-btn');
    const msg = box.parentElement.querySelector('.signupMessage');

    input.addEventListener('focus', () => btn.classList.add('active'));
    input.addEventListener('blur', () => btn.classList.remove('active'));

    if (box.tagName === 'FORM') {
        box.addEventListener('submit', e => {
            e.preventDefault();
            if (msg) msg.textContent = "Check your email for a confirmation message. Thanks for subscribing!";
        });
    } else {
        btn.addEventListener('click', () => {
            if (msg) msg.textContent = "Check your email for a confirmation message. Thanks for subscribing!";
        });
    }
});

function isMobileNav() {
    return window.matchMedia('(max-width: 991px)').matches;
}

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

const viewport = document.querySelector('.cards-viewport');
const cards = document.querySelectorAll('.product-card');
const prevBtn = document.querySelector('.slider-arrow.prev');
const nextBtn = document.querySelector('.slider-arrow.next');
function visibleCount() {
    return isPhoneNav() ? 2 : 3;
}
function cardStep() {
    return cards[1].offsetLeft - cards[0].offsetLeft;
}
function clickStep() {
    if (isPhoneNav()) return visibleCount();
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
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('active');
    });
});

const mainImageWrap = document.getElementById('mainImageWrap');
const galleryThumbs = document.getElementById('galleryThumbs');
const swatches = document.querySelectorAll('.color-swatch');
const addToCartBtn = document.getElementById('addToCartBtn');
const soldOutNotice = document.getElementById('soldOutNotice');
const shippingNote = document.querySelector('.shipping-note');
const specImage = document.getElementById('specImage');

const specImages = {
    Raven: "./assets/images/apex-slim-sleeve-raven-spec.jpg",
    Indigo: "./assets/images/apex-slim-sleeve-indigo-spec.jpg",
    Everglade: "./assets/images/apex-slim-sleeve-everglade-spec.jpg",
    Espresso: "./assets/images/apex-slim-sleeve-espresso-spec.jpg"
};

const videoThumb = {
    video: "https://www.youtube.com/embed/ENlfQ2I_DMI",
    poster: "./assets/images/apex-slim-sleeve-video-thumb.jpg"
};

const colorGalleries = {
    Raven: [
        "./assets/images/apex-slim-sleeve-raven-1.jpg",
        "./assets/images/apex-slim-sleeve-raven-2.jpg",
        "./assets/images/apex-slim-sleeve-raven-3.jpg",
        "./assets/images/apex-slim-sleeve-raven-4.jpg",
        "./assets/images/apex-slim-sleeve-raven-5.jpg",
        "./assets/images/apex-slim-sleeve-raven-6.jpg",
        "./assets/images/apex-slim-sleeve-raven-7.jpg",
        "./assets/images/apex-slim-sleeve-raven-8.jpg",
        "./assets/images/apex-slim-sleeve-raven-9.jpg",
        "./assets/images/apex-slim-sleeve-raven-10.jpg",
    ],
    Indigo: [
        "./assets/images/apex-slim-sleeve-indigo-1.jpg",
        "./assets/images/apex-slim-sleeve-indigo-2.jpg",
        "./assets/images/apex-slim-sleeve-indigo-3.jpg",
        "./assets/images/apex-slim-sleeve-indigo-4.jpg",
        "./assets/images/apex-slim-sleeve-indigo-5.jpg",
        "./assets/images/apex-slim-sleeve-indigo-6.jpg",
        "./assets/images/apex-slim-sleeve-indigo-7.jpg",
        "./assets/images/apex-slim-sleeve-indigo-8.jpg",
        "./assets/images/apex-slim-sleeve-indigo-9.jpg",
        "./assets/images/apex-slim-sleeve-indigo-10.jpg",
    ],
    Everglade: [
        "./assets/images/apex-slim-sleeve-everglade-1.jpg",
        "./assets/images/apex-slim-sleeve-everglade-2.jpg",
        "./assets/images/apex-slim-sleeve-everglade-3.jpg",
        "./assets/images/apex-slim-sleeve-everglade-4.jpg",
        "./assets/images/apex-slim-sleeve-everglade-5.jpg",
        "./assets/images/apex-slim-sleeve-everglade-6.jpg",
        "./assets/images/apex-slim-sleeve-everglade-7.jpg",
        "./assets/images/apex-slim-sleeve-everglade-8.jpg",
        "./assets/images/apex-slim-sleeve-everglade-9.jpg",
        "./assets/images/apex-slim-sleeve-everglade-10.jpg",
    ],
    Espresso: [
        "./assets/images/apex-slim-sleeve-espresso-1.jpg",
        "./assets/images/apex-slim-sleeve-espresso-2.jpg",
        "./assets/images/apex-slim-sleeve-espresso-3.jpg",
        "./assets/images/apex-slim-sleeve-espresso-4.jpg",
        "./assets/images/apex-slim-sleeve-espresso-5.jpg",
        "./assets/images/apex-slim-sleeve-espresso-6.jpg",
        "./assets/images/apex-slim-sleeve-espresso-7.jpg",
        "./assets/images/apex-slim-sleeve-espresso-8.jpg",
        "./assets/images/apex-slim-sleeve-espresso-9.jpg",
        "./assets/images/apex-slim-sleeve-espresso-10.jpg",
    ]
};

function setMainImage(src) {
    mainImageWrap.innerHTML = `<img id="mainProductImage" src="${src}" alt="Apex Slim Sleeve">`;
}

function setMainVideo(videoUrl) {
    mainImageWrap.innerHTML = `<iframe src="${videoUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

function clearActiveSwatches() {
    swatches.forEach(s => s.classList.remove('is-active'));
}

function toggleAddToCart(swatch) {
    if (swatch.classList.contains('is-sold-out')) {
        addToCartBtn.style.display = 'none';
        soldOutNotice.style.display = 'flex';
        shippingNote.style.display = 'none';
    } else {
        addToCartBtn.style.display = 'block';
        soldOutNotice.style.display = 'none';
        shippingNote.style.display = 'block';
    }
}

function renderThumbs(images) {
    const photosHtml = images.map((src, i) =>
        `<div class="thumb${i === 0 ? ' is-active' : ''}" data-img="${src}"><img src="${src}"></div>`
    ).join('');

    const videoHtml = `<div class="thumb thumb-video" data-video="${videoThumb.video}">
        <img src="${videoThumb.poster}">
        <i class="fa-solid fa-circle-play video-play-icon"></i>
    </div>`;

    galleryThumbs.innerHTML = photosHtml + videoHtml;
    attachThumbListeners();
}

function attachThumbListeners() {
    galleryThumbs.querySelectorAll('.thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            galleryThumbs.querySelectorAll('.thumb').forEach(t => t.classList.remove('is-active'));
            thumb.classList.add('is-active');

            if (thumb.classList.contains('thumb-video')) {
                setMainVideo(thumb.dataset.video);
            } else {
                setMainImage(thumb.dataset.img);
            }
        });
    });
}

swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        clearActiveSwatches();
        swatch.classList.add('is-active');

        const images = colorGalleries[swatch.dataset.color];
        renderThumbs(images);
        setMainImage(images[0]);
        specImage.src = specImages[swatch.dataset.color];

        toggleAddToCart(swatch);
    });
});

attachThumbListeners();