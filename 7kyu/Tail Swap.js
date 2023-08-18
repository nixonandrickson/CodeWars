// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]



function tailSwap(arr) {
    // Creates new array that maps the original array by splitting each element in the original array by the colons in each element
    let newArr = arr.map(e => e.split(':'))
    // Returns an array that is rearranged according to the instructions
    return [`${newArr[0][0]}:${newArr[1][1]}`, `${newArr[1][0]}:${newArr[0][1]}`]
}
