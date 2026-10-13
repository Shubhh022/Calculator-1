```javascript
let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";
let calculated = false;

for (let button of buttons) {

    button.addEventListener("click", function() {

        let value = button.innerText;

        // Number buttons
        if (value >= "0" && value <= "9") {

            if (calculated == true) {
                firstNumber = value;
                secondNumber = "";
                operator = "";
                calculated = false;
            }
            else if (operator == "") {
                firstNumber = firstNumber + value;
            }
            else {
                secondNumber = secondNumber + value;
            }

            display.value = firstNumber + operator + secondNumber;
        }

        // Decimal button
        else if (value == ".") {

            if (calculated == true) {
                firstNumber = "0.";
                secondNumber = "";
                operator = "";
                calculated = false;
            }
            else if (operator == "") {
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

        // Operator buttons
        else if (
            value == "+" ||
            value == "-" ||
            value == "*" ||
            value == "/"
        ) {

            if (firstNumber == "") {
                return;
            }

            // Continue calculation using the previous result
            if (calculated == true) {
                firstNumber = String(result);
                secondNumber = "";
                calculated = false;
            }

            // Calculate if another operator is pressed
            if (operator != "" && secondNumber != "") {

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
                        display.value = "Cannot divide by zero";
                        firstNumber = "";
                        secondNumber = "";
                        operator = "";
                        return;
                    }
                    else {
                        result = Number(firstNumber) / Number(secondNumber);
                    }
                }

                firstNumber = String(result);
                secondNumber = "";
            }

            operator = value;

            display.value = firstNumber + operator;
        }

        // Equal button
        else if (value == "=") {

            if (firstNumber == "" || operator == "" || secondNumber == "") {
                return;
            }

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
                    display.value = "Cannot divide by zero";
                    firstNumber = "";
                    secondNumber = "";
                    operator = "";
                    calculated = false;
                    return;
                }
                else {
                    result = Number(firstNumber) / Number(secondNumber);
                }
            }

            display.value = result;

            firstNumber = String(result);
            secondNumber = "";
            operator = "";
            calculated = true;
        }

        // Clear button
        else if (value == "C") {

            firstNumber = "";
            secondNumber = "";
            operator = "";
            result = "";
            calculated = false;

            display.value = "0";
        }

    });

}
```
