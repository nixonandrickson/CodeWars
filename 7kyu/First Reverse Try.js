// Task
// Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

// Given an array arr, swap its first and last elements and return the resulting array.

// Example
// For arr = [1, 2, 3, 4, 5], the output should be [5, 2, 3, 4, 1]

// Input/Output
// [input] integer array arr

// Constraints: 0 ≤ arr.length ≤ 50,  -1000 ≤ arr[i] ≤ 1000

// [output] an integer array

// Array arr with its first and its last elements swapped.



function firstReverseTry(arr) {
    // Checks if input array has a length greater than 1 because if not we want the function to return the array as is
    // firstIndex variable holds the original value of the first index so that we can swap to that to the end after we change the first index to the last
    if (arr.length > 1) {
        let firstIndex = arr[0]
        arr[0] = arr[arr.length - 1]
        arr[arr.length - 1] = firstIndex
    }
    
    return arr


    // // This makes a deep copy of the arr input. This makes it so that changing the new array won't change the original array.
    // let firstLastReverse = [...arr]

    // firstLastReverse[arr.length - 1] = arr[0]
    // firstLastReverse[0] = arr[arr.length - 1]

    // if (arr.length == 0) {
    //     return []
    // }else {
    //     return firstLastReverse
    // }
}
