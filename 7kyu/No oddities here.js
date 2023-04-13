// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


function noOdds(values){
    // Returns a new array that filtered out any values that didn't meet the conditional's requirement of having a remainder of 0 when divided by 2 (all even numbers)
    return values.filter(e => e % 2 === 0)
}