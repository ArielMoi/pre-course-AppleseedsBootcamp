const input = require('readline-sync');

let numbersDict = {
    0 : 'ZERO',
    1 : 'ONE',
    2 : 'RWO',
    3 : 'TRHEE',
    4 : 'FOUR',
    5 : 'FIVE',
    6 : 'SIX',
    7 : 'SEVEN',
    8 : 'EIGHT',
    9 : 'NINE'
}

let userNumber = input.question('choose a number between 0 - 9: ');

console.log(numbersDict[userNumber]);