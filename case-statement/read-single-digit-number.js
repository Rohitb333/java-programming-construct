
/* Question 1:
 Read a single digit number and write the number in word using Case
*/

let number = Math.round(Math.random() * 10 + 1);
switch (number) {
    case 1:
        console.log("Number = ONE");
        break;
    case 2:
        console.log("Number = TWO");
        break;

    case 3:
        console.log("Number = THREE");
        break;

    case 4:
        console.log("Number = FOUR");
        break;

    case 5:
        console.log("Number = FIVE");
        break;

    case 6:
        console.log("Number = SIX");
        break;

    case 7:
        console.log("Number = SEVEN");
        break;

    case 8:
        console.log("Number = EIGHT");
        break;

    case 9:
        console.log("Number = NINE");
        break;

    default:
        console.log("Invalid Number");
}