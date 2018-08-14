let display = document.getElementsByClassName('display')[0];
let operations = ['-', '+', '/', '*'];

setValue('0');

function addNumber(num) {
     if (display.textContent.length === 1 && display.textContent === '0') {
         setValue(num);
     } else {
         addValue(num);
     }
}



function addOperation(operation) {
    let lastSymbol = display.textContent[display.textContent.length-1];
    if (operations.includes(lastSymbol)) {
        setValue(display.textContent.slice(0,-1) + operation);
    } else {
        addValue(operation);
    }
}


function calculate() {
    let result = new Function('return ' +  display.textContent + ';' )();
    setValue(result);
}

function clearDisplay() {
    setValue('0');
}

function addValue(value) {
    display.textContent = display.textContent + value;
}

function setValue(value) {
    display.textContent = value;
}

