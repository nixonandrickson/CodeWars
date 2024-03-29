// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.



function findDifference(a, b) {
    // .reduce() method to find the product of the arrays
    let aProduct = a.reduce((acc,c) => acc * c)
    let bProduct = b.reduce((acc,c) => acc * c)

    // Returns the difference between the products by getting their absolute value after subtracting one from the other
    return Math.abs(aProduct - bProduct)

    // return Math.abs((a.reduce((acc,c) => acc * c)) - (b.reduce((acc,c) => acc * c)))
}
