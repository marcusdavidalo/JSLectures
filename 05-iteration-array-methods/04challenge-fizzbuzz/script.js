for (let i = 1; i <= 100; i++) {
  i % 3 === 0 && i % 5 === 0
    ? console.log("FizzBuzz")
    : i % 3 === 0
    ? console.log("Fizz")
    : i % 5 === 0
    ? console.log("Buzz")
    : // : i % 3 === 0 && i % 5 === 0
      // ? console.log("FizzBuzz") // this wont work because the first condition will be true and the code will stop there
      console.log(i);
}

// the ternary with 3 else if statements looks like this:
// condition ? expression1 : condition2 ? expression2 : condition3 ? expression3 : expression4;

// condition is the condition that will be evaluated

// expression is the code that will be executed if the condition is true
