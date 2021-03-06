"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor (userColor) {
//     var userColor = prompt("Pick a color. ")
//     var message;
//     if (userColor === "blue") {
//         message = ("Blue is the color of the sky");
//     }else if (userColor === "red") {
//         message = ("strawberries are red");
//     }else if (userColor === "cyan") {
//         message = ("Cyan is acting sus...")
//     }else {
//         message = ("Uh oh I dont know anything about your color");
//
//     }
// return message;
// }
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));
// console.log(analyzeColor("green"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//
//
// console.log(analyzeColor(randomColor));




    /**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
        // function analyzeColor(userColor) {
        // var message;
        // switch(userColor) {
        //     case "blue":
        //         message = ("blue is the color of the sky");
        //         break;
        //     case "red":
        //         message = ("strawberries are red");
        //         break;
        //     case "cyan":
        //         message = ("cyan is acting sus...");
        //         break;
        //     default:
        //         message = ("I don't know anything about your color");
        //         break;
        // }
        //         return message;
        // }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 *

/* ########################################################################## */
// var colorPick = prompt("Please enter a color.")
// switch(colorPick) {
//     case "blue":
//         alert("blue is the color of the sky");
//         break;
//     case "red":
//         alert("strawberries are red")
//         break;
//     case "cyan":
//         alert("cyan is acting sus...")
//         break;
//     default:
//         alert("I don't know anything about your color")
//         break;
// }

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// var luckyNumber = Math.floor(Math.random() * 5);
// function calculateTotal(luckyNumber, shoppingCart) {
//   if (luckyNumber === 5) {
//       console.log("Your total is zero.")
//       return 0
//   }else if (luckyNumber === 4) {
//       console.log("Your total is $" + (0.5 * shoppingCart))
//       return 0.5 * shoppingCart
//   }else if (luckyNumber === 3) {
//       console.log("Your total is $" + (0.65 * shoppingCart))
//       return 0.65 * shoppingCart
//   }else if (luckyNumber === 2) {
//       console.log("Your total is $" + (0.75 * shoppingCart))
//       return 0.75 * shoppingCart
//   }else if (luckyNumber === 1) {
//       console.log("Your total is $" + (0.9 * shoppingCart))
//       return 0.9 * shoppingCart
//   }else {
//       console.log("Your total is $" + shoppingCart)
//       return shoppingCart
//   }
// }
// calculateTotal(luckyNumber, 75)
// calculateTotal(luckyNumber, 100)


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//     luckyNumber = Math.floor(Math.random() * 6);
//     var shoppingCart = Number(prompt("what is the total amount of your bill?"))
//     var billTotal = calculateTotal(luckyNumber,shoppingCart)
//     alert("Your lucky number was: " + luckyNumber + "\nYour price before the discount was: $" + shoppingCart + "\nYour total after the discount is $" + billTotal);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//
// var userInput = Number
// var userTotal = userInput += 100
// var userPositive = "positive"
// var userNegative = "negative"
// confirm("Would you like to pick a number");
// prompt("Please give me a number");
// function pickNumber(userInput) {
//     if (userInput % 2 == 0){
//         alert("This number is even");
//     }else if (userInput ) {
//         alert("This number is odd");
//     }else if (userInput + 100) {
//         alert(userInput + "100" + userTotal);
//     }else if (userInput % 2 !== 0)  {
//         alert("This is a positive number");
//     }else if (userInput % 2 == 0) {
//         alert("This is a negative number");
//     }else (isNaN(userInput)); {
//         alert("This is NOT a Number")
//     }
// }
// pickNumber();

//Shanshan-
// var isEnter = confirm("would you like to enter a number");
//
// if (isEnter === true) {
//     var userNumber = prompt("pleas enter a number");
//
//     if (isNaN(userNumber) === true) {
//         alert("Hey! That is NOT a number")
//     }
//     if (userNumber % 2 === 0){
//         alert("This is an even number");
//     } else {
//         alert("this is an odd number");
//     }
//     userNumber = parseInt(userNumber);
//     var plusHundred = userNumber + 100;
//     alert(userNumber + " plus 100 is " + plusHundred);
//
//         if (userNumber > 0){
//             alert(userNumber + " is positive");
//         }else if (userNumber < 0) {
//             alert(userNumber + " is negative");
//         }else {
//             alert("This is neither a positive or negative number");
//         }
// }
//
// function  isEven(number) {
//     if (number % 2 === 0) {
//     return true;
//     }else {
//     return false;
//     }
// }
//
// function isPositive(number) {
//     if (number > 0){
//         return true;
//     }else  if (number < 0) {
//         return false;
//     }else {
//         return "not positive nor negative";
//     }
// }
//
// function isString(number) {
//     if (isNaN(number) === true) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
//
//     if (isEnter) {
//         if (isString(userNumber)) {
//             alert("Hey! That is NOT a number");
//         } else {
//             userNumber = Number(userNumber);
//             if (isEven(userNumber)) {
//                 alert(userNumber + "is even");
//             } else {
//                 alert(userNumber + "is odd");
//             }
//         }
//     }