var ask = require("readline-sync");

// 1 ask questio

// ask whiich option he want to  do
let question = "";

function perfomOperation(a, b, c) {
  if (c === "/") {
    return console.log(`The result is: ` + a / b);
  }
  if (c === "*") {
    return console.log(`The result is: ` + a * b);
  }
  if (c === "+") {
    return console.log(`The result is: ` + a + b);
  }
  if (c === "-") {
    return console.log(`The result is: ` + a - b);
  }
}

function operation() {
  question = ask.question(
    `What Operation would you like to perform Divide(/) - Mulitply(*) - Rest(-) or  Add(+) ? `
  );
}

while (
  question != "/" &&
  question != "+" &&
  question != "-" &&
  question != "*"
) {
  operation();
}

let question1 = ask.questionFloat("Place your first Number ");
let question2 = ask.questionFloat("Place your second  Number ");

// 2 if the user enter another  character what is not the one on the top
//2.5 print that is not valid operation
//3 then restart the program

// 4 if yes  please enter the first number

// 5 if the user  enter something not is a number print  "This is not a numbe" and re-ask the question

// 6 please enter the second number

// create a function to perform a proper math opetation and print the
// result is X where X is the actual result
