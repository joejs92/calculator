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