// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".



function problem(x) {
    // Checks if typeof "x" equals a number then does the operation, if not then it'll return "Error"
    return typeof x === `number` ? x * 50 + 6 : `Error` 
}
