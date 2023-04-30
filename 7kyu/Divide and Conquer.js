// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.



function divCon(x){
    // Makes an array with only the indexes that were originally integers
    let ints =  x.filter(e => Number.isInteger(e))
    // reduce() method to get the sum of the int array
    let intsTotal = ints.reduce((acc,c) => acc + c, 0)

    // Makes an array with only the indexes that were originally strings
    let strings = x.filter(e => typeof e === `string`)
    // Turns the string numbers into integer numbers
    for (let i = 0; i < strings.length; i++) {
        strings[i] = parseInt(strings[i])
    }
    // reduce() method to get the sum of the string array
    let stringsTotal = strings.reduce((acc,c) => acc + c, 0)

    return intsTotal - stringsTotal
}
