// Task
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Examples (input -> output)
// "ab","AB"     -> true
// "aB","Ab"     -> true
// "aBcd","AbCD" -> true
// "AB","Ab"     -> false
// "",""         -> false



function isOpposite(s1,s2) {
    // Checks if s1 length and s2 length are not the same, if any of the lengths = 0 or if they are completely different srtings of the same length
    // Will return false if any of these conditions are true
    if (s1.length != s2.length || s1.length == 0 || (s1.toLowerCase() != s2.toLowerCase())) {
        return false
    }

    let counter = 0
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            // Will increase counter by 1 if each same number index is different in both strings
            // Because we already know that the strings must be the same strings just different upper/lower case then it's safe to assume that we can increase counter if this condition returns as false
            counter++
        }
    }
    // If the counter is the same as the length of any of the strings then the overall function must be true
    if (counter === s1.length) {
        return true
    }else {
        return false
    }
}
