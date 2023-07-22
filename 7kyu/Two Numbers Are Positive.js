// Task:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false



function twoArePositive(a, b, c) {
    // Made an array with the arugments as indexes
    let threeNums = [a, b, c]
    let counter = 0

    // Iterates through the declared array and checks if each argument is greater than 0
    // If it is then "counter" is incremented by 1
    threeNums.forEach((e) => {
        if (e > 0) {
            counter++
        }
    })

    // Will return true if true, else false.
    return counter == 2

    // Makes an array filled with any arbitrary amount of arguments. Runs that array through a filter that filters out any values less than 1.
    // If the filter length is equal to 2 then it'll return true, if not then false. 
//  return [...arguments].filter(value => value > 0).length == 2
}
