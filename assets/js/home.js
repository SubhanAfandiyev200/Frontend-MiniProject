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