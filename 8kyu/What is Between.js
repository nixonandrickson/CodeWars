// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]



function between(a, b) {
    // array is declared to hold all the numbers in between "a" and "b"
    let allBetween = []

    // For look that is initialized to "a" and ends with "b"
    // Increments by 1, pushing that number to the array made before until it reaches "b" 
    for (let i = a; i <= b; i++) {
        allBetween.push(i)
    }

    // Return the array after all the numbers between "a" and "b" have been added to it
    return allBetween
}
