// Wait for the DOM content to be fully loaded before executing the JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the gallery container, lightbox, lightbox image, and close button
    var gallery = document.querySelector('.gallery');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var closeBtn = document.getElementById('close');

    // Add a click event listener to the gallery container
    gallery.addEventListener('click', function(event) {
        // Check if the clicked element is an image
        if (event.target.tagName === 'IMG') {
            // Display the lightbox
            lightbox.style.display = 'block';
            // Set the source of the lightbox image to the clicked image source
            lightboxImg.src = event.target.src;
        }
    });

    // Add a click event listener to the close button
    closeBtn.addEventListener('click', function() {
        // Hide the lightbox when the close button is clicked
        lightbox.style.display = 'none';
    });
});