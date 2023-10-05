// Task
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.



function flickSwitch(arr) {
    // bool is declared to keep track of whether to add True or False to the boolArr
    let bool = 1
    let boolArr = []
    
    // Iterates through the input array and checks if the current element in the array is "flick"
    // If the word "flick" is the current element, the variable bool gets incremented by 1
    // A % 2 check is used to see if true or false should be pushed to the to the boolArr
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "flick") {
            bool++
        }

        if (bool % 2) {
            boolArr.push(true)
        }else {
            boolArr.push(false)
        }
    }

    return boolArr

    // function flickSwitch(arr){
    //     let boolArr = true;
    //       return arr.map((i) => {
    //         return (i === "flick") ? boolArr = !boolArr : boolArr;
    //       })
    //   } 
}
