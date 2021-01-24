const input = require('readline-sync');

var points = {
    'angel' : 0,
    'devil' : 0,
    'mediocre' : 0,
    'god' : 0,
}

//make an obj so to relate the str answer to the result (by str)
let quizAnswers = {
    angel : ['run and help her', 'like a queen, like a phoenix, like the sun in the sky', 'daily basis, cannot count', 
    'love them i volunteer at a shelter', 'i will make sure it get backs to the person in any way i can.'],
    devil : ['push her and run away', 'she is a bitch and literally the reason im in hell', 'thats easy, none.', 
    'i like to kick them', 'finders, keepers'],
    mediocre : ['what? where? i dont see', 'i answer her calls of course', 'we had good deeds day at work', 
    'yea but from far away', 'if there is id i will give it back, if not i will take it.'],
    god : ['i will bless her with youth and strengh', 'no one gave birth to me, i gave birth to the world', 'what is a year? i cant comprehend time frames', 
    'of course, i created them', 'what ever i want.']
}

let userAnswers = []; //array to collect all the answers

let question1 = ['you see an old lady with bags, would you help?', ['i will bless her with youth and strengh', 'run and help her',
'push her and run away', 'what? where? i dont see']];

let question2 = ['how do you treat your mother?', ['i answer her calls of course', 'no one gave birth to me, i gave birth to the world',
'she is a bitch and literally the reason im in hell', 'like a queen, like a phoenix, like the sun in the sky']];

let question3 = ['how many good deeds you did the last year?', ['daily basis, cannot count', 'thats easy, none.',
'what is a year? i cant comprehend time frames', 'we had good deeds day at work']];

let question4 = ['do you like animals?', ['love them i volunteer at a shelter', 'of course, i created them', 'yea but from far away',
'i like to kick them']];

let question5 = ['you find a wallet on the street, what do you do with it?', ['finders, keepers', 'if there is id i will give it back, if not i will take it.',
'what ever i want.', 'i will make sure it get backs to the person in any way i can.']];


//use keyInSelect to question and add the answer to the array with the user answers
console.log('###########\nthis is a questionnaire to find out if you are an angel? a devil? and maybe a god!\n----LETS START!----\n###########')
userAnswers.push(question1[1][input.keyInSelect(question1[1], question1[0])]);
console.log('##############################\n\n\n\n');
userAnswers.push(question2[1][input.keyInSelect(question2[1], question2[0])]);
console.log('##############################\n\n\n\n');
userAnswers.push(question3[1][input.keyInSelect(question3[1], question3[0])]);
console.log('##############################\n\n\n\n');
userAnswers.push(question4[1][input.keyInSelect(question4[1], question4[0])]);
console.log('##############################\n\n\n\n');
userAnswers.push(question5[1][input.keyInSelect(question5[1], question5[0])]);
console.log('##############################\n\n\n');

var userResults = [];

// compare answers with the points obj, each answer that match a result - add a ponint to the result.
for (let answers of userAnswers){
    for (let [key, value] of Object.entries(quizAnswers)){
        if (value.includes(answers)){
            userResults.push(key);
        }
    }
}

// add points to the result to find the most frequent one
for (let result of userResults){
    switch (result){
        case 'angel':
            points['angel'] = points['angel'] + 1;
            break;
        case 'devil':
            points['devil'] = points['devil'] + 1;
            break;
        case 'god':
            points['god'] = points['god'] + 1;
            break;
        case 'mediocre':
            points['mediocre'] = points['mediocre'] + 1;
            break;
    }
}


var finelResult = [];
for (let [key, value] of Object.entries(points)){ // calculate the results to find the finel one
    if (value >= 2){
        finelResult.push([key, value]);
    }
}

if (finelResult.length > 1){
    console.log('\n\n\nOMG! its a TIE!')
    console.log('you are some where between ' + finelResult[0][0] + ' and ' + finelResult[1][0] + '!!');
}else {
    console.log('Yayy we have the results! you are defintly a ');
    console.log('\n/////////\n');
    console.log(finelResult[0][0]);
}
