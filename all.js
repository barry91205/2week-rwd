document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('.navLinks');

    menuIcon.addEventListener('click', () => {
        navLinks.toggle('active');
    });
});