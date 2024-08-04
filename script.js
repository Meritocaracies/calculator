let init = 'off'; 
let display = 0;
let state;
let display2;
let total = 0;
let firstnum = 0;
let secondnum = 0;
let decimal = 0;
var opp;
function add(a,b) {
    return parseFloat(a) + parseFloat(b);
}
function sub(a,b) {
    return parseFloat(a) - parseFloat(b);
}
function div(a,b) {
    return a / b;
}
function mult(a,b) {
    return a * b;
}

function opperand(symbol) {
    opp = symbol;
    init = 'second'
        var num1 = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = num1 + '+';
        state = 'addition';
}

function appendToDisplay(input) {
    if (init=='off') {
        init = 'on';
        firstnum = input;
        render(input);
        return;
    }
    else if (init=='on') {
        var display = document.getElementById('display').innerHTML;
        display += input;
        firstnum = display;
        render(display);
        
    }
    else if (init=='second') { 
        init ='third'
        display2 = input;
        secondnum = display2;
        render(display2);
        }
    else if (init=='third') {
            var display2 = document.getElementById('display').innerHTML;
            display2 += input;
            secondnum = display2;
            render(display2);    
        }
    }

function calculateResult() {
    if (opp=='+')
    {total = add(firstnum,secondnum);
    render(total)}
    else if (opp=='-')
    {total = sub(firstnum,secondnum);
            render(total)}
    else if (opp=='*')
    {total = mult(firstnum,secondnum);
            render(total)}
    else if (opp=='/')
    {total = div(firstnum,secondnum);
            render(total)}
}

function clearDisplay() {
        init = 'off'
        document.getElementById('display').innerHTML = "0";
        opp = '';
        firstnum = 0;
        secondnum = 0;
        total = '';
    
}

function render(toDisplay) {
    document.getElementById('display').innerHTML = "     ";
    document.getElementById('display').innerHTML = toDisplay;
}