

const prompt = require('prompt-sync')();
let month = prompt('Enter Month : ');
console.log(`${month}`);
let date = prompt('Enter Date : ');
console.log(`${date}`);

if((month < 6)  &&  (month > 3)  &&  (date < 20)){
    console.log("True");
}
else{
    console.log("False");
}
