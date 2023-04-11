// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending){
    // Splits str to make it into an array so that I can use .shift() method on it
    let strArr = str.split('')

    // Will remove first index with .shift() if the length of "strArr" is greater than "ending"
    while (strArr.length > ending.length) {
        strArr.shift()
    }

    // Makes a new variable that holds strArr converted into a string using .join('')
    let strShortened = strArr.join('')

    // Compares if the string that was altered equals the "ending" string
    if (strShortened === ending){
        return true
    }else{
        return false
    }
}

//      CodeWars Solution
// function solution(str, ending){
//     return str.endsWith(ending);
// }