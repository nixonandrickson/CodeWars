// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



function findAverage(array) {
    // If array length is 0 it will return 0
    // Else it will use reduce function to get the total sum of the array then divide by it's length to get the average
    return array.length === 0 ? 0 : array.reduce((acc,c) => acc + c, 0) / array.length
}
