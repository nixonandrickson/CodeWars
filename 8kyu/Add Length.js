// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.



function addLength(str) {
    // Creates an array that consists of each "word", from the str input, as it's own index.
    strArr = str.split(' ')

    // Goes through the array and for each index it concatenates a space and then the length of the index
    strArr.forEach((e,i) => {
        strArr[i] += ` ${e.length}`
    })
    
    // Returns the new appended array with the concatenations
    return strArr
}

