// The sum of x consecutive integers is y. What is the consecutive integer at position n? Given x, y, and n, solve for the integer. Assume the starting position is 0.

// For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?

// We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5.

// position(4, 14, 3) == 5
// Assume there will always be a sum of x consecutive integers that totals to y and n will never be indexed out of bounds.



function position(a, b, c) {
    let consecInts = []

    if (b % a === 0) {
        consecInts.push(b / a)
        for (let x = 1; x <= ((a - 1) / 2); x++) {
            consecInts.unshift((b / a) - x)
            consecInts.push((b / a) + x)
        }
    }else{
        consecInts.push(Math.floor(b / a))
        consecInts.push(Math.ceil(b / a))
        for (let x = 1; x <= ((a / 2) - 1); x++) {
            consecInts.unshift(Math.floor(b / a) - x)
            consecInts.push(Math.ceil(b / a) + x)
        }
    }
    return consecInts[c]
}

console.log(position(7, 749, 5))