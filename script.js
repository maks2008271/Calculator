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
const decimal = document.querySelector("#decimal")

let num1 = null;
let action = null;
let num2 = null;
let shouldResetDisplay = false;

clear.addEventListener("click", () => {
    display.textContent = '0';

    num1 = null;
    action = null;
    num2 = null;
    shouldResetDisplay = false;
})

operands.forEach(operand => {
    operand.addEventListener("click", () => {
        if (shouldResetDisplay || display.textContent == '0') {
            display.textContent = operand.textContent;
            shouldResetDisplay = false;
        }   else {
            display.textContent += operand.textContent;
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (num1 !== null) {
            num2 = parseFloat(display.textContent);
            num1 = eval(num1 + action + num2);
            display.textContent = num1;
        }   else {
                num1 = parseFloat(display.textContent);
        }

        action = operator.textContent;
        shouldResetDisplay = true;
    })
}) 

decimal.addEventListener("click", () => {
    if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }
})

equal.addEventListener("click", () => {
    if (num1 !== null && action !== null) {
        num2 = parseFloat(display.textContent);

        if (action === '/' && num2 === 0) {
            display.textContent = "Error";  // Если делим на 0, выводим "Error"
        } else {
            let result;
            switch (action) {
                case '+':
                    result = add(num1, num2);
                    break;
                case '-':
                    result = subtract(num1, num2);
                    break;
                case '*':
                    result = multiply(num1, num2);
                    break;
                case '/':
                    result = divide(num1, num2);
                    break;
                default:
                    result = num2;
                    break;
            }
            display.textContent = result;
        }

        num1 = null;
        num2 = null;
        action = null;

        shouldResetDisplay = true;
    }
});