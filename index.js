
const screen = document.querySelector('.numbers')

let emptyArray = [] 
let num1
let num2 
let convert
let answer 
let op


function choose(chosen){
   let value = chosen
    if(value !=='equal' && value!=='plus' && value !== 'subtract'){
    let value = chosen 
    emptyArray.push(value)
    let joinedArray = emptyArray.join('')
    convert = Number(joinedArray)
    screen.textContent= joinedArray
    console.log(convert)
    }else if(value === 'plus' || value === 'subtract'){
        op = value
        num1 = convert
        emptyArray = []
    }else if(value === 'equal'){
        num2 = convert
        if(op === 'plus'){
        answer = determineOp(op)
        console.log(answer)
        screen.textContent = answer
        return answer 
        }else if (op === 'subtract'){
            answer = subtract(num1,num2)
            screen.textContent = answer
            return answer 
        }
    }
}; 

function determineOp(value){
    switch(value){
        case 'plus':
            add(num1,num2)
        return
    }
}


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


