// Move the initialization code to a function that will be called after header loads
function initThemeToggle() {
    const toggleSwitch = document.querySelector('#checkbox');
    
    // If toggleSwitch doesn't exist, exit function
    if (!toggleSwitch) {
        console.error('Theme toggle checkbox not found');
        return;
    }
    
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    // Listen for toggle switch change
    toggleSwitch.addEventListener('change', switchTheme);
}

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
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.classList.add('theme-transition');
});

window.addEventListener('load', () => {
    // Add class to handle initial load
    document.documentElement.classList.add('theme-transition');
    
    // Remove transition class once loaded
    setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
    }, 300);
});

// Apply theme immediately to avoid flickering (do not wait for header load)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}