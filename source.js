const add = function(num1,num2) {
	let prod = num1 + num2;
    result(prod);
};

const sub = function(num1,num2) {
	let prod = num1 - num2;
    result(prod);
};

const mult = function(num1,num2) {
	let prod = num1 * num2;
    result(prod);
};

const div = function(num1,num2) {
	let prod = num1 / num2;
    result(prod);
};

const operate = function(num1,operator,num2) {
    if (operator == '+'){
        add(num1,num2);
    }
    else if (operator == '-'){
        sub(num1,num2);
    }
    else if (operator == '*'){
        mult(num1,num2);
    }
    else if (operator == '/'){
        div(num1,num2);
    }
}


const result = function(prod) {
    let calc = prompt(`The result is ${prod}.`);
    let arr = calc.split("");
    let num1 = prod;
    let nums = ['0','1','2','3','4','5','6','7','8','9']
    let operators = ['+','-','/','*']
    let operator = "";
    let num22 = "";
    for (let i in arr) {
       if(operators.includes(arr[i])){
            operator += arr[i];
        }
        else if(nums.includes(arr[i]) && operator != ""){
            num22 += arr[i];
        }
    }
    let num2 = Number(num22);
    operate(num1,operator,num2);
}

let calc = prompt(`Give numbers to calculate.`);
let arr = calc.split("");
let nums = ['0','1','2','3','4','5','6','7','8','9']
let operators = ['+','-','/','*']
let num12 = "";
let operator = "";
let num22 = "";
for (let i in arr) {
    if(nums.includes(arr[i]) && operator == ""){
        num12 += arr[i];
    }
    else if(operators.includes(arr[i])){
        operator += arr[i];
    }
    else if(nums.includes(arr[i]) && operator != ""){
        num22 += arr[i];
    }
}
let num1 = Number(num12);
let num2 = Number(num22);
operate(num1,operator,num2);