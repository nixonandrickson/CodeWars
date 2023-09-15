// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).



function pillars(numPillar, dist, width) {
    // widthTotal subtracts 2 widths because the first and last pillar aren't included in the final calculation
    // distTotal gets multiplied by 100 to convert the meters to centimeters because the distance variable is given in meters
    let widthTotal = (numPillar * width) - (2 * width)
    let distTotal = (dist * (numPillar - 1)) * 100

    // Checks if there is more than one pillar. If there isn't, 0 will be return, 
    return numPillar > 1 ? widthTotal + distTotal : 0
}
