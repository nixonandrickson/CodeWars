// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.



const areaOrPerimeter = function(l , w) {
    // Checks if the length and width are the same. Multiplies if they are to get area.
    if (l === w) {
      return l * w
    }
    // if not equal, must be rectangle, so add up 2 l's and 2 w's to get perimeter.
    else {
      return l + l + w + w
    }
}