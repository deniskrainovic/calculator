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
const clear = document.querySelector(".clear");
const backG = document.querySelector("html");
let displayValue = "";
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let regexp = /\+$|\*$|\-$|\/$/;

numbers.forEach(button => button.addEventListener("click", function(e) {
    displayValue += e.target.innerHTML;
    panel.innerHTML = displayValue;
    if(currentOperator === "") {
        firstNumber += e.target.innerHTML;
    } else {
        secondNumber += e.target.innerHTML;
    }
}))

operator.forEach(button => button.addEventListener("click", function(e) {

    if (secondNumber != "") {
        if (displayValue.match(regexp)) {
            displayValue = displayValue.replace(/.$/, e.target.innerHTML)
            panel.innerHTML = displayValue;
        } else {
            displayValue = operate(firstNumber, currentOperator, secondNumber);
            firstNumber = displayValue;
            secondNumber = "";
            displayValue += e.target.innerHTML;
            panel.innerHTML = displayValue;
            currentOperator = e.target.innerHTML;
    }} else {
        if (displayValue.match(regexp)){
            displayValue = displayValue.replace(/.$/, e.target.innerHTML)
            panel.innerHTML = displayValue;
        } else {
            displayValue += e.target.innerHTML;
            currentOperator = e.target.innerHTML;
            panel.innerHTML = displayValue;
    }} 
}))

equal.addEventListener("click", function(e) {
    panel.innerHTML = operate(parseInt(firstNumber), currentOperator, parseInt(secondNumber));
    firstNumber = operate(parseInt(firstNumber), currentOperator, parseInt(secondNumber)).toString();
    displayValue = firstNumber;
    currentOperator = "";
    secondNumber = "";
})

clear.addEventListener("click", () => {
    firstNumber = 0;
    secondNumber = 0;
    currentOperator = "";
    displayValue = "";
    panel.innerHTML = ""; 
})

//basic math functions
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
        return divide(firstNum, secondNum);
        }
}

//nice background linear gradient randomness
let randomNum = () => { return Math.floor((Math.random() * 999999)+1).toString(); }
let changeBG = () => {
    backG.style.backgroundImage = "linear-gradient(to right, #" + randomNum() + ", #" + randomNum() + ", #" + randomNum() + ")";
}
changeBG();
setInterval(changeBG, 1000);