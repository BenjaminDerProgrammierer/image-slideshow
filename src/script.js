const slideshowElement = document.getElementById('slideshow');
const imageElement = document.getElementsByClassName('slideshow-image')[0];

// Ten sample images from a placeholder service
// const images = [
//     { url: 'https://placehold.co/800x600?text=Image+1', alt: 'Image 1' },
//     { url: 'https://placehold.co/800x600?text=Image+2', alt: 'Image 2' },
//     { url: 'https://placehold.co/800x600?text=Image+3', alt: 'Image 3' },
//     { url: 'https://placehold.co/800x600?text=Image+4', alt: 'Image 4' },
//     { url: 'https://placehold.co/800x600?text=Image+5', alt: 'Image 5' },
//     { url: 'https://placehold.co/800x600?text=Image+6', alt: 'Image 6' },
//     { url: 'https://placehold.co/800x600?text=Image+7', alt: 'Image 7' },
//     { url: 'https://placehold.co/800x600?text=Image+8', alt: 'Image 8' },
//     { url: 'https://placehold.co/800x600?text=Image+9', alt: 'Image 9' },
//     { url: 'https://placehold.co/800x600?text=Image+10', alt: 'Image 10' }
// ];

// Ten sushi images from unsplash.com
const images = [
    { url: 'images/david-foodphototasty-8nFtscE1D_w-unsplash.jpg', alt: 'Image 1', },
    { url: 'images/douglas-lopez-vlx0BwZlUXQ-unsplash.jpg', alt: 'Image 2' },
    { url: 'images/jakub-dziubak-iOHJKJqO6E0-unsplash.jpg', alt: 'Image 3' },
    { url: 'images/kyle-head-PW8K-W-Kni0-unsplash.jpg', alt: 'Image 4' },
    { url: 'images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg', alt: 'Image 5' },
    { url: 'images/mahmoud-fawzy-EqoCUzG9200-unsplash.jpg', alt: 'Image 6' },
    { url: 'images/mahmoud-fawzy-MgvByrhYz24-unsplash.jpg', alt: 'Image 7' },
    { url: 'images/mahmoud-fawzy-n1DePkKznLY-unsplash.jpg', alt: 'Image 8' },
    { url: 'images/riccardo-bergamini-O2yNzXdqOu0-unsplash.jpg', alt: 'Image 9' },
    { url: 'images/vinicius-benedit--1GEAA8q3wk-unsplash.jpg', alt: 'Image 10' }
];

let currentIndex = 0;

// Initial display
showImage(images[currentIndex]);
setInterval(incrementIndex, 5000);

// Click to advance
slideshowElement.addEventListener('click', incrementIndex);

// Set new image
function showImage(image) {
    slideshowElement.style.setProperty('--bg-image', `url("${image.url}")`);
    imageElement.src = image.url;
    imageElement.alt = image.alt;
}

function incrementIndex() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(images[currentIndex]);
}
