let display = document.getElementById("display")

function appendToDisplay(item) {
    item = item.toString()
    let currValue = display.value
    let currValueArray = currValue.toString().split("");
    if (isNaN(Number(currValueArray[currValueArray.length - 1])) && isNaN(Number(item))) {
        currValueArray[currValueArray.length - 1] = item;
    }
    else {
        currValueArray.push(item);
    }
    console.log(currValueArray)
    display.value = currValueArray.join("")
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    let currValuesArray = display.value.toString().split("");
    let result = performCalculation(currValuesArray)
    display.value = result
}


function performCalculation(currValuesArray) {
    let result = "0"
    let operator = null
    let curValue = "0"
    currValuesArray.forEach(element => {
        if (isNaN(element)) {
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