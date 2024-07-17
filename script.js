// Array of background image filenames
const backgroundImages = [
  'images/background1.jpg',
  'images/background2.jpg',
  'images/background3.jpg',
  'images/background4.jpg',
  'images/background5.jpg'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
  document.body.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

// Change background image every 2.2 seconds
setInterval(changeBackgroundImage, 2200);

// Set initial background image
changeBackgroundImage();