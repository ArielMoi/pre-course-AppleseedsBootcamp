// assignment 3, Bootcamp Pre-Course. hangman.
const figlet = require('figlet');
const input = require('readline-sync');
const gameWords = ['door', 'window', 'computer', 'remote', 'dog', 'cat', 'mouse', 'nature', 'valley', 
'fitness', 'bowl', 'fish', 'glass', 'steel', 'pig', 'game', 'sport', 'science']; // array to drew words.

function drewWord(wordArray){
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}

function isASCII(str) { // check if the input is ASCII
    for (i of '!@#$%^&*()_+}{":'){
        if (str.includes(i)){
            return true;
        }
    }return false;
}

function userAttempt(userInput){ // func to check if user right ot wrong

    if (guessedWord.includes(userInput)){ // case of right guess
        let tryGuessWord = guessedWord.split(''); // duplicate to make changes.
        var arrayGuessingBoard = unGuessedWord.split('');
        for (letter of guessedWord){ // loop to change each letter (to cover cases of double letter)
            if (letter == userInput){
                let lettersIndex = tryGuessWord.indexOf(userInput);
                arrayGuessingBoard[lettersIndex] = userInput; 
                tryGuessWord[lettersIndex] = '*';
            }
        }
        return arrayGuessingBoard.join('');

    }else{ // in case of worng guess. 
        amountOfGuesses--; 
        return unGuessedWord;
    }
}

function checkWin(){ // func to check if won or if finished guesses.
    if (guessedWord == unGuessedWord){ // user won
        console.log('the word is ', guessedWord);
        console.log('\n\n\n----- WINNER! ----- \n\n\n');
        return true;
    }else if (amountOfGuesses == 0){ // user lost after using all is guesses
        console.log('the word was ', guessedWord);
        console.log('\nfinished all your guesses. sorry');
        console.log('\n\n\n----- LOSER ----- \n\n\n');
        return true;
    }else{ // another round.
        return false;
    }
}

console.log(figlet.textSync('hangman game', { // opening for the game
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));

var amountOfGuesses = 10; // var to keep track of tries
var guessedWord = drewWord(gameWords); // choosing the word for the session
var unGuessedWord = '*'.repeat(guessedWord.length); //creating the guessing board

//loop for the playtrough
while (checkWin() == false){ // function check win as a condition.
    console.log('you have',amountOfGuesses,'guesses\nthe word is:\n', unGuessedWord);
    console.log('what is your guess?');
    let userInput = input.prompt(); // taking the user guess

    if (userInput.length > 1 || isNaN(userInput) == false || isASCII(userInput)){ // check for a correct input
        console.log('worng input. needs to be one letter.\nTry Again.');
        continue;
    }

    unGuessedWord = userAttempt(userInput.toLowerCase()); // checking the user guess and turn to low case if the user typed uppercase.
}
