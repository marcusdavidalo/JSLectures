const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

// 1
// Name and Email only of people under 25
const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + " " + person.lastName,
    email: person.email,
  }));

console.log(youngPeople);

// Expected Result:
// [
//     {name: 'Jane Poe', email:'jane@gmail.com'},
//     {name: 'Sara Soe', email:'sara@gmail.com'},
//     {name: 'Jose Koe', email:'jose@gmail.com'}
// ]

// 2 - Add all of the positive numbers in the array.

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers.reduce((sum, number) => {
  number > 0 ? (sum += number) : undefined;
  return sum;
}, 0);

console.log(positiveSum); // 79

// 3 - Create a new array called capitalizedWords with the words from the words array with the first letter of each word capitalized.
const words = ["coder", "programmer", "developer"];

const capitalizedWords = words.map(
  (word) => word[0].toUpperCase() + word.slice(1)
);

console.log(capitalizedWords); // Expected Result: ['Coder', 'Programmer', 'Developer']
