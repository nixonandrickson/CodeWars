// Write

// function consecutiveOnes(nums) {}
// that takes in array nums and returns the maximum consecutive 1's

// For example

// consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
// consecutiveOnes([1, 1, 0, 0, 1]) === 2
// consecutiveOnes([0, 0, 0, 0, 0]) === 0



function consecutiveOnes(nums) {
    // Declare variables for maximum consecutive 1's and for current amount # of consecutive 1's
    let max = 0, cur = 0

    // Whenever a 1 is found it will increase the "cur" counter
    // Whenever a not 1 is found it will change the "max" counter to the highest between max and cur then reset cur to 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            cur++
        }else {
            max = Math.max(max, cur)
            cur = 0
        }
    }

    return Math.max(max, cur)
}
