// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

// See the pattern below:

// initials('code wars') => returns C.Wars 
// initials('Barack Hussain obama') => returns B.H.Obama 
// Complete the function initials.

// Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.



function initials(n) {
    // Create an empty name string to add the names into.
    // Create an array that is the original string split by where the spaces are
    // Creates a last variable to make code further below a little more readable
    let name = ''
    let nameArr = n.split(' ')
    let lastIndex = nameArr.length - 1

    // Adds to the "name" variable the capitalized initials of every name, followed by a period, that isn't the last name
    for (let i = 0; i < lastIndex; i++) {
        name += `${nameArr[i][0].toUpperCase()}.`
    }
    // Adds to the "name" variable the last name with it's first letter capitalized and the rest lower case just to be safe
    name += nameArr[lastIndex][0].toUpperCase() + nameArr[lastIndex].slice(1).toLowerCase()

    return name
}
