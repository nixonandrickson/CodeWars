// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space"
// "   space WALK   " => "   Space Walk   " 
// Note: you will be provided atleast one word and should take string as input and return string as output.



function dropCap(n) {
    // Created new variable to leave original input untouched. An array of the string "n"
    let stringArr = n.split(' ')
    
    // Will iterate through the array and capitalize the first letter of every word that is longer than 2 characters. (all the other letters will be lowercased)
    stringArr.forEach((e,i) => {
        if (stringArr[i].length > 2) {
            stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1).toLowerCase()
        }
    })

    // .join(' ') will make the array a string again
    return stringArr.join(' ')
}

