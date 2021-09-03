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