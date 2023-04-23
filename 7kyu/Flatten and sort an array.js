// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically.



function flattenAndSort(array) {
    // .join() puts all the indexes and nested arrays into a string
    // .split(',') changes the string back into an array but without any nested arrays
    // .filter(e => e) filters out any empty indexes
    // .map(Number) changes all the indexes from strings to number
    // .sort((a, b) => a - b) sorts all the indexes in ascending order.
    return array.join().split(',').filter(e => e).map(Number).sort((a, b) => a - b)
}
