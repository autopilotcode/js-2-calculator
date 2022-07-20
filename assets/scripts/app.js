const defaultResult = 0;
const bro = "bro";

let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value); 
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  //output text
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

//function for an object
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier, //any name
    prevResult: prevResult, //here
    number: operationNumber, //in all
    result: newResult, //rows
  };
  logEntries.push(logEntry); //push from object logEntry to an array logEntries
  //log an entire array to a console
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function substract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBSTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

