/* Question 1:
Write a program that takes a command-line argument n and prints a table of the 
powers of 2 that are less than or equal to 2^n.
*/

//Reading input from console using prompt-sync NodeJS Module
const prompt = require("prompt-sync")();
const number = prompt("Enter number: ");

let power = 0;
let result = 1;

while(result<256){
    result = Math.pow(2,power);
    console.log(`2^${power}   : ${result}`)
    power++;
}