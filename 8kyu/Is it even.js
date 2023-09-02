// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.



function testEven(n) {
    // Inherantly returns true if n % 2 equals 0, will return false if there is a remainder
    return n % 2 === 0
}