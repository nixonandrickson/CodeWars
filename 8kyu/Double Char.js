// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "



function doubleChar(str) {
    // The string gets split into an array, then mapped to make every element be itself twice, the array is then joined back together to make it a string again
    return str.split("").map(e => e + e).join("")
}