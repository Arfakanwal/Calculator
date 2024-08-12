var currentOperand = '0';
var previousOperand = '';
var operation = null;


var display  = document.getElementById('display');

function appendNumber(number){
    if(number === '.' && currentOperand.includes('.')) return;
    if(currentOperand === '0' && number !== '.'){
        currentOperand = number.toString();
    }else{
        currentOperand = currentOperand.toString() + number.toString();
    }
    updateDisplay();
}

function chooseOperation(op){
    if(currentOperand==='')return;
    if(previousOperand!==''){
        compute();
    }


operation = op;
previousOperand =currentOperand;
currentOperand= '';
updateDisplay();
}
function compute(){
    var computation;
    var prev = parseFloat(previousOperand);
    var current = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(current))return;
    switch (operation){
        case '+':
            computation= prev + current;
            break;
            case'-':
            computation = prev - current;
            break;
            case '*':
                computation= prev * current;
                break;
                case '/':
                    computation= prev / current;
                    break;
                    default:
                        return;
    } 
    currentOperand = computation.toString();
    operation = null;
    previousOperand = '';
    updateDisplay();
}
function clearDisplay(){
    currentOperand = '0';
    previousOperand = '';
    operation = null;
    updateDisplay();
}
function deleteLast() {
    if (currentOperand.length > 1) {
        currentOperand = currentOperand.slice(0, -1);
    } else {
        currentOperand = '0';
    }
    updateDisplay();
}

function updateDisplay(){
    display.innerText = currentOperand;
}

document.addEventListener('DOMContentLoaded', (event) => {
    display.innerText = '0';
});