// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]



function largest(n, array) {
    // Array is sorted to get the numbers in ascending order.
    // Then the array is sliced to output the last "n" indexes. 
    // Accounts for "n" being 0 because if the array is sliced at full length of the array that index doesn't exist so it will return an empty array.
    return array.sort((a, b) => a - b).slice(array.length - n)
}