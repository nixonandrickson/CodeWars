// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let accum = 1
    let accumString = ``

    // Loops through first string to do a specific task for every letter
    for (let i = 0; i < s.length; i++){
        for (let j = 1; j <= accum; j++){
            // Adds a dash and then capital letter if it is not the first letter in the original string
            if (j == 1 && i > 0){
                accumString += `-${s[i].toUpperCase()}`
            // Makes the letter capitalized and only goes into this else if statement if it is the first letter in the original string
            }else if (j == 1){
                accumString += s[i].toUpperCase()
            // Makes the "duplicated" letters lowercase
            }else if (j > 1){
                accumString += s[i].toLowerCase()
            }
        }
    // Increments accum to keep track of how many duplicated letters it should add
    accum++
    }

    return accumString
}


//                              CodeWars Solution
// function accum(s) {
//     return s.split('')
//     .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
//     .join('-');
// }