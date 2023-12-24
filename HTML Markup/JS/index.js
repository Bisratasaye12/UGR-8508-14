const navToggler = document.getElementById('toggler');
const navMenu = document.getElementById('main-nav');



navToggler.addEventListener('click', () => {
    navMenu.classList.toggle('d-none');
});
