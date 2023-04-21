// Your task is to check whether a segment is completely in one quadrant or it crosses more. Return true if the segment lies in two or more quadrants. If the segment lies within only one quadrant, return false.

// There are two parameters: A (coord) and B (coord), the endpoints defining the segment AB.

// No coordinate will be zero; expect that all X and Y are positive or negative.

// Examples
// This whole segment is in the first quadrant.
// [(1, 2), (3, 4)] -> false
// This segment intersects the Y axis, therefore being in two quadrants: I and II.
// [(9, 3), (-1, 6)] -> true
// This segment is completely in the second quadrant.
// [(-1, 6), (-9, 1)] -> false

// Predefined
// There is a class named coord/Coord (see in code). It has the following members:
// (constructor): Constructs the coordinate
// x (number): The X coordinate
// y (number): The Y coordinate
// equal (bool): Compares two coordinates if they're the same
// c (coord): The coordinate to compare with
// toString (string): Turns coordinate into string



function quadrant_segment(A, B) {
    // Multiplies the x values of both coordinates to check if they both have the same sign.
    // If both are negative or positive it will return a positive ( greater than 0 ) when multiplied together.
    // If both x's and both y's have the same signs then that must mean that both coordinates must be in the same quadrant.
    if (A.x * B.x > 0 && A.y * B.y > 0) {
        return false
    }else {
        return true
    }
}
console.log(quadrant_segment)

