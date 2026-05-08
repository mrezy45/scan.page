window.addEventListener('load', function() {
    // Wait for 4 seconds
    setTimeout(function() {
        const loader = document.getElementById('loading-screen');
        const content = document.getElementById('main-content');

        // Hide the loader
        loader.style.display = 'none';
        
        // Show the main content
        content.style.display = 'block';
    }, 4000); 
});