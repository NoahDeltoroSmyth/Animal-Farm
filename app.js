// import functions
const catImg = document.getElementById('cat');
const catSound = document.getElementById('audiocat');
const catCounter = document.getElementById('count')

const dogImg = document.getElementById('dog');
const dogSound = document.getElementById('audiodog');

const horseImg = document.getElementById('horse');
const horseSound = document.getElementById('audiohorse');

let catClicks = 0;

// reference needed DOM elements
 

// set event listeners 

catImg.addEventListener('click', () => {
  catSound.play();
  catClicks ++;
  catCounter.textContent = 'You have clicked the cat ' + catClicks + ' times!';
});

dogImg.addEventListener('click', () => {
  dogSound.play();
});

horseImg.addEventListener('click', () => {
  horseSound.play();
});

  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
