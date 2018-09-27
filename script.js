let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (firstNum, operator, secondNum) => {
    switch (operator) {
        case "+":
        return add(firstNum, secondNum);
        
        case "-":
        return subtract(firstNum, secondNum);
        
        case "*":
        return multiply(firstNum, secondNum);
        
        case "/":
        return multiply(firstNum, secondNum);
        }
}