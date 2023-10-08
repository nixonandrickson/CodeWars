// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.



function arrayPlusArray(arr1, arr2) {
    // .reduce() both arrays to get their sum and add the sums together
    return arr1.reduce((acc,c) => acc + c, 0) + arr2.reduce((acc,c) => acc + c, 0)
}