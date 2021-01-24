const input = require('readline-sync');
var numberArray = [];
var length = input.question('choose the length: ');
if (isNaN(length)){
    throw 'not a number!' //checks for worng inputs.
}

for (let i = 0; i <= parseInt(length); i++){
    numberArray.push(Math.floor(Math.random() * 50) + 1); //creates the array
}
//prints the result.
console.log('min is', Math.min(...numberArray));
console.log('max is', Math.max(...numberArray));