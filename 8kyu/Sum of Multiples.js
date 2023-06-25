// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"



function sumMul(n,m) {
    // variable for n to increment by original n even after n gets changed later
    let constN = n
    let mul = 0
    let sum = 0

    if (m <= 0 || n <= 0) {
        return `INVALID`
    }
    // If m is ever divisible by n then it will exclude m by subtracting 1.
    if (m % n > 0) {
        mul = Math.floor (m / n)
    }else if (m % n === 0) {
        mul = m / n - 1
    }
    // Adds the current "n" to the variable sum
    for (let i = 0; i < mul; i++) {
        sum += n
        n += constN
    }

    return sum

    // Alternative solution (more efficient)
    // return invalid if m is ever equal to or less than n
        // let sum = 0
        // if (n >= m) {
        //     return `INVALID`
        // }
    // Increment i by n which will add the next multiple instead of having separate variables for that.
    // The for loop will stop whenever i reaches m which is exactly what the problem wants
        // for (let i = n; i < m; i += n) {
        //     sum =+ i
        // }

        // return sum
}
