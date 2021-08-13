(function () {
    console.log("Welcome to functions!");

    function sayHello() {
        console.log("Hello!");
    }

    console.log("in the file after creating the sayHello function.");

    sayHello();
// Define an annyomous function
    var sayHowdy = function () {
        console.log("Howdy");
    }
    sayHowdy();

//Arguements and Paramaters
    function add(x, y) {
        return x + y;
    }

    console.log("add(2,3) " + add(2, 3));

    function subtract(x, y) {
        return x - y;
    }

// Scope
    var instructor = "Douglas";
    var day = "Friday";

    function tellTheDay() {
        return "Tell " + instructor + " it's " + day + "!";
    }

    function greeting() {
        var username = "Lil Flounder";
        return "Hi " + username;
    }

    console.log(greeting());

// console.log(username);

    function checkDay() {
        var day = "Monday";
        return day;
    }

    console.log("It's " + checkDay());
})();