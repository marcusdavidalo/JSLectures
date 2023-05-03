const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      document.getElementById("resultadd").innerHTML = num1 + num2;
      console.log(num1 + num2);
      break;
    case "-":
      document.getElementById("resultsub").innerHTML = num1 - num2;
      console.log(num1 - num2);
      break;
    case "*":
      document.getElementById("resultmul").innerHTML = num1 * num2;
      console.log(num1 * num2);
      break;
    case "/":
      document.getElementById("resultdiv").innerHTML = num1 / num2;
      console.log(num1 / num2);
      break;
    default:
      document.getElementById("resulterr").innerHTML = "Error";
      console.log("Error");
  }
};

calculator(5, 2, "+"); // returns 7
calculator(5, 2, "-"); // returns 3
calculator(5, 2, "*"); // returns 10
calculator(5, 2, "/"); // returns 2.5
calculator(5, 2, "&"); // returns an error message
