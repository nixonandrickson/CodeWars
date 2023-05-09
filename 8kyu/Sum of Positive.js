// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.



function positiveSum(arr) {
    // filter() method will return an array with only positive integers
    // reduce() method will add up all the numbers in the array (only positive integers because of filter())
    return arr.filter(i => i > 0).reduce((acc,c) => acc + c, 0)
}