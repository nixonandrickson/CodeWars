// Write a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.



function stringy(size) {
    // Starting with the string having the number 1 in it already so the size needs to get reduced by 1
    size -= 1
    let strNums = "1"

    // Running a for loop that checks if the last value in the string is 1 or 0 and Concatenates the opposite.
    for (let i = 0; i < size; i++) {
        if (strNums[i] === "1") {
            strNums += "0"
        }else if (strNums[i] === "0") {
            strNums += "1"
        }
    }

    return strNums

    // Concatenates the result of i % 2 onto the str value. 
    // let str = ''
    // for (let i = 1; i <= size; i++) {
    //     str += i % 2
    // }
    // return str

}
