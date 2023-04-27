// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']



function spacey(array) {
    // Concatenates the previous index onto the current index. (previous first)
    // Skips the first index since that one doesn't change. 
    for (let i = 1; i < array.length; i++) {
        array[i] = array[i-1] + array[i]
    }
    
    return array
}

// This function has an emptry sting to allow the first index to not get affected by undefined values.
// The map method will return a new array that makes every index the value of the string variable + the current index.
// String gets updated after every index.
// 
// function spacey(array){
// 	let string = ''
// 	return array.map( e => string += e )
// }
