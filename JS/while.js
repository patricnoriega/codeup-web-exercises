console.log("Just nod if you can hear me")
// var i = 10;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }

// var i = 2;
// while (i <= 65536) {
//     console.log(i);
//     i = i * 2;
// }

var allCones = Math.floor(Math.random() * 50) + 50;
do {
   allCones = confirm("I have to sell: " + allCones + " cones before I can go home.")
    var conesSold = Math.floor(Math.random() * 5) + 1;
   conesSold = confirm("I sold: " + conesSold + " cone(s) to each customer so far today.")
}while (conesSold < allCones);

console.log(allCones /= conesSold)