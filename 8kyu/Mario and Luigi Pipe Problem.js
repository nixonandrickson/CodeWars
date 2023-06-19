// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8



function pipeFix(numbers) {
    // Makes an empty array to push values into later
    // Stores the min and max value of the "numbers" using Math() function in case the numbers aren't in numerical order in the array
    let output = []
    let min = Math.min(...numbers)
    let max = Math.max(...numbers)

    // For loop that starts at the min value of the array and pushes increments of 1, up until the max value, into the blank array that was declared.
    for (let i = min; i <= max; i++) {
        output.push(i)
    }

    return output
}