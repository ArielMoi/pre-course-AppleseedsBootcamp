const input = require('readline-sync');

function primeNumber(n){
    for (var i = 2; i < n; i++){
        if (n % i == 0){
            return false; // not a prime number
        }
    }
    if (n != 0 && n != 1){
        return true; // is a prime number
    }
}

console.log('choose a range in which the program will print all the prime numbers within it.')
var userRange = parseInt(input.prompt()) + 1;

primesArray = [...Array(userRange).keys()]; // crates an array from the user choosen range.

for (i of primesArray){
    if (primeNumber(i)){
        console.log(i, ' is a prime number.');
    }
}