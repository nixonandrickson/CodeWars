// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.



function mergeArrays(a, b) {
    // .concat() method combines 2 arrays and returns 1 array
    // The .sort() method makes sure to sort by numerical value
    let merged = a.concat(b).sort((a, b) => a - b)

    // This .filter() method remove all duplicate values in an array.
    return merged.filter((value, index) => merged.indexOf(value) === index)

    // // This method of concatenating lets you concat any number of arrays, not just 2.
    // let merged = [...a, ...b].sort((a, b) => a - b)
    // // the new Set() remove all non unique values from an array
    // let uniqueMerged = new Set(merged)

    // // Array.from() will return a new, shallow-copied array, which is needed for this specific excersize
    // return Array.from(uniqueMerged)
}
