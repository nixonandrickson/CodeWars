// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
// ["name2", 110, ["B", "A", "A", "A"]],
// ["name3", 200, ["B", "A", "A", "C"]],
// ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
// ];
// The scores for each grade is:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
// ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
// ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
// ,
// ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
// ];

// return ["name1", "name3"];



function findHack(arr) {
    let score = 0
    let noBonus = 0
    let hacked = []
    
    for (let i = 0; i < arr.length; i++) {
        score = 0
        noBonus = 0
    
        // If the element in the nested array has a score of greater than 200, the rest of the grades don't have to be manually checked.
        // It gets pushed to the hacked array instantly.
        if (arr[i][1] > 200) {
            hacked.push(arr[i][0])
        }else{
            // Checks the nested array within the nested array for each letter grade
            for (let j = 0; j < arr[i][2].length; j++) {
                if (arr[i][2][j] === "A") {
                    score += 30
                }else if (arr[i][2][j] === "B") {
                    score += 20
                // Letters other than "A" or "B" increment the noBonus variable by 1
                }else if (arr[i][2][j] === "C") {
                    score += 10
                    noBonus++
                }else if (arr[i][2][j] === "D") {
                    score += 5
                    noBonus++
                }else{
                    noBonus++
                }
            }
            // Any student with more than 4 grades and only A's or B's gets an extra 20 added to their score
            if (arr[i][2].length >= 5 && noBonus == 0) {
                score += 20
            }
            // Scores are capped at 200
            if (score > 200) {
                score = 200
            }
            // If the score from the array's element is greater than the calculated score from the function then that must mean that the grade was hacked.
            // Student's name gets pushed to the hacked array.
            if (score < arr[i][1]) {
                hacked.push(arr[i][0])
            }
        }
    }

    return hacked
}