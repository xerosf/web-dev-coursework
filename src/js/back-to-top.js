// Back to Top functionality
function initBackToTop() {
    const backToTopBtn = document.querySelector('#backToTopBtn');
    
    // If back to top button doesn't exist, exit function
    if (!backToTopBtn) {
        console.error('Back to top button not found');
        return;
    }

    // Show/hide button based on scroll position
    function toggleBackToTopVisibility() {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    // Scroll to top with smooth animation
    function scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add event listeners
    window.addEventListener('scroll', toggleBackToTopVisibility);
    backToTopBtn.addEventListener('click', scrollToTop);
    
    // Initial check for scroll position
    toggleBackToTopVisibility();
}

// Apply functionality when DOM is loaded or when component is dynamically added
document.addEventListener('DOMContentLoaded', function() {
    // This will be called if the component is already in the DOM when page loads
    initBackToTop();
});