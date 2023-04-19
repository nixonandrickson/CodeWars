// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).



function insertDash(num) {
    // Makes the num input a string first so that it can be split into an array
    let numArr = num.toString().split('')

    // Checks the index in the current pass through the loop and the next index
    // If both values are odd then it will concatenate a '-' to the index
    // This way there will be a '-' between two odd numbers.
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 === 1 && numArr[i+1] % 2 === 1) {
            numArr[i] += '-'
        }
    }

    return numArr.join('')
}
