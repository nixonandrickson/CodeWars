// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).



function billboard(name, price = 30) {
    let totalCost = 0
    // Adds the price of "30" to whatever the current totalCost is.
    // Every iteration will keep increasing the totalCost by 30
    for (let i = 0; i < name.length; i++) {
        totalCost += price
    }
    
    return totalCost

    // Alt solution (simply math equation to multiply by doing division)
    // return (name.length / (1 / price))
}