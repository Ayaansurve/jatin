let isFlipped = false; // Track the flip state
const cardInner = document.querySelector('.card-inner');
const openButton = document.getElementById('openCardButton');
const closeButton = document.getElementById('closeCardButton');
const birthdaySong = document.getElementById('birthdaySong');

// Function to flip the card
function flipCard() {
  if (isFlipped) {
    // Flip back to the front
    cardInner.style.transform = 'rotateY(0deg)';
    openButton.style.display = 'block'; // Show the open button
    closeButton.style.display = 'none'; // Hide the close button
  } else {
    // Flip to the back
    cardInner.style.transform = 'rotateY(180deg)';
    openButton.style.display = 'none'; // Hide the open button
    closeButton.style.display = 'block'; // Show the close button

    // Play birthday song (only on first flip)
    if (birthdaySong.paused) {
      birthdaySong.play().then(() => {
        console.log('Audio is playing');
      }).catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }
  }

  isFlipped = !isFlipped; // Toggle the flip state
}

// Add event listeners to both buttons
openButton.addEventListener('click', flipCard);
closeButton.addEventListener('click', flipCard);