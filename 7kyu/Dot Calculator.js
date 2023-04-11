// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.


function dotCalculator (equation) {
    // Declaring "result" variable to place answer
    let result = ``
    // Making an array that splits the string, separated by the spaces in the string. So first should be all the .'s before the operator.
    let [first,operator,second] = equation.split(` `)

    // Checks the operator value to see whether it should add, subtract, etc.
    if (operator === `+`) {
        for (let i = 0; i < (first.length + second.length); i++) {
            result += `.`
        }
    }else if (operator === `-`) {
        for (let i = 0; i < (first.length - second.length); i++) {
            result += `.`
        }
    }else if (operator === `*`) {
        for (let i = 0; i < (first.length * second.length); i++) {
            result += `.`
        }
        // Using Math.floor because the challenge wants 5 / 2 to equal 2, not 3.
    }else if (operator === `//`) {
        for (let i = 0; i < (Math.floor(first.length / second.length)); i++) {
            result += `.`
        }
    }
    
    return result
}