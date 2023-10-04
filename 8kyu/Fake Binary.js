// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



function fakeBin(x) {
    // Use regex to replace all the characters 0-4 with a 0 and all characters 5-9 with a 1
    x = x.replace(/[0-4]/g, 0)
    x = x.replace(/[5-9]/g, 1)

    return x
}
