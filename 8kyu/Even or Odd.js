// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.



function evenOrOdd(number) {
    // "number % 2" will return either 0 or 1 which means ternary notation can be used. "Odd" (1) for true and "Even" (0-falsey) for false. 
    return number % 2 ? `Odd` : `Even`
}
