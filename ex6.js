const input = require('readline-sync');

var i = 0;
while (i <= 10){
    i = input.question('please choose a number larger than 10. ')
    if (i > 10){
        console.log('Thank You')
    }
}   