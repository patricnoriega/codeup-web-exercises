console.log("Just nod if you can hear me");
// #1
var i = 2;
while (i <= 65536) {
    console.log(i);
    i = i * 2;
}

// #2
function randomIcecream() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    do {
        allCones = confirm("I have to sell: " + allCones + " cones before I can go home.")
        var conesSold = Math.floor(Math.random() * 5) + 1;
        conesSold = confirm("I sold: " + conesSold + " cone(s) to each customer so far today.")

    }while (conesSold > allCones) {
        console.log("sorry no can do pal" + conesSold + "I only have " + allCones);

    }

    allCones -= conesSold;
    {
        console.log(conesSold + " cones sold");
    }
    while (allCones > 0) ;
    console.log("Yee I sold them all ")
}