document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navMenu = document.querySelector('nav ul');
    
    menuIcon.addEventListener('click', () => {
        navMenu.style.opacity = '1';
        navMenu.style.pointerEvents = 'auto';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', () => {
        navMenu.style.opacity = '0';
        navMenu.style.pointerEvents = 'none';
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    });
});
