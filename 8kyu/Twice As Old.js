// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.



function twiceAsOld(dadYearsOld, sonYearsOld) {
    if (sonYearsOld * 2 < dadYearsOld) {
        return dadYearsOld - (sonYearsOld * 2)
    }else if (sonYearsOld * 2 > dadYearsOld) {
        return (sonYearsOld * 2) - dadYearsOld
    }else {
        return 0
    }

    // Or you can do absolute value and just subtract the dad from son * 2
    // return Math.asb( dadYearsOld - (2 * sonYearsOld) )
}