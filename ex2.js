const input = require('readline-sync');

let makesTen = function(){
    let firstNumber = input.question('please choose a number: ');
    let secondNumber = input.question('please choose a second number: ');

    // change str to int and calculate 
    let finelNum = parseInt(firstNumber) + parseInt(secondNumber)

    //conditions to check the sum
    if (finelNum == 10){
        console.log('Makes 10!');
    }else if (finelNum != 10){
        console.log('nope');
    }
}

makesTen();
