const input = require('readline-sync');

var userString = input.question('write the word you would like to check if is a palinsrome?\n> ')

if (userString == userString.split('').reverse().join('')){
    console.log(userString, ' is a palindrome.');
}else {
    console.log(userString, ' is not a palindrome.')
}
