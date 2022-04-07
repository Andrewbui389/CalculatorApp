
const screen = document.querySelector('.numbers')

let emptyArray = [] 
let num1
let num2 
let convert
let answer 
let op

console.time("Loop")
function choose(chosen){
   let value = chosen
    if(value !=='equal' && value!=='plus' && value !== 'subtract' && value !== 'multiply' && value !== 'divide' && value !=='clear'){
    emptyArray.push(value)
    let joinedArray = emptyArray.join('')
    convert = Number(joinedArray)
    screen.textContent= joinedArray
    console.log(convert)
    }else if(value === 'plus' || value === 'subtract' || value === 'multiply' || value === 'divide' ){
        op = value
        num1 = convert
        emptyArray = []
        console.log(op)
    }else if(value === 'equal'){
         emptyArray = []
         num2 = convert
         answer = determineOp(op)
         screen.textContent = answer
         console.log(answer)
         num1 = 0
         num2 = 0
         convert = 0
    }else if(value === 'clear'){
        emptyArray = []
        num1 = 0
        num2 = 0 
        convert = 0
        screen.textContent = 0
    }
}; 
console.timeEnd("Loop")

function determineOp(value){
    switch(value){
        case 'plus':
            answer = add(num1,num2);
        return answer;
        case 'subtract':
             answer = subtract(num1,num2);
        return answer;
        case 'multiply':
             answer = multiply(num1,num2);
        return answer;
        case 'divide':
             answer = divide(num1,num2);
        return answer;
    }
};


const add = function(number1,number2){
    value = number1 + number2;
    return value; 
}
const subtract = function(number1,number2){
    value = number1 - number2;
    return value; 
}
const multiply = function(number1,number2){
    value = number1 * number2;
    return value;
}
const divide = function(number1,number2){
    value = number1 / number2;
    return value;
}


const operator = function(operator, number1, number2){
    const addFunc = add(number1,number2)
    const subtractFunc = subtract(number1,number2)
    const multiplyFunc = multiply(number1,number2)
    const divideFunc = divide(number1,number2)
    if(operator === 'plus'){
        return addFunc
    } else if (operator === 'multiply'){
        return multiplyFunc
    }else if (operator === 'subtract'){
        return subtractFunc
    }else if (operator === 'divide'){
        return divideFunc
    }else{
        return('invalid request')
    }
}


