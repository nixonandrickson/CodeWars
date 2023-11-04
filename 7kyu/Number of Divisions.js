// Calculate how many times a number can be divided by a given number.

// Example
// For example the number 6 can be divided by 2 two times:

// 1. 6 / 2 = 3
// 2. 3 / 2 = 1 remainder = 1
// 100 can be divided by 2 six times:

// 1. 100 / 2 = 50
// 2. 50 / 2 = 25
// 3. 25 / 2 = 12 remainder 1
// 4. 12 / 2 = 6
// 5. 6 / 2 = 3
// 6. 3 / 2 = 1 remainder 1



function divisions(n, divisor) {
    // Declare variable to count how many times we divide
    let count = 0

    // Divides n (which gets reassigned to the new quotient) and incrmements the counter everytime the loop successfully runs
    while (n >= divisor) {
        n = Math.floor(n / divisor)
        count++
    }

    return count
}
