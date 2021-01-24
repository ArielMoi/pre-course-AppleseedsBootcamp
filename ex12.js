const input = require('readline-sync');

var userString = input.question('choose the string.\n> ')

var userStrToArray = userString.split('');

for (letter of userStrToArray){
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' || letter == 'y'){
        let letterIndex = userStrToArray.indexOf(letter);
        userStrToArray[letterIndex] = letter.toUpperCase();
    }
    
}

console.log(userStrToArray.join(''));