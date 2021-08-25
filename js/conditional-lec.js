
// if else statement:
var isSunny = true;

if(isSunny) {
    // do some stuff
    alert("Don't forget your sunscreen!");
}else {
    alert("Good - to much sun can cause issues when you get older.");
}


// else  if statement
var isSunny = confirm("Is it sunny outside today?")
var haveSunscreen = confirm("did you remember your sunscreen?")

if(isSunny && haveSunscreen) {

    alert("Great! you brought your sunscreen dont forget to apply!");

}else if (isSunny && !haveSunscreen) {

    alert("ahhh man, it's sunny out there today");

} else {
    alert("well hopefully its not too sunny out today");
}



//my else-if statement
function uglyWeather() {
    var isRaining = confirm("Is it wet outside?")
    var haveUmbrella = confirm("did you grab that umbrella!")

    if (isRaining && haveUmbrella) {
        alert("Great stay dry!")
    } else if (isRaining && !haveUmbrella) {
        alert("You might want to find an extra set of clothes!")
    } else {
        alert("Looks like it will be a nice day here in San Antonio!")
    }
}
uglyWeather();

// if, else-if, else w/ strings *before switch statement
//
// function trafficColor() {
//     var userTrafficLight = prompt("What color is the traffic light?")
//
//     if (userTrafficLight === "red") {
//     var isBlinking = confirm("Uh oh is the red light blinking?")
//         if(isBlinking){
//         //    nested conditional to trigger if condtion 1 is true and this condition is true
//             alert("If the red light is blinking treat it like a stop sign");
//         }
//         alert("STOP!!!");
//     } else if (userTrafficLight === "yellow") {
//         alert("Slow down! if in intersection proceed though");
//     } else if (userTrafficLight === "green") {
//         alert("Green light, continue through and follow the rules of road");
//     } else {
//         alert("Uh oh - be aware of your surroundings the traffic light looks a little bit off");
//     }
// }
//   trafficColor();

//switch statement refactor of above
function trafficColor() {
    var userTrafficLight = prompt("What color is the traffic light?")

    userTrafficLight = userTrafficLight.toLowerCase();

    switch (userTrafficLight) {
        case "red":
            alert("STOP!!!");
            break;
        case "yellow":
            alert("Slow down! if in intersection proceed though");
            break;
        case "green":
            alert("Green light, continue through and follow the rules of road");
            break;
        default:
            alert("Uh oh - be aware of your surroundings the traffic light looks a little bit off")
    }
}


//Before Ternary
if (false) {
    console.log("Its a sunny day outside");
}else {
    console.log("It is not sunny outside");
}

//after ternary
var  isSunny = "not so sunny";

(isSunny === "Sunny") ? console.log("Its sunny outside") : console.log("Its not sunny");

