// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:

// For example: (Input --> Output)

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0



function triangular(n) {
    // This is the formula for fidning the "nth" term
    // If n is negative it'll return 0
    return n > 0 ? (n * (n + 1) / 2) : 0
}

