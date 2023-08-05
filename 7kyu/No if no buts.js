// Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

// (5, 4)   ---> "5 is greater than 4"
// (-4, -7) ---> "-4 is greater than -7"
// (2, 2)   ---> "2 is equal to 2"
// There is only one problem...

// You cannot use if statements, and you cannot use the ternary operator ? :.

// In fact the word if and the character ? are not allowed in your code.



function noIfsNoButs(a, b) {
    let numArr = [a, b]
    
    return ((a > b && `${Math.max(...numArr)} is greater than ${Math.min(...numArr)}`) || ((a < b) && `${Math.min(...numArr)} is smaller than ${Math.max(...numArr)}`) || ((a == b) && `${a} is equal to ${b}`) )
}

