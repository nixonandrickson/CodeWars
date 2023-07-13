// Your job is to return the volume of a cup when given the diameter of the top, the diameter of the bottom and the height.

// You know that there is a steady gradient from the top to the bottom.

// You want to return the volume rounded to 2 decimal places.

// Exmples:

// cupVolume(1, 1, 1);
// //returns 0.79

// cupVolume(10, 8, 10);
// //returns 638.79

// cupVolume(1000, 1000, 1000);
// //returns 785398163.4

// cupVolume(13.123, 123.12, 1);
// //returns 4436.57

// cupVolume(5, 12, 31);
// //returns 1858.51
// You will only be passed positive numbers.



function cupVolume(d1, d2, height) {
    // Declare a variable to hold the values of the radii to use in the formula
    let r1 = d1 / 2
    let r2 = d2 / 2
    // Formula for volume of a cylinder with 2 different radii
    let volume = (1 / 3) * Math.PI * height * ((r1 ** 2) + r1 * r2 + (r2 ** 2))
    // Returning value making sure it gets changed to a number and only goes to 2 decimal places
    return Number(volume.toFixed(2))
}

