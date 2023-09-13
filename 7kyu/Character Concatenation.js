// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

// If the string's length is odd drop the central element.

// For example:

// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result



function charConcat(str) {
    // Create string to hold new concatenated string
    let concatStr = ""
    // Iterates through the "str" input and adds the first and last character, slowly going towards the center. (if odd number doesn't include the middle character)
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        concatStr += `${str[i]}${str[str.length - (i + 1)]}${i + 1}`
    }
    
    return concatStr    
}
