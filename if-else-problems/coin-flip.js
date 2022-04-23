/* Question 4:
Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
*/

console.log("Coin Flip Simulation");

var num = Math.floor((Math.random() * 2) + 1);

if(num == 1){
    console.log("Heads");
}
else{
    console.log("Tails");
}