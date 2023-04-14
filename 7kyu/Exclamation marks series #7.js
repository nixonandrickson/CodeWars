// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"


function remove(string) {
    let stringArr = string.split(' ')
    let returnArr = []
    let exclCounter = 0

    stringArr.forEach((ele) => {
        // resets the exclamation point counter back to 0 after each loop
        exclCounter = 0
        // Goes through each index in the array and checks each index's index for an exclamation point
        for (let i = 0; i < ele.length; i++) {
            if (ele[i] === `!`) {
                // Counter will go up by 1 if it finds an !
                exclCounter++
            }
        }
        // If the counter is exactly 1 that means it we dont want to push it to the returnArr (as per the instructions)
        if (exclCounter !== 1) {
            returnArr.push(ele)
        }
    })
    
    return returnArr.join(' ')
}


// function remove(s) {
//     // The first split take the string and split it up into separate words
//     // The filter parameter splits the element it finds if it finds an "!"
//     // If it finds only 1 ! the split will look like this [ "", "wordhere" ]
//     // So if the length is not equal to 2 it will include it in the filter
//     // Because if the "word" only has 1 ! it will always have a length of 2
//     return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
// }