"use strict";
console.log("Hello from external JavaScript" );

alert("Welcome to my Website! ");

var userInput = prompt("What is your favorite color? ");
console.log('The user entered: ' + userInput);

alert("Great, " + userInput + " is my favorite color too!");

// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.


//Original code
// var userMovie = prompt("You have rented some movies for your kids: The little mermaid (for 3 days), " +
//     "Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). " +
//     "If price for a movie per day is $3, how much will you have to pay? ");
// console.log('The user entered: ' + userInput);
//
// alert("Correct answer: 27");

var daysRented = prompt("How many days did you rent your movie?")
alert(daysRented + " is how many days they entered.");
alert(("$" + daysRented * 3) + " is how much you owe for your rental");

var userMoney = prompt("Suppose you're working as a contractor for 3 companies: " +
    "Google, Amazon and Facebook, they pay you a different rate per hour. " +
    "Google pays $400, Amazon $380, and Facebook $350. " +
    "How much will you receive in payment for this week? You worked 10 hours for Facebook, " +
    "6 hours for Google and 4 hours for Amazon.");
console.log('The user entered: ' + userInput);

alert("correct answer:  7,420");

var studentEnrolled = prompt("Is the class full or not? ");
console.log('The user entered: ' + userInput);
studentEnrolled + prompt("Does the class schedule conflict " +
    "with your current schedule? ");
console.log('The user entered: ' + userInput);

alert("You may enter the class!");

//Original Code
// alert("A product offer can be applied only if a person buys " +
//     "more than 2 items, and the offer has not expired. " +
//     "Premium members do not need to buy a specific amount of products. ");
// var productOffer = prompt("Are you a member? ")
// console.log('The user entered: ' + userInput);
//
// alert(" Please, take a coupon. ");

//Before Refactor
// var shoppingCart = 4;
// var offerValid = true;
// var premiumMember = true;
// console.log("Customer qualifies for offer? " + (shoppingCart > 2 || premiumMember) && offerValid);


var shoppingCart = prompt("How many items are in your cart?");
var premiumMember = confirm("Do you have your membership card?");
var offerValid = confirm("Did we have a discount offer today?");

alert("Customer qualifies for offer? " + (shoppingCart > 2 || premiumMember) && offerValid);

