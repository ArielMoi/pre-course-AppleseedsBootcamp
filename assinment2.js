/// game of war, assinment 2 in pre course bootcamp

const input = require('readline-sync');
const gameOpening = '/////////------------ Welcom To War ------------/////////';
var bet = 0;
var betMoney = 50;
var endOption = '1';

function makeBet(){ /// func for making a bet and validate bet.
    console.log('you currently have ', betMoney, ' ILS to bet.');
    let properBet = false;
    while (properBet == false){
        console.log('place your bet for the next round. between 1 - ', betMoney);
        bet = parseInt(input.prompt());
        if (isNaN(bet)){
            console.log('you didnt type a number. unacceptable input.\n\nGOOD BYE!\n\n');//error in case of worng input.
            throw 'not a number!';
        }
        if (bet > betMoney){
            console.log('incorrect bet. Yoy dont have enough money and we dont play with cheats. GOODBYE.');
            endOption = '2'; /// break out from the all game, added an option in the loop.
            properBet = true;
        }else {
            properBet = true;
            console.log('your bet: ', bet);
        }
    }
}

function drewCards(){// func to drew cards.
    let userCard = Math.floor(Math.random() * 12) + 1; 
    let dealerCard = Math.floor(Math.random() * 12) + 1;
    console.log('\n\n--- DRAWN! --- \n user card: ', userCard, '\n dealer card: ', dealerCard);
    winOrLose(userCard, dealerCard);
}

function winOrLose(user, dealer){ //func to recognize winner and update bet money
    if (user > dealer){
        console.log('\n\n///--- WIN! ---///\n\n---------------');
        betMoney += bet;
        console.log('you now have ', betMoney,' ILS.');
    }else if (user < dealer){
        console.log('\n\n///--- LOSE! ---///\n\n---------------');
        betMoney -= bet;
        console.log('you now have ', betMoney,' ILS.');
    }else if (user == dealer){
        console.log('\n\n///--- TIE! ---///\n\n---------------');
        console.log('no one won.\nyou still have', betMoney,'ILS.');
    }
}

// opening for the game
console.log(gameOpening);
var userName = input.question('please enter your name: ');
console.log('Hi', userName, '\nlets stare playing.');

while (endOption == '1'){ // loop for the actual play
    makeBet();
    if (endOption == '2'){
        break;
    }
    drewCards();
    if (betMoney <= 0){ //option for user losing all his money.
        console.log('seems like you lost all your money. SORRY.')
        break;
    }
    console.log('\nwould you like to play another game?\n');
    console.log('[1] play another round.\n[2] leave with my money.\n\n(1 / 2)');
    endOption = input.prompt(); //option to stop playing.
    if (endOption == '2'){
        console.log('you leave with', betMoney, 'ILS.')//shows the amount of money the player leaves with
    }
}

console.log('\n\n\n\n/////////------------ GOOD BYE! ------------/////////\n\n\n\n')