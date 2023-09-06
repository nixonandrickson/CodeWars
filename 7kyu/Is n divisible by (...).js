// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// Example:

// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7



function isDivisible() {
    // Makes an array with all the arguments
    let args = Array.from(arguments)
    // Iterates through the array to check if the first argument is divisible by the rest of the arguments
    // As soon as one argument doesn't pass the conditional the whole function returns false
    for (let i = 0; i < args.length; i++) {
        if (args[0] % args[i] != 0) {
            return false
        }
    }
    // If the for loop finishes and false isn't returned then true gets returned.
    return true
}

// Will only assign first input as n, not the rest of the arguments. 
// function isDivisible(n) {
//     for (let i = 0; i < arguments.length; i++) {
//         if (n % arguments[i] != 0) {
//             return false
//         }
//     }
//     return true
// }