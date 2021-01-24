const input = require('readline-sync');

function joinedArrays(){
    let arr1 = input.question('input the first array. use comma (,) to differentiate the different objects: ')
    let arr2 = input.question('input the second array: ')
    return [...arr1.split(','),...arr2.split(',')];
}

console.log('\nthis is the joined array -\n', joinedArrays());