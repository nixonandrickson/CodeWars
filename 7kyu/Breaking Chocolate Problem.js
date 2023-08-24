// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.



function breakChocolate(n, m) {
    // Checks conditional (n * m) < 1. If true returns 0 else, will return (n * m) - 1
    return (n * m) < 1 ? 0 : (n * m) - 1
    /* Some example cases to spot the pattern: 
 
 2 x 1  2 x 2   2 x 3     2 x 4       2 x 5         2 x 6           2 x 7     
   _     _ _    _ _ _    _ _ _ _    _ _ _ _ _    _ _ _ _ _ _    _ _ _ _ _ _ _ 
  |_|   |_|_|  |_|_|_|  |_|_|_|_|  |_|_|_|_|_|  |_|_|_|_|_|_|  |_|_|_|_|_|_|_|
  |_|   |_|_|  |_|_|_|  |_|_|_|_|  |_|_|_|_|_|  |_|_|_|_|_|_|  |_|_|_|_|_|_|_|
                                  
   1      3       5         7           9             11              13

Minimum breaks = ( rows x columns ) - 1
   */
}

console.log(breakChocolate(5, 5))
console.log(breakChocolate(-1, 3))
console.log(breakChocolate(0, 1))