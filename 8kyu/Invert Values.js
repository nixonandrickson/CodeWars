// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array){
    // The map() method will pass a function through every element, without changing the original array, and create a new array using the new values for each element.
    return array.map(x => -x)
    // This map() method took every element in the array "array" and created a new array where every element was "the original element * -1"
}