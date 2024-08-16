let display = document.getElementById("display")

function appendToDisplay(item) {
    item = item.toString()
    let currValue = display.value
    let currValueArray = currValue.toString().split("");
    constructDisplayArray(currValueArray, item)
    console.log(currValueArray)
    display.value = currValueArray.join("")
}

function clearDisplay() {
    display.value = "";
}

function remove() {
    let currValueArray = display.value.toString().split("")
    currValueArray.pop()
    display.value = currValueArray.join("");
}

function calculate() {
    let currValuesArray = display.value.toString().split("");
    let result = performCalculation(currValuesArray)
    display.value = result
}

function constructDisplayArray(currValueArray, item) {
    if (currValueArray.length === 0 && item === "-") {
        currValueArray.push("-")
    }

    else if (isNaN(Number(currValueArray[currValueArray.length - 1])) && isNaN(Number(item))) {
        display.value = display.value == "" ? "0" : display.value;
        handleNegativeAndDecimalCases(currValueArray, item);
    }
    else {
        currValueArray.push(item);
    }
}


function handleNegativeAndDecimalCases(currValueArray, item) {
    let shouldChange = !(currValueArray.length == 1 && currValueArray[0] === "-") && !(currValueArray[currValueArray.length - 1] === ".");
    if (shouldChange) {
        currValueArray[currValueArray.length - 1] = item;
    }
}


function performCalculation(currValuesArray) {
    let result = ""
    let operator = null
    let curValue = ""
    currValuesArray.forEach(element => {
        if (isNaN(element) && element !== ".") {
            result = performOperation(result, curValue, operator).toString()
            operator = element
            curValue = "0"
        }
        else {
            curValue += element
        }
    });
    result = performOperation(result, curValue, operator).toString()
    return result
}

function performOperation(res, currRes, operator) {
    if (operator === null) {
        return currRes
    }
    res = Number(res)
    currRes = Number(currRes)
    switch (operator) {
        case "+": return res + currRes;
        case "-": return res - currRes
        case "*": return res * currRes
        case "/": return res / currRes
    }
}