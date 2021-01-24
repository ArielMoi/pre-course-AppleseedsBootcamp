const input = require('readline-sync');

function factorial(n){
    var facNum = 1;
    for (var i = 1; i <= n; i++){
        facNum = facNum * i;
    }
    return facNum;
}

console.log('Hi, please choose a number to calculate his factorial.')
let userNumber = input.prompt();

console.log(factorial(userNumber));