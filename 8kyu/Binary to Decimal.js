// Complete the function which converts a binary number (given as a string) to a decimal number.



function binaryToDec(binary) {
    // The .parseInt() method can convert a number to a different base. In this case we're changing the binary number into an int of base 2
    return parseInt(binary, 2)
}
