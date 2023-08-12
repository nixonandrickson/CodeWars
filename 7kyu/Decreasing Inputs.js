// This kata is all about adding numbers.

// You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?

// Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

//   add(3,4,6); 
//   /*
//   returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
//   */
// Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.

// Example

//   add(); //=> 0
//   add(1,2,3); //=> 3
//   add(1,4,-6,20); //=> 6



function add() {
    // Create a variable to hold the sum of the arguments (if there are any)
    let sum = 0

    // Will return 0 if there are no arguments passed through the function
    if (arguments.length === 0) {
        return 0
    // Goes through the arguments as if it was an array and adds each "index"
    }else{
        for (let i = 0; i < arguments.length; i++) {
            sum += (arguments[i] / (i + 1))
        }
        
        // Returns the rounded "sum" of the arguments
        return Math.round(sum)
    }
}
