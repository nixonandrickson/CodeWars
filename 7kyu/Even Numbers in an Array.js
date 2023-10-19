// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]



function evenNumbers(array, number) {
    // empty array to store the amount of even numbers
    let customArr = []
    // Array that filters out all the even numbers and puts them in the array "evenArr" then reverses it to make the for loop add numbers to the array in order
    let evenArr = array.filter(x => x % 2 == 0).reverse()

    // For loop adds only the amount of "number" to the customArr.
    for (let i = 0; i < number; i++) {
        customArr.unshift(evenArr[i])
    }

    return customArr
}
