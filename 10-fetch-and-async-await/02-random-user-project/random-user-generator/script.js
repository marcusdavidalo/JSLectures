// Global Variables
const genBtn = document.querySelector('#generate');
const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const phoneElement = document.getElementById('phone');
const locElement = document.getElementById('location');
const ageElement = document.getElementById('age');
const imgElement = document.getElementById('img');

// Event Listeners
genBtn.addEventListener('click', generateName);

// Functions
function generateName() {
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    // full name
    .then((data) => {
      nameElement.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;
      emailElement.textContent = `${data.results[0].email}`;
      phoneElement.textContent = `${data.results[0].phone}`;
      locElement.textContent = `${data.results[0].location.city},  ${data.results[0].location.country}`;
      ageElement.textContent = `${data.results[0].registered.age}`;
      imgElement.src = `${data.results[0].picture.large}`;
      if (data.results[0].gender === 'male') {
        document.body.style = 'background-color:blue';
      } else {
        document.body.style = 'background-color:#663299';
      }
    });
}

// Run
document.addEventListener('DOMContentLoaded', generateName);
