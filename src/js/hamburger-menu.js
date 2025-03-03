function initHamburgerMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    hamburgerMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
    
    dropdownItems.forEach(item => {
        const link = item.querySelector('a');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.hamburger-menu')) {
        initHamburgerMenu();
    }
});