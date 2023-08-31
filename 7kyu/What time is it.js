// Given a time in AM/PM format as a string, convert it to 24-hour military time time as a string.

// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

// Try not to use built-in Date/Time libraries.

// Examples
// "07:05:45PM"  -->  "19:05:45"
// "12:00:01AM"  -->  "00:00:01"
// "11:46:47PM"  -->  "23:46:47"



function getMilitaryTime(input) {
    // Checks if it's AM and 12. Changes "12" to "00"
    if (input.substring(8) === "AM" && input.substring(0, 2) === "12") {
        input = "00" + input.substring(2)
        return input.substring(0, 8)
    // If AM and not 12 will return the original string without the letters at the end
    }else if (input.substring(8) === "AM") {
        return input.substring(0, 8)
    // If PM and 12 will output the original string without the letters at the end
    }else if (input.substring(8) === "PM" && input.substring(0, 2) === "12") {
        return input.substring(0, 8)
    // If PM and not 12 will add 12 to the hour
    }else{
        input = (Number(input.substring(0, 2)) + 12) + input.substring(2)
        return input.substring(0, 8)
    }
}

