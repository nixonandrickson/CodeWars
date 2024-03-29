// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that



function humanYearsCatYearsDogYears(humanYears) {
    // Formulas for cat and dog years for ages 3 and up
    let catYears = (24 + ((humanYears - 2) * 4))
    let dogYears = (24 + ((humanYears - 2) * 5))

    if (humanYears === 1) {
        return [1, 15, 15]
    }else if (humanYears === 2) {
        return [2, 24, 24]
    }else {
        return [humanYears, catYears, dogYears]
    }
}
