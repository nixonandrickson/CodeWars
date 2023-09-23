// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"



function position(letter) {
    // Made an object with the letters corresponding with their "numbered position" in the alphabet.
    // Could have also made an array and return the index + 1
    let alpha = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, 
    k: 11, l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }

    return `Position of alphabet: ${alpha[letter]}`

    // return `Position of alphabet: ${l.charCodeAt() - 96}`
    // Using UTF-16 code units any letter in the alphabet can be returned as their "numbered position" if you subtract 96 from the character's code index
}
