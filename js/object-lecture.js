//What's going on with these objects?
//Well: an OBJECT is a grouping of data + functionality
//Our data. . we call properties [in a 'key:value' pair]
//Our functions . . we call methods.

//Let's set up an object and .log it to see what we're looking at:

var myCounty = {
    name: "Bexar",
    countySeat: "San Antonio",
    currentPop: 2004000
}

console.log(myCounty);

var myDog = {
    name: "Fenix", //properties = key: values
    age: 11, //property
    breed: "Pembroke Welsh Corgi" //property
}

console.log(myDog);myDog

var myself = {
    name: "Patric",
    age: 23,
    height: "5'10: on a good day"
}
console.log(myself);
//.log-ing the above gets us the object 'printed' or 'viewed' in the console where we can click into the object to see its shape [properties]

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
* New Object Instance vs. Object Literal Notation *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We can call the 'constructor' for an object and use it to create our objects:
//  var myObject1 = new Object();
//
//  console.log(myObject1)

//More often, we'll use this object literal notation structure as shown above and below:

// var myObject2 = {};
//
//  console.log(myObject2);

//* TODO: Create a new Object and call it 'myCar' using either way to do so shown above (object instance or object literal)
//
var myCar = {};
//
console.log(myCar)

// That's great! But our car object doesn't have much going on, does it? There's no depth or meat to it - how can we fill our object in?

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                   Properties                    *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We assign properties to objects - properties are pieces of data and fill in the guts / details of our object

//Let's take myCar. . and actually line out what my car is.

// We can use dot notation to do so:

// myCar.make = "Acura";
//
// // Or array notation:
//
// myCar["Model"] = "TL";

//In general, dot notation is preferred of the two notations
//We can also set up our objects and properties/methods during object creation



// TODO: Fill in your myCar object with properties of make, model, and year with the correct values. If you don't own a vehicle, fill in the details with your favorite vehicle.

//For me? I'm missing the year for myCar so. .
myCar.make = "Acura";
myCar.model = "TL";
myCar.year = 2012
myCar.color = "Black Pearl";
console.log(myCar);

//Now I have a completed example of the myCar object - the model and make were added above in prior examples

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*           Object Properties && Methods          *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

//With our myCar objects set up, let's start utilizing them and diving into them!
//We can use dot notation or array notation in similar ways to start accessing these properties

//Let's share some information about our cars :)
    
alert("Howdy! I own a " + myCar["make"] + " " + myCar.model);

//We can tap into our prior understanding of assigning variables thus far and assign a property to a variable:

var myCarYear = myCar.year;
alert("Oops, I forgot to tell you what year my vehicle was " + myCarYear)

//What if we wanted to create a more complicated piece of data? Perhaps a list of our cars FEATURES?


//Now we could do something like this. . a list of those features in the console

// console.log(myCar.features)
// for loop

// for (var i = 0; i < myCar.features.length ;i++){
//     console.log("Here is one of my car's features:" + myCar.features[i]);
// }

// TODO: Add an array of features that your vehicle has!

myCar.features = ["Heated seats", "leather seats", "Navigation system", "Powered sunroof", "Dolby sound-system"];


//I already added an array of features above in the lecture, so I'm good to go.

//What about who owns our car? That could be an object itself if we think it through - the owner has a firstName and a lastName at the very least, right?

var carOwner = {
    firstName: "Patric",
    lastName: "Noriega",
    age: 23,
    zipCode: 78023,
    contactPhone: "mobile",
    phoneNumber: 2103178161

}
//Let's try nesting this object inside of our car object we've been building out

myCar.owner = carOwner;
console.log(myCar);

// TODO: Nest a 'carOwner' object of your own into this growing myCar object and console.log the results!

//An object can also contain within itself a method (function). We can set it up similarly to our properties, but with a value that is the function expression

//propertey: function(){. . . } //Note no function Name
var turnMyCarOn = function(){
    alert("Pressing the start button to fire up the " + this.make + " " + this.model)
}
myCar.turnOn = turnMyCarOn;

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                 Arrays of Objects               *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

//Let's tie some things together: Let's make a garage with another car!

//Now: loop through an ARRAY of OBJECTS, accessing our turnOn function for our vehicles
//Also note: we used the keyword *this* on the other vehicle's turnOn function, so this will be a good experiment to see the results


//One final TODO: A bigger task - set up your own garage and add at least another vehicle into it. Log your garage array to verify it contains the cars you want - once your garage has the right cars, write a loop to access some properties or a method from them!

var dreamCar = {
    make: "Ford",
    model: "Mustang",
    year: 1967,
    turnOn: turnMyCarOn
}
var dreamCar2 = {
    make: "Acura",
    model:"TLX Type S",
    year:2021

}
var dreamCar3 = {
    make: "Chevy",
    model: "Camero SS",
    year: 1969
}
var theGarage = [myCar, dreamCar, dreamCar2, dreamCar3];
console.log(theGarage)

theGarage.forEach(function (car) {
    car.turnOn();

});