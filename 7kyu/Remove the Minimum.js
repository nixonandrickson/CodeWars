// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.



function removeSmallest(numbers) {
    // Gets the smallest value in the array
    let smallest = Math.min(...numbers)
    // Gets the first index of the smallest number. (in case there are multiple)
    let smallestPos = numbers.indexOf(smallest)
    // The slice will return every index from 0 to the first index of the smallest value (not including it)
    // Then every index after the "smallestPos" gets concatenated onto the first slice.
    return numbers.slice(0, smallestPos).concat(numbers.slice(smallestPos + 1))
}
