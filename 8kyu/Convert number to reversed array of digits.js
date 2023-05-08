// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    // toString() converts the integer into a string so that it can be split into an array and then reversed
    // the map(i => +i) changes all the indexes into an integer
    return n.toString().split('').reverse().map(i => +i)
}