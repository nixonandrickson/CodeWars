// Your company MRE Tech has hired a spiritual consultant who advised on a new Balance policy: Don't take sides, don't favour, stay in the middle. This policy even applies to the software where all strings should now be centered. You are the poor soul to implement it.

// Task
// Implement a function center that takes a string strng, an integer width, and an optional character fill (default: ' ') and returns a new string of length width where strng is centered and on the right and left padded with fill.

// center(strng, width, fill=' ')
// If the left and right padding cannot be of equal length make the padding on the left side one character longer.

// If strng is longer than width return strng unchanged.

// Examples
// center('a', 3)  # returns " a "
// center('abc', 10, '_')  # returns "____abc___"
// center('abcdefg', 2)  # returns "abcdefg"



function center(strng, width, fill = " ") {
    // filler is created to know how many of the character "fill" have to be added to the string
    let filler = width - strng.length
    // filledStrng is created to not change the original strng variable
    let filledStrng = strng

    // If width is less than the length of the original string then just the string is returned
    if (width <= strng.length) {
        return strng
    // If the width is 1 more than the original string length then the "fill" in front fo the string is returned
    }else if (width === strng.length + 1) {
        return fill + strng
    /// This makes sure to add an extra "fill" to the front of the string if the amount of "fill" needed is an odd number.
    }else {
        for (let i = 0; i < Math.ceil(filler / 2); i++) {
            filledStrng = fill + filledStrng
        }
        for (let i = 0; i < Math.floor(filler / 2); i++) {
            filledStrng = filledStrng + fill
        }
        return filledStrng
    }


    // function center (strng, width, fill = ' ') {
    //     if (strng.length >= width) return strng;
    //     let r = fill.repeat(Math.floor((width - strng.length) / 2));
    //     let l = fill.repeat(Math.ceil((width - strng.length) / 2));
    //     return l + strng + r;
    // }
    
}

