
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbarr');
let containeractIcon = document.querySelector('#containeract-icon');
let containeractForm = document.querySelector('#containeract-form');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('open');
}


document.addEventListener('click', (event) => {
    if (!containeractForm.containerains(event.target) && !containeractIcon.containerains(event.target)) {
        containeractForm.classList.remove('open');
        containeractIcon.classList.remove('fa-times');
    }
});


// Dropdown functionality
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

dropdownToggle.addEventListener('click', () => {
    dropdown.classList.toggle('active');
    dropdownToggle.classList.toggle('fa-times'); // Add this line
});

// Close dropdown when clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-toggle') && !event.target.closest('.dropdown')) {
        dropdown.classList.remove('active');
        dropdownToggle.classList.remove('fa-times'); // Add this line
    }
});
// Close dropdown when clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-toggle') && !event.target.closest('.dropdown')) {
        dropdown.classList.remove('active');
        dropdownToggle.classList.remove('fa-times');
    }
});

