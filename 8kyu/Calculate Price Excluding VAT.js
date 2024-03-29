// Write a function that calculates the original product price, without VAT.

// Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1



function excludingVATPrice(price) {
    // Checks if price is null then returns -1 as per instructions
    if (price == null) {
        return -1
    }

    // "Reverting" a sales tax is as simple and dividing by 1.salestax
    // Declared priceBeforeVAT to make the function look cleaner. then return a rounding of the priceBeforeVAT to make it look like a normal dollar amount
    let priceBeforeVAT = price / 1.15
    return Math.round(priceBeforeVAT * 100) / 100
}