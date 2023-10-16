// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



function squareSum(numbers) {
    // .map() method changes each element to itself squared. And then the .reduce() method adds up the new squared elements.
    return numbers.map(e => e * e).reduce((acc,c) => acc + c, 0)
}
