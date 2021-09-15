console.log("hellooo");
// function tellFortune(kids, married, lives, job) {
//     var fortune = {
//         kids: Math.floor(Math.random() * (10 + 1) + 1),
//         married: ["sally", "jill", "liz", "jen", "cait"],
//         lives: ["SATX", "NYC", "LA"],
//         job: ["bank manager", "retail", "software developer"]
//     }
//     return prompt("this is your future, you will have" + fortune.kids + "living in," + fortune.lives + "married to," + fortune.married + "working as," + fortune.job);
// }
//tellFortune();

function tellFortune(kids, married, lives, job) {
    var output = "this is your future, you will have" + kids + "living in," + lives + "married to," + married + "working as," + job;
    return output;
}
tellFortune();

// function calculateDogAge(humanYears) {
//     var dogYears = humanYears * 7;
//     return "my dog is " + dogYears + " old in dog years!";
// }
// calculateDogAge();
function calculateDogAge(puppyAge, conversionNum) {
   var humanYears = puppyAge * conversionNum;
    return "my dog is " + humanYears + "  years old in dog years " + " and is " + puppyAge + " in dog years" ;
}
calculateDogAge();

// Given arrays of strings that are orders of food in string form to your function, write a function named tacoTuesday that returns TRUE or FALSE if the array provided has any element mention the word ‘taco’ in its value.

    var hasTacos = ['blueberry muffin', 'banana', 'yogurt', 'cereal', 'brisket and egg taco']
    var noTacos = ['parfait', 'omlette de frumage', 'protein shake', 'fasting'];

    tacoTuesday(hasTacos) //true
    tacoTuesday(noTacos) //false

    //my code
    // function tacoTuesday(hasTacos) {
    //     return hasTacos === "taco" || noTacos == "taco";
    // }
    //     function tacoTuesday(hasTacos, noTacos) {
    //     if (hasTacos.includes("taco")){
    //         return true;
    //     }else{
    //         if (noTacos.includes("taco")){
    //             return false;
    //             }
    //         }
    //     }

    //code review
    // function tacoTuesday(arr) {
    //     for (var i = 0; i < arr.length; i++) {
    //
    //     }
    //     if (arr[i].includes("taco")) {
    //         return true;
    //     }
    //         return false;
    // }



