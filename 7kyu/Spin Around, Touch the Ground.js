// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

// Worked Example
// ["right", "right", "right", "right", "left", "right"] ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)
// Examples
// ["left", "right", "left", "right"] ➞ 0

// ["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

// ["left", "left", "left", "left"] ➞ 1
// Notes
// Return a positive number.
// All tests will only include the words "right" and "left".



function spinAround(turns) {
    // Changes all the lefts and rights to 90 or -90
    // Then runs a .reduce() method to add them all up
    turns = turns.map((direction) => {
        if (direction == "right") {
            return 90
        }else if (direction == "left") {
            return -90
        }
    }).reduce((acc,c) => acc + c, 0)

    // Gets the absolute value of the sum of turns divided by 360. This value is then rounded down to get how many turns are made.
    // Absolute value is used because 4 left turns would equal -1 but we want it to equal 1
    return Math.floor(Math.abs(turns / 360))
}
