var ask = require("readline-sync");

// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

// `What Operation would you like to perform Divide(/) - Mulitply(*) - Rest(-) or  Add(+) ? `;

// Then the user enters one of these options: "/" "*" "-" "+"
const arrOperations = {
  "+": { name: "Add", exectution: (a, b) => a + b },
  "-": { name: "Rest", exectution: (a, b) => a - b },
  "*": { name: "Mulitply", exectution: (a, b) => a * b },
  "/": { name: "Divide", exectution: (a, b) => a / b },
};

// necesito preguntar

const askOperation = (arrOperations) => {
  const operationMessage = Object.entries(arrOperations)
    .map(([key, item]) => {
      return ` ${item.name} ${key} `;
    })
    .join(" ");

  const operator = ask.question(
    `What operation do you want to do ${operationMessage}?`
  );

  if (!arrOperations[operator]) {
    return (
      console.log("That is not Avaible at the Moment "),
      askOperation(arrOperations)
    );
  }
  return operator;
};

const getInt = (secuence) => {
  return ask.questionInt(`${secuence} Number:`, {
    limitMessage: "This is not a valid number",
  });
};

// Ask the user, "What operation would you like to perform?"
// need to get the   numbers to pass  them
function handleCalculator(obj) {
  const isOperator = askOperation(obj);
  const [firstNum, secondNum] = ["first", "second"].map((value) => {
    return getInt(value);
  });

  const result = obj[isOperator].exectution(firstNum, secondNum);

  return console.log(result);
}

handleCalculator(arrOperations);
