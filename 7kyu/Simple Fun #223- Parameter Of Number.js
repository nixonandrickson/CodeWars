// Task
// Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.

// Calculate the parameter of the given number n.

// Input/Output
// [input] integer n

// A positive integer. It is guaranteed that no zero appears in n.

// [output] an integer

// The parameter of the given number.

// Example
// For n = 22, the output should be 4.

// Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.

// For n = 1234, the output should be 120.

// 1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120



function parameter(n) {
    // JS functions to get GCD which in turn will get us the LCM using an LCM formula.
    const gcd = (a, b) => a ? gcd(b % a, a) : b
    const lcm = (a, b) => a * b / gcd(a, b)

    // Turn the input into a string so that it can be split and reduced to get the sum and product.
    let numArr = String(n).split('')
    let numAdd = numArr.reduce((acc,c) => acc + Number(c), 0)
    let numMult = numArr.reduce((acc,c) => acc * c)

    // Using lcm function to get the lcm of the sum and product.
    return [numAdd, numMult].reduce(lcm)

}

