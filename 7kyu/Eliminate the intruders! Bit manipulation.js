// Task
// You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

// In practice, you should implement this function:

// function eliminateUnsetBits(number);
// Examples
// eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
// eliminateUnsetBits("111") ->  7
// eliminateUnsetBits("1000000") -> 1
// eliminateUnsetBits("000") -> 0



function eliminateUnsetBits(number) {
    // Creates a variable that holds the string of "number" having all its 0's removed
    let setBits = number.replaceAll('0','')
    // Checks if the "setBits" variable holds nothing. Else converts the remaining 1s from binary to decimal and returns that value
    if (setBits === '') {
        return 0
    }else {
        return parseInt(setBits, 2)
    }
}
