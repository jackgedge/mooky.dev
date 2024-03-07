// Get all h1 elements with the class "hover-heading"
var h1Elements = document.querySelectorAll('.hover-heading');

// Loop through each h1 element
h1Elements.forEach(function(h1Element) {
    // Add mouseover event listener
    h1Element.addEventListener('mouseover', function() {
        // Make text bold
        this.style.fontWeight = 'bold';
        // Make text horizontal
        // Make text italic
        this.style.fontStyle = 'italic';
    });

    // Add mouseout event listener
    h1Element.addEventListener('mouseout', function() {
        // Remove bold style
        this.style.fontWeight = 'normal';
        // Reset rotation
        this.style.fontStyle = 'normal';
    });
});