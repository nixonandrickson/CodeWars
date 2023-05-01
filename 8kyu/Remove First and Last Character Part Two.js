// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL



function array(string) {
    // Converts the string in an array
    let array = string.split(',')
    // If the array is longer than 2 indexes then the first and last indexes will get removed or else return null
    if (array.length > 2) {
        array.shift()
        array.pop()
    }else {
        return null
    }
    // Return the array joined back together as a string
    return array.join(' ')
}
