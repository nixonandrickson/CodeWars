// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.



function sumNoDuplicates(numList) {
    // Checks the first and last index of an element. Only numbers where these two values are the same are kept.
    // If the values aren't equal that means it must be a duplicate and the element, regardless of how many times it shows up, is discarded.
    const noDupes = numList.filter(function(item) {
        return numList.lastIndexOf(item) == numList.indexOf(item);
      })

    // Reduce() method to add up everything in the filtered array
    return noDupes.reduce((a,c) => a + c, 0)
}
