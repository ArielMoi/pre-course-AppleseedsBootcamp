const input = require('readline-sync');

let resturants = {
    mozes : ['kosher', 'meat'],
    maxBrenner : ['kashrut Lemehadrin', 'deserts'],
    halil : ['kosher', 'homous'],
    gomba : ['not kosher', 'italian'],
    mcdonalda : ['kashrut Lemehadrin', 'fast food'],
    dixies : ['not kosher', 'meat'],
    miznon : ['kosher', 'italian'],
    suso : ['not kosher', 'asia'],
    falafelshemesh : ['kashrut Lemehadrin', 'veg'],
}

//func to differcinate by kosher 
let availabeByKasherResturants = [];
let filteredByKosher = function(kosher){
    for (const [key, value] of Object.entries(resturants)) {
        if (`${value[0]}` === kosher){
            availabeByKasherResturants.push(key);            
        }
    }  

    return availabeByKasherResturants;   
}

let userGuests = input.question('hi, welcome to the resturant picker. how many guests are you?');
console.log('okay, looking a resturant for ', userGuests, ' guests.');

if (Number.isInteger(parseInt(userGuests)) === false){
    throw 'not a number!';
}

let userKosher = input.question('Should it be Kosher? (y/n)');
if (userKosher != 'n' && userKosher != 'y'){
    throw 'not available choise';
} else if (userKosher === 'n'){
    var userFinelKasher = 'not kosher';
}

if (userKosher === 'y'){
    var userFinelKasher = 'kosher';
    let mehadrin = input.question('should it be Kashrut Lemehadrin? (y/n)')
    if (mehadrin != 'y' && mehadrin != 'n'){
        throw 'not available choise';
    } else if (mehadrin === 'y'){
        var userFinelKasher = 'kashrut Lemehadrin';
    }
}

// need to adjust type of food by the other parameters
let typesOfFood = [];


console.log('great, so you are looking for a ', userFinelKasher, ' resturant.');
console.log('what type of food would you like?');

let resturantOptions = filteredByKosher(userFinelKasher);

let availableResturnts = new Object;

for (let [key, value] of Object.entries(resturants)) {

    if (value[0] === userFinelKasher){
        typesOfFood.push(value[1]);  
        availableResturnts[key] = value;          
    }
}  

let userTypeFood = input.keyInSelect(typesOfFood);
let userRecommendedResturnat = "";

//comparing kosher and type of food to find resturant.
for (let [key, value] of Object.entries(availableResturnts)){
    if (value[1] == typesOfFood[userTypeFood]){
        userRecommendedResturnat = key;
    }
}


console.log('I have the resturant for you! we recommend ');
console.log('.......');
console.log(userRecommendedResturnat);