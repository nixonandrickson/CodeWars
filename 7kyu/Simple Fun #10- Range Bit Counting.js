// Task
// You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

// Example
// For a = 2 and b = 7, the output should be 11

// Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.

// Input/Output
// [input] integer a
// Constraints: 0 ≤ a ≤ b.

// [input] integer b
// Constraints: a ≤ b ≤ 100.

// [output] an integer



function rangeBitCount(a, b) {
    // Creates an empty array to add the numbers between "a" and "b"
    let arr = []
    // Iterates from "a" to "b" to add every number to "arr"
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }
    // Maps "arr" to replace every element with it's binary equivalent
    // Joins all the binary numbers to make one long string of 1's and 0's
    // That new string is then split to create an array of 1's and 0's
    // That new array is then reduced, making sure to convert the element to a number before adding it to the accumulator.
    return arr.map(e => e.toString(2)).join('').split('').reduce((acc,c) => acc + Number(c), 0)

}

console.log(rangeBitCount(2, 7)) // output: 11