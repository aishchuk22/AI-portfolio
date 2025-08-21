
document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.mobile-burger-icon');
    const mobileMenu = document.querySelector('.menu');

    burgerIcon.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });

    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    });
});