document.addEventListener('DOMContentLoaded', function() {
    // Code language selector functionality
    const languageSelector = document.getElementById('language-selector');
    const sourceCode = document.getElementById('source-code');
    
    languageSelector.addEventListener('change', function() {
        // Update code class for proper highlighting
        sourceCode.className = `language-${this.value}`;
        
        // Here you would typically load different code based on selection
        // For demonstration purposes, we're just changing the class
        // In a real implementation, you might fetch different code snippets
    });
    
    // Copy to clipboard functionality
    const copyButton = document.getElementById('copy-code');
    
    copyButton.addEventListener('click', function() {
        // Get the text content
        const codeText = sourceCode.textContent;
        
        // Create a temporary textarea element to copy from
        const textarea = document.createElement('textarea');
        textarea.value = codeText;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        
        // Select and copy the text
        textarea.select();
        document.execCommand('copy');
        
        // Remove the temporary element
        document.body.removeChild(textarea);
        
        // Visual feedback for copy
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Copied!';
        this.style.backgroundColor = '#4CAF50';
        this.style.color = 'white';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            this.innerHTML = originalText;
            this.style.backgroundColor = '';
            this.style.color = '';
        }, 2000);
    });
});