// Your task is to write function factorial.



function factorial(n) {
    // Recursive factorial function since JS doesn't have a built in factorial method like it does with square root,absolute vaue, etc.
    // If n < 0, return -1. else if n === 0, return 1. else return n * factortial(n-1)
    return n < 0 ? `Cannot Factorial Negative Numbers` : n === 0 ? 1 : n * factorial(n - 1)
}
