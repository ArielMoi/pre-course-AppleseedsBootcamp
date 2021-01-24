// includes, indexOf
const input = require('readline-sync');
var userString = input.prompt();


if (userString.includes(' ')){
    var hasSpace = true;
    var stringArray = userString.split('');
    while (hasSpace == true){
        stringArray[stringArray.indexOf(' ')] = '*';
        if (stringArray.includes(' ') == false){
            hasSpace = false;
        }
    }
    console.log(stringArray.join('')); // toString()
}