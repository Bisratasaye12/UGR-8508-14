const navToggler = document.getElementById('toggler');
const navMenu = document.getElementById('nav-menu');
const cancel = document.getElementById('cancel')



navToggler.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navToggler.classList.toggle('hidden');
    cancel.classList.toggle('hidden')
});
cancel.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navToggler.classList.toggle('hidden');
    cancel.classList.toggle('hidden')
});