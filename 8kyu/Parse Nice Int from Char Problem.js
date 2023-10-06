// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.




function getAge(inputString) {
    // This "simbple" code only works because the age will always be a single digit and it will always appear at the first character of the input string
    return +inputString[0]
    
    // return parseInt(inputString) would be the "formal" way to code this
    // parseInt() will return (as a number) the numbers in a string, as long as they appear first
    // So "9 h 1" would return only 9. "h5" would return NaN because h came before 5. "5h" would return 5
}
