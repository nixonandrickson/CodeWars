// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.


function betweenExtremes(numbers){
    // Sorts the array's integers in ascending order
    numbers.sort((a, b) => a - b)
    // Returns the max value - the min value
    return numbers[(numbers.length - 1)] - numbers[0]

       // new Float64Array will enable an array of numbers to be sorted in ascending order with just .sort() 
    // let orderedNumbers = new Float64Array(numbers).sort()
    // return orderedNumbers[(orderedNumbers.length - 1)] - orderedNumbers[0]

       // Math.max and Math.min will parse through the array and get the max and min value
    // return Math.max(...numbers) - Math.min(...numbers);
}