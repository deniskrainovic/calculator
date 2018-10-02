const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const panel = document.querySelector(".panel");
const equal = document.querySelector(".equal");
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let displayValue = "";
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";

numbers.forEach(button => button.addEventListener("click", function(e) {
    displayValue += e.target.innerHTML;
    panel.innerHTML = displayValue;
    if(firstNumber === "") {
        firstNumber = e.target.innerHTML;
    } else {
        secondNumber = e.target.innerHTML;
    }
}))

operator.forEach(button => button.addEventListener("click", function(e) {
    displayValue += e.target.innerHTML;
    currentOperator = e.target.innerHTML;
}))

equal.addEventListener("click", function(e) {
    panel.innerHTML = operate(firstNumber, currentOperator, secondNumber);
})


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