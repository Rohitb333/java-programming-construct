
/* Question 2:
Random Number get between 1 and 6
*/
console.log(Math.floor(Math.random() * 6 + 1));

/* Question 3:
 Add 2 random dice numbers
 */
let number1 = Math.floor(Math.random() * 6 + 1)
console.log(" The number of dice 1 is" + number1);
let number2 = Math.floor(Math.random() * 6 + 1)
console.log("The number of dice 2 is " + number2);

let sum = number1 + number2;
console.log("The sum of two dice is : " + sum);