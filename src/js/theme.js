// Check for saved user preference, if any, on load of the website
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    // Listen for toggle switch change
    toggleSwitch.addEventListener('change', switchTheme);
});

// Function that changes the theme, and sets a localStorage variable to track the theme between page loads
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Prevent transition flicker
document.documentElement.classList.add('theme-transition');
window.addEventListener('load', () => {
    // Add class to handle initial load
    document.documentElement.classList.add('theme-transition');
    
    // Remove transition class once loaded
    setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
    }, 300);
});