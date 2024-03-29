// Complete the function which will return the area of a circle with the given radius.

// Round the returned number to two decimal places. If the radius is not positive or not a number, return false.

// Example:

// circleArea(-1485.86);    //returns false
// circleArea(0);           //returns false
// circleArea(43.2673);     //returns 5881.25
// circleArea(68);          //returns 14526.72
// circleArea("number");    //returns false



function circleArea(radius) {
    // If radius is more than 0 will return area of circle that gets converter to Number() because toFixed() changes it to a string
    return radius > 0 ? Number((Math.PI * (radius ** 2)).toFixed(2)) : false
}
