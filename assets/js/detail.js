"use strict"

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

// Specifications-tab dimension diagram, one per color. Just save each downloaded
// photo using the exact filename below - no code changes needed.
const specImages = {
    Raven: "./assets/images/apex-slim-sleeve-raven-spec.jpg",
    Indigo: "./assets/images/apex-slim-sleeve-indigo-spec.jpg",
    Everglade: "./assets/images/apex-slim-sleeve-everglade-spec.jpg",
    Espresso: "./assets/images/apex-slim-sleeve-espresso-spec.jpg"
};

const videoThumb = {
    video: "https://www.youtube.com/embed/ENlfQ2I_DMI",
    poster: "./assets/images/apex-slim-sleeve-video-thumb.jpg" // 41/41 - video poster frame
};

// 40 real photos needed total (10 per color) + the video poster above = 41 files.
// Save each downloaded photo using the exact filename on its line.
const colorGalleries = {
    Raven: [
        "./assets/images/apex-slim-sleeve-raven-1.jpg",  // 1/41
        "./assets/images/apex-slim-sleeve-raven-2.jpg",  // 2/41
        "./assets/images/apex-slim-sleeve-raven-3.jpg",  // 3/41
        "./assets/images/apex-slim-sleeve-raven-4.jpg",  // 4/41
        "./assets/images/apex-slim-sleeve-raven-5.jpg",  // 5/41
        "./assets/images/apex-slim-sleeve-raven-6.jpg",  // 6/41
        "./assets/images/apex-slim-sleeve-raven-7.jpg",  // 7/41
        "./assets/images/apex-slim-sleeve-raven-8.jpg",  // 8/41
        "./assets/images/apex-slim-sleeve-raven-9.jpg",  // 9/41
        "./assets/images/apex-slim-sleeve-raven-10.jpg", // 10/41
    ],
    Indigo: [
        "./assets/images/apex-slim-sleeve-indigo-1.jpg",  // 11/41
        "./assets/images/apex-slim-sleeve-indigo-2.jpg",  // 12/41
        "./assets/images/apex-slim-sleeve-indigo-3.jpg",  // 13/41
        "./assets/images/apex-slim-sleeve-indigo-4.jpg",  // 14/41
        "./assets/images/apex-slim-sleeve-indigo-5.jpg",  // 15/41
        "./assets/images/apex-slim-sleeve-indigo-6.jpg",  // 16/41
        "./assets/images/apex-slim-sleeve-indigo-7.jpg",  // 17/41
        "./assets/images/apex-slim-sleeve-indigo-8.jpg",  // 18/41
        "./assets/images/apex-slim-sleeve-indigo-9.jpg",  // 19/41
        "./assets/images/apex-slim-sleeve-indigo-10.jpg", // 20/41
    ],
    Everglade: [
        "./assets/images/apex-slim-sleeve-everglade-1.jpg",  // 21/41
        "./assets/images/apex-slim-sleeve-everglade-2.jpg",  // 22/41
        "./assets/images/apex-slim-sleeve-everglade-3.jpg",  // 23/41
        "./assets/images/apex-slim-sleeve-everglade-4.jpg",  // 24/41
        "./assets/images/apex-slim-sleeve-everglade-5.jpg",  // 25/41
        "./assets/images/apex-slim-sleeve-everglade-6.jpg",  // 26/41
        "./assets/images/apex-slim-sleeve-everglade-7.jpg",  // 27/41
        "./assets/images/apex-slim-sleeve-everglade-8.jpg",  // 28/41
        "./assets/images/apex-slim-sleeve-everglade-9.jpg",  // 29/41
        "./assets/images/apex-slim-sleeve-everglade-10.jpg", // 30/41
    ],
    Espresso: [
        "./assets/images/apex-slim-sleeve-espresso-1.jpg",  // 31/41
        "./assets/images/apex-slim-sleeve-espresso-2.jpg",  // 32/41
        "./assets/images/apex-slim-sleeve-espresso-3.jpg",  // 33/41
        "./assets/images/apex-slim-sleeve-espresso-4.jpg",  // 34/41
        "./assets/images/apex-slim-sleeve-espresso-5.jpg",  // 35/41
        "./assets/images/apex-slim-sleeve-espresso-6.jpg",  // 36/41
        "./assets/images/apex-slim-sleeve-espresso-7.jpg",  // 37/41
        "./assets/images/apex-slim-sleeve-espresso-8.jpg",  // 38/41
        "./assets/images/apex-slim-sleeve-espresso-9.jpg",  // 39/41
        "./assets/images/apex-slim-sleeve-espresso-10.jpg", // 40/41
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

// rebuilds the whole bottom thumbnail strip with the given color's photo set
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

// color swatch click -> swaps the ENTIRE thumbnail strip to that color's photos + updates main image + toggles sold-out email box
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