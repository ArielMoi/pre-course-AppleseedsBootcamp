const input = require('readline-sync');

var userSentence = input.prompt();
var longestWord = '';

var symbolArray = ['!', '@', '#', '$', '%', '^', '&', '*'];

for (word of userSentence.split(' ')){
    if (isNaN(word) == false || word.split('').some(function(){
        for (symbol of symbolArray){//function to check if symbol in word
            if (word.includes(symbol)){
                return true;
            }
        }return false;
    })){ // make sure the word isnt made of numbers or symbols.
        continue;
    }
    if (word.length > longestWord.length){ // if the word is longer than the longest word from what was already checked.
        longestWord = word;//the longestWord is updated.
    }
}

console.log('the longest word is - ', longestWord);