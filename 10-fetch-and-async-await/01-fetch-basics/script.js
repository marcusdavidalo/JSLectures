//fetch api it returns a promise,

//###############################
// fetch('./movies.json').then((response) => {
//   console.log(response);
// });
//###############################
fetch('./movies.json')
  // this is a promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
//###############################
//fetch a text file
fetch('./text.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));
//###############################
//fetch from the API
fetch('https://api.github.com/users/tropangpotchiph')
  .then((response) => response.json())
  .then((data) => (document.querySelector('h1').textContent = data.login));
//###############################
