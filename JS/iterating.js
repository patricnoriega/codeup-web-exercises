(function(){
    "use strict";
// console.log("I'm batman")
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
            var names = ["patric" , "ethan", "evan", "rocco"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
            console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
            console.log(names[0]);
            console.log(names[1]);
            console.log(names[2]);
            console.log(names[3]);
        /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
            for(var i = 0; i < names.length; i += 1) {
                console.log("The 'name' index " + i + " is at: " + names[i]);
            }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
            names.forEach(function(name) {
                console.log("Element " + name);
            });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
            var first = ["1", "2", "3", "4", "5"]
                console.log(first[0]);

            var second = ["1", "2", "3", "4", "5"]
                console.log(second[1]);

            var last = ["1", "2", "3", "4", "5"]
                console.log(last[4]);



            var num = [1, 2, 3, 4, 5]
                function first(array) {
                return (array[0])
        }
            console.log(first(num));


                function second(array) {
                return (array[1])
        }
            console.log(second(num));


                function last(array) {
                return (array[4])
        }
            console.log(last(num));
})();