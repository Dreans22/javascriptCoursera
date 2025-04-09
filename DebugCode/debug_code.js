
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let operacion = document.getElementById('operacion').value;
    console.log(operacion)
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {

        if (operacion == "sum") {
            let result = sum(num1, num2);
            // Display the result
            displayResult(result);
        } else if (operacion == "rest") {
            let result = rest(num1, num2);
            // Display the result
            displayResult(result);
        } else if (operacion == "division") {
            let result = div(num1, num2);
            // Display the result
            displayResult(result);
        } else {
            // Perform the operation
            let result = multiply(num1, num2);

            // Display the result
            displayResult(result);
        }

    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function sum(a, b) {
    debugger;
    return a + b;
}


function rest(a, b) {
    debugger;
    return a - b;
}

function div(a, b) {
    debugger;
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
