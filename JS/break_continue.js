console.log("can anybody here me...");

var inputCorrectNumber = Number(prompt("Input an odd number"));

function userOddNumber(x) {
    while(!inputCorrectNumber)
    for (var i = 0; i <= x; i++) {
        if (i % 2 === 0) {
            continue;
        }
        console.log(userOddNumber(x))
    }
    return x;
}