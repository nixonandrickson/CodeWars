// Factorials are often used in probability and are used as an introductory problem for looping constructs. In this kata you will be summing together multiple factorials.

// Here are a few examples of factorials:

// 4 Factorial = 4! = 4 * 3 * 2 * 1 = 24

// 6 Factorial = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
// In this kata you will be given a list of values that you must first find the factorial, and then return their sum.

// For example if you are passed the list [4, 6] the equivalent mathematical expression would be 4! + 6! which would equal 744.

// Good Luck!

// Note: Assume that all values in the list are positive integer values > 0 and each value in the list is unique.



function sumFactorial(arr){
    // Recursive factorial function since JS doesn't have a built in factorial method like it does with square root,absolute vaue, etc.
    // If n < 0, return -1. else if n === 0, return 1. else return n * factortial(n-1)
    function factorial(n) {
        return n < 0 ? -1 : n === 0 ? 1 : n * factorial(n - 1);
    }
    // Changes every index's value to that of it's factorial value. so if array[1] === 3, it would get changed to array[1] = 6
    for (let i = 0; i < arr.length; i++) {
        arr[i] = factorial(arr[i])
    }
    // Basic reduce() mathod to get a sum of the array.
    return arr.reduce((a,c) => a + c, 0)
}
