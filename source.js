
const clear = function(){
    displayVal = "";
    update(displayVal);
}

const update = function(displayVal){
    const val = document.getElementById("displayVal");
    val.remove();
    const val1 = document.getElementById("display");
    const valUpdate = document.createElement('p');
    valUpdate.id = "displayVal";
    val1.appendChild(valUpdate);
    valUpdate.textContent = `${displayVal}`;

}

const start = function(displayVal){
    const val = document.getElementById("display");
    const valUpdate = document.createElement('p');
    valUpdate.id = "displayVal";
    val.appendChild(valUpdate);
    valUpdate.textContent = `${displayVal}`;
}

const operate = function(num1,operator,num2) {
    if (operator == '+'){
        let prod = num1 + num2;
        return prod;
    }
    else if (operator == '-'){
        let prod = num1 - num2;
        return prod;
    }
    else if (operator == '*'){
        let prod = num1 * num2;
        return prod;
    }
    else if (operator == '/'){
        let prod = num1 / num2;
        return prod;
    }
}


const result = function(prod) {
    const val = document.getElementById("displayVal");
    val.remove();
    const val1 = document.getElementById("display");
    const valUpdate = document.createElement('p');
    valUpdate.id = "displayVal";
    val1.appendChild(valUpdate);
    valUpdate.textContent = `${prod}`;
    displayVal = prod;
}

const getVal = function(displayVal) {
    let arr = displayVal.split("");
    let nums = ['0','1','2','3','4','5','6','7','8','9']
    let operators = ['+','-','/','*']
    let numbers = [];
    let ops = [];
    let num = "";
    const len = arr.length;
    for (let i in arr) {
        if(nums.includes(arr[i])){
            num += arr[i];
            if (i == len-1) {
                numbers.push(num);
            }
        }
        else if(operators.includes(arr[i])){
          ops.push(arr[i]);
          numbers.push(num);
          num = "";
        }
    }
    calc(numbers,ops);
}

const calc = function(numbers,ops){
    let num1 = Number(numbers[0]);
    let prod = 0;
    for (let i = 1; i < numbers.length; i++) {
        let num2 = Number(numbers[i]);
        let operator = ops[i-1];
        prod = operate(num1,operator,num2);
        num1 = prod;
    }
    result(prod);
}

let displayVal = "";
start(displayVal);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        buttonSelection = button.id;
        if (buttonSelection != "clear" && buttonSelection != "=") {
            displayVal += buttonSelection; 
            update(displayVal);
        }
        else if (buttonSelection == "clear") {
            clear();
        }
        else if (buttonSelection == "=") {
            getVal(displayVal);
        }
    });
});