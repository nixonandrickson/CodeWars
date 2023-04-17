// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.



function consecutive(arr) {
    let consecArr = []

    // Adds every number, to the "consecArr" array, from the min number in the array to the max number. It doesn't care what other numbers were in the original array other than the min and max.
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        consecArr.push(i)
    }

    // The difference between their lengths would be how many new numbers were added, which is exactly the number we're looking for
    return consecArr.length - arr.length
}
