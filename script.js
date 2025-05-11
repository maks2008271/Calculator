function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const display = document.querySelector(".display");
const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const opposite = document.querySelector("#opposite")
const procent = document.querySelector("#procent")


num1 = null;
action = null;
num2 = null;

clear.addEventListener("click", () => {
    display.textContent = '0';
    isActive = false;

    num1 = null;
    action = null;
    num2 = null;
})

operands.forEach(operand => {
    operand.addEventListener("click", () => {
        if (display.textContent == '0') {
            display.textContent = operand.textContent;
        }   else {
            display.textContent += operand.textContent;
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        num1 = display.textContent;
        action = operator.textContent;
        display.textContent = "0";
    })
}) 

equal.addEventListener("click", () => {
    if (num1 !== null) {
        num2 = display.textContent;
    }

    display.textContent = eval(num1 + action + num2);
    console.log(num1);
    console.log(action);
    console.log(num2);
})