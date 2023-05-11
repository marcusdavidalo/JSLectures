// ChuckNorris Joke Generator - ;P
// API: https://api.chucknorris.io/

//Global Variables
const jokeBtn = document.querySelector('#joke-btn'); // joke button
const jokeElement = document.querySelector('#joke'); // joke div element

//Event Listeners
jokeBtn.addEventListener('click', generateJoke); // generate joke on click

//Functions
function generateJoke() {
  const xhr = new XMLHttpRequest(); // request to the API
  xhr.open('Get', 'https://api.chucknorris.io/jokes/random'); // this gets a random joke from the API
  xhr.onreadystatechange = function () {
    // this is the callback function
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      jokeElement.textContent = data.value; // data.value is from the API the data part is the object and the value is the key
    }
    // else if (this.readyState === 4 && this.status !== 200) {
    //   jokeElement.innerHTML = 'Something went wrong';
    // }
  };
  xhr.send(); //xhr means
}

//Run
document.addEventListener(
  'DOMContentLoaded',
  generateJoke,
  console.log('ulol')
); // generate on page load

function startColorChange() {
  if (!intervalId) {
    intervalID = setInterval(changeColor, 1);
  }
}

function changeColor() {
  // random color
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
  // for all div elements
  let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelectorAll('div').forEach((div) => {
    div.style.color = `#${randomColor2}`;
  });
  //for all buttons
  let randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelectorAll('button').forEach((button) => {
    button.style.color = `#${randomColor2}`;
    button.style.backgroundColor = `#${randomColor3}`;
  });
}

document.getElementById('joke-btn').addEventListener('click', changeColor);

// konami code fun easter egg
const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

// counter for the sequence
let konamiCodeIndex = 0;
document.addEventListener('keydown', function (event) {
  const key = event.key; // key is the pressed key :D

  // check if the key is the next in the sequence
  if (key === konamiCode[konamiCodeIndex]) {
    // add 1 to the sequence index if it is the right key
    konamiCodeIndex++;
    if (konamiCodeIndex === konamiCode.length) {
      // if the index is the same as the length of the sequence, activate the function
      activateKonamiCode();
      konamiCodeIndex = 0;
    }
  } else {
    // reset the counter if the wrong key is pressed
    konamiCodeIndex = 0;
  }
});

// function that runs when the code is entered
function activateKonamiCode() {
  Swal.fire({
    title: 'Congratulations! You found the Secret Code!',
    text: 'Chuck Norris is proud of you!',
    icon: 'success',
    background: '#f7f7f7',
    // chuck norris joke
    text: "Chuck Norris doesn't need a Konami Code.",
    zIndex: 9,
  });
}
