// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.



function simpleMultiplication(number) {
    // number % 2 will return as 1 which will make this conditional truthy. which gets the function to continue as if number is odd. 
    if (number % 2) {
        return number * 9
    }else {
        return number * 8
    }
}
