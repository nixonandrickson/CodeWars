// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str) {
    // .split('') method takes the string and turns it into an array. Each character having it's own index in the array
    // .reverse() method reverses the order of the array
    // .join('') method puts all the indexes of the array into a string with no spaces inbetween characters
    return str.split('').reverse().join('')
}
