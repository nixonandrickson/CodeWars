// Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// For example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H...", because 1 <= 3

// Requested maximum length will be greater than 0. Input string will not be empty.



function trim(str, size) {    
    // If size is ever more than the length of the string just return the string without any changes.
    if (size >= str.length) {
        return str
    // Else if the size is less than or equal to 3, return those 1-3 characters and then add "..." to the end of it
    // The "..." in this scenario doesn't count towards the "size" value
    }else if (size <= 3) {
        return `${str.slice(0, size)}...`
    // Last possibility is if the size is more than 3.
    // The string will get sliced to the size wanted and then an extra 3 characters will get sliced off to make room for the "..."
    }else if (size > 3) {
        return `${str.slice(0, size - 3)}...`
    }
}
