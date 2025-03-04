// Ensure header is positioned correctly
document.addEventListener('DOMContentLoaded', function() {
    // Function to adjust body padding based on header height
    function adjustBodyPadding() {
        const header = document.querySelector('header');
        if (header) {
            // Get the actual height of the header
            const headerHeight = header.offsetHeight;
            // Set the body padding-top to match the header height
            document.body.style.paddingTop = headerHeight + 'px';
        }
    }

    // Run on page load
    adjustBodyPadding();
    
    // Run when window is resized
    window.addEventListener('resize', adjustBodyPadding);
    
    // Run when orientation changes (for mobile devices)
    window.addEventListener('orientationchange', adjustBodyPadding);
});