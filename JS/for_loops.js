console.log("Hellooooo, is anyone out there...");
// #2


function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = "  + num * i);
    }
}

showMultiplicationTable(num);
//
//
// // #3
var randomNumbers = Math.floor(Math.random() * 200) + 20;
for (var randomNumbers = 20; randomNumbers <= 200; randomNumbers++) {
    if (randomNumbers === 0) {
        console.log(randomNumbers + " is even");
    }else if (randomNumbers % 2 === 0) {
        console.log(randomNumbers + " is even");
    }else {
        console.log(randomNumbers + " is odd");
    }
}
console.log(randomNumbers);
//
// #4
var a, b;
var height = 9;
var string = "";
for (a = 1; a <= 9; a++) {
    for (b = 1; b <= a; b++) {
        string += a;
    }
    string += "\n";
}
console.log(string);


 // #5
for (var i = 100; i >= 5; i-= 5) {
    console.log(i);
    }