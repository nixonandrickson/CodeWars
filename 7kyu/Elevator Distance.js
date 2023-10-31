// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// // simple examples
// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// // if two consecutive floors are the same,
// //distance travelled between them is 0
// elevatorDistance([3,3]) = 0
// Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.



function elevatorDistance(array) {
    // distance variable to keep track of how many floors the elevator has traveled
    let distance = 0

    // for loop starts at second index of array so that it will take the difference of the current and previous elements
    // the loop will stop after it executes the statement for the last element in the array
    for (let i = 1; i < array.length; i++) {
        distance = distance + Math.abs(array[i] - array[i - 1])
    }

    return distance
}
