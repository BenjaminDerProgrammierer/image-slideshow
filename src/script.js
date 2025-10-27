const slideshowContainer = document.getElementById('slideshow');
let prevBtn;
let nextBtn;

let autoAdvanceInterval;

// Ten sample images from placeholder service
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
    { url: 'images/david-foodphototasty-8nFtscE1D_w-unsplash.jpg', alt: 'Sushi Rolls on a plate', },
    { url: 'images/douglas-lopez-vlx0BwZlUXQ-unsplash.jpg', alt: 'A Nigiri being held with chopsticks' },
    { url: 'images/jakub-dziubak-iOHJKJqO6E0-unsplash.jpg', alt: 'A variety of sushi on a stone board' },
    { url: 'images/kyle-head-PW8K-W-Kni0-unsplash.jpg', alt: 'A Chef preparing sushi' },
    { url: 'images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg', alt: 'Different Nigiri on a plate' },
    { url: 'images/mahmoud-fawzy-EqoCUzG9200-unsplash.jpg', alt: 'California Rolls on a plate' },
    { url: 'images/mahmoud-fawzy-MgvByrhYz24-unsplash.jpg', alt: 'A Sushi Roll being held by chopsticks' },
    { url: 'images/mahmoud-fawzy-n1DePkKznLY-unsplash.jpg', alt: 'Rolls on a Plate' },
    { url: 'images/riccardo-bergamini-O2yNzXdqOu0-unsplash.jpg', alt: 'A variety of sushi on a wooden board' },
    { url: 'images/vinicius-benedit--1GEAA8q3wk-unsplash.jpg', alt: 'California Rolls' }
];

let currentIndex = 2;

function showImage(index) {
    slideshowContainer.innerHTML = '';

    // Calculate indices for images -2, -1, 0, +1, +2
    const indices = [
        (index - 2 + images.length) % images.length,
        (index - 1 + images.length) % images.length,
        index % images.length,
        (index + 1) % images.length,
        (index + 2) % images.length
    ];

    indices.forEach((e) => {
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('image-wrapper');
        // set a CSS custom property so the ::before pseudo-element can use it
        imgWrapper.style.setProperty('--bg-image', `url("${images[e].url}")`);
        // fallback: also set the wrapper background directly in case CSS isn't loaded
        // imgWrapper.style.backgroundImage = `url("${images[e].url}")`;

        const img = document.createElement('img');
        img.src = images[e].url;
        img.alt = images[e].alt;
        img.classList.add('slideshow-image');
        imgWrapper.appendChild(img);

        switch (e) {
            case indices[0]:
                imgWrapper.classList.add('prev2');
                break;
            case indices[1]:
                imgWrapper.classList.add('prev1');
                break;
            case indices[2]:
                imgWrapper.classList.add('current');
                break;
            case indices[3]:
                imgWrapper.classList.add('next1');
                break;
            case indices[4]:
                imgWrapper.classList.add('next2');
                break;
        }

        slideshowContainer.appendChild(imgWrapper);
    });
    // Add caption
    const caption = document.createElement('div');
    caption.classList.add('slideshow-caption');
    caption.innerText = images[indices[2]].alt;
    slideshowContainer.appendChild(caption);

    // add control buttons


    prevBtn = document.createElement('button');
    prevBtn.innerHTML = '<img src="icons/chevron-left.svg" alt="Previous" style="height:32px;width:32px;">';
    prevBtn.classList.add('nav-button', 'prev');
    prevBtn.onclick = () => {
        decrementIndex();
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = setInterval(decrementIndex, 5000);
    };
    slideshowContainer.appendChild(prevBtn);

    nextBtn = document.createElement('button');
    nextBtn.innerHTML = '<img src="icons/chevron-right.svg" alt="Next" style="height:32px;width:32px;">';
    nextBtn.classList.add('nav-button', 'next');
    nextBtn.onclick = () => {
        incrementIndex();
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = setInterval(incrementIndex, 5000);
    };
    slideshowContainer.appendChild(nextBtn);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            prevBtn.click();
            break;
        case 'ArrowRight':
            nextBtn.click();
            break;
    }
});

// Initial display
showImage(currentIndex);
// autoAdvanceInterval = setInterval(incrementIndex, 5000);

function incrementIndex() {
    console.log('Incrementing index');
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function decrementIndex() {
    console.log('Decrementing index');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}
