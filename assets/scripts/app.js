//code will be parsed once, but function
//as many time as needed
const defaultResult = 0;

let currentResult = defaultResult;

//will read global variables instead of arguments
function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');

}

addBtn.addEventListener('click', add);





