// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!



function solve(s) {
    // First time using regex (regular expression)
    // \d is a digit (a character in the range [0-9]), and + means one or more times. Thus, \d+ means match one or more digits.
    // For example, the string "42" is matched by the pattern \d+.
    // So this .match() method returns an array of only numbers. Almost as if using a .split() method and using letters as the seperator
    let onlyNums = s.match(/\d+/g)

    // Returns the largest number in the filtered array of only numbers
    return Math.max(...onlyNums)
}
