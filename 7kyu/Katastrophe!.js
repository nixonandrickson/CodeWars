// You have been employed by the Japanese government to write a function that tests whether or not a building is strong enough to withstand a simulated earthquake.

// A building will fall if the magnitude of the earthquake is greater than the strength of the building.

// An earthquake takes the form of a 2D-Array. Each element within the Outer-Array represents a shockwave, and each element within the Inner-Arrays represents a tremor. The magnitude of the earthquake is determined by the product of the values of its shockwaves. A shockwave is equal to the sum of the values of its tremors.

// Example earthquake --> [[5,3,7],[3,3,1],[4,1,2]] ((5+3+7) * (3+3+1) * (4+1+2)) = 735

// A building begins with a strength value of 1000 when first built, but this value is subject to exponential decay of 1% per year. For more info on exponential decay, follow this link - https://en.wikipedia.org/wiki/Exponential_decay

// Given an earthquake and the age of a building, write a function that returns "Safe!" if the building is strong enough, or "Needs Reinforcement!" if it falls.



function strongEnough(earthquake, age) {
    // Inintial strength of the building is given the value of 1000 as per the instructions
    let initialStrength = 1000
    // Rate of decay is 1% so that equals .01
    let rateOfDecay = .01
    // This is the formula for exponential decay
    let buildingStrength = initialStrength * ((1 - rateOfDecay) ** age)

    // This gets the sum of each nested array in the array "earthquake"
    for (let i = 0; i < earthquake.length; i++) {
        earthquake[i] = earthquake[i].reduce((acc,c) => acc + c, 0)
    }
    // This .reduce() method gets the product of the sum of the nested arrays
    earthquake = earthquake.reduce((acc,c) => acc * c)
    
    // Checks if the building's current strength, based on age, can withstand the given earthquake
    if (buildingStrength > earthquake) {
        return `Safe!`
    }else {
        return `Needs Reinforcement!`
    }
}
