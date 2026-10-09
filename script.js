
let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

let firstNumber = "";
let operator = "";
let secondNumber = "";

for (let button of buttons) {

    button.addEventListener("click", function() {

        let value = button.innerText;

        if (value >= "0" && value <= "9") {

            if (operator == "") {
                firstNumber = firstNumber + value;
            }
            else {
                secondNumber = secondNumber + value;
            }

            display.value = firstNumber + operator + secondNumber;
        }

        else if (value == ".") {

            if (operator == "") {
                if (!firstNumber.includes(".")) {
                    firstNumber = firstNumber + ".";
                }
            }
            else {
                if (!secondNumber.includes(".")) {
                    secondNumber = secondNumber + ".";
                }
            }

            display.value = firstNumber + operator + secondNumber;
        }

        else if (value == "+" || value == "-" || value == "*" || value == "/") {

            operator = value;

            display.value = firstNumber + operator;
        }

        else if (value == "=") {

            let result;

            if (operator == "+") {
                result = Number(firstNumber) + Number(secondNumber);
            }
            else if (operator == "-") {
                result = Number(firstNumber) - Number(secondNumber);
            }
            else if (operator == "*") {
                result = Number(firstNumber) * Number(secondNumber);
            }
            else if (operator == "/") {
                if (Number(secondNumber) == 0) {
                    result = "Cannot divide by zero";
                }
                else {
                    result = Number(firstNumber) / Number(secondNumber);
                }
            }

            display.value = result;
        }

        else if (value == "C") {

            firstNumber = "";
            secondNumber = "";
            operator = "";

            display.value = "0";
        }

    });

}