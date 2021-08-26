console.log("can anybody here me...");
//Break and continue exercises

// var inputCorrectNumber = Number(prompt("Input an odd number"));
// do {
//   var inputCorrectNumber = prompt("Input an ODD NUMBER");
// }while (inputCorrectNumber % 2 === 0  );
//     var i = 1;
//     while (i < 50) {
//     console.log(i + ":" + " is an odd number");
//     i = i + 2;


// while(!inputCorrectNumber)
//     for (var i = 0; i <= userOddNumber(); i++) {
//         if (i % 2 === 0) {
//             break;
//         }
//         console.log(userOddNumber(x))
//     }
// return x;
// }

function numberSkip() {
    var userInput;
    while (true) {
        userInput = prompt("Input an odd number between 1-50")
        if (userInput % 2 !== 0 && userInput > 0 && userInput < 51) {
            break;
        }
    }
    console.log("Number to skip is: " + userInput);

    for (var i = 1; i < 50; i += 2){
        if (i == userInput) {
            console.log("Yikes skipping number: " + i);
            continue;
        }
        console.log("Here is an odd number" + i);
    }
}
