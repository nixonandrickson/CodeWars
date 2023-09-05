// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'



function reverseMessage(str) {
        // First makes the whole string lowercase. Then splits the string by character, reverses them all and joins them back together into a "sentence".
        // Split the reversed words into an array to capitalize each individual word using a map function. Finally join the array back together.

    return str.toLowerCase().split(``).reverse().join('').split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
}
