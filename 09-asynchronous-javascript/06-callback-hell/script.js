//Introduction
//this will generate the movies, actors, directors in no particular order because of the random setTimeout
<<<<<<< HEAD
//we do not have control over the output
=======
//we do not have control over the output, thus we have to use nested callbacks (callback hell)
>>>>>>> 34e82471ccf768c73ec2c89b1f4b67e22e3d2586
// function getData(endpoint) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', endpoint);

//   xhr.onreadystatechange = function () {
<<<<<<< HEAD
//     if (this.readyState === 4 && this.status === 200) {
=======
//     if ((this.readyState === 4) & (this.status === 200)) {
>>>>>>> 34e82471ccf768c73ec2c89b1f4b67e22e3d2586
//       console.log(JSON.parse(this.responseText));
//     }
//   };

//   //random time between 1 to 4 seconds
//   setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000) + 1000);
// }

// getData('./movies.json');
// getData('./actors.json');
// getData('./directors.json');

<<<<<<< HEAD
//#################################################
=======
//###########################################
>>>>>>> 34e82471ccf768c73ec2c89b1f4b67e22e3d2586
function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
<<<<<<< HEAD
    if (this.readyState === 4 && this.status === 200) {
=======
    if ((this.readyState === 4) & (this.status === 200)) {
>>>>>>> 34e82471ccf768c73ec2c89b1f4b67e22e3d2586
      cb(JSON.parse(this.responseText));
    }
  };

  //random time between 1 to 4 seconds
  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

<<<<<<< HEAD
=======
//##################### for movies only
// getData('./movies.json', (data) => {
//   console.log(data);
// });

//##################### for movies and then actor
// getData('./movies.json', (data) => {
//   console.log(data);
//   getData('./actors.json', (data) => {
//     console.log(data);
//   });
// });
//####################### movies, actor and then director
>>>>>>> 34e82471ccf768c73ec2c89b1f4b67e22e3d2586
getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data);
    getData('./directors.json', (data) => {
      console.log(data);
    });
  });
});
