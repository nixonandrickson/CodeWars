// Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

// array[0] ---> represents $1 bills

// array[1] ---> represents $5 bills

// array[2] ---> represents $10 bills

// array[3] ---> represents $20 bills

// array[4] ---> represents $50 bills

// array[5] ---> represents $100 bills

// In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills:

// 365 =>  [0,1,1,0,1,3]
// In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills:

// 217 => [2,1,1,0,0,2]



function giveChange(amount) {
    billsArr = []

    // Gets the whole number for the amount divided by the bill because that is the max amount of that denomination without going over. It is then put at the front of the array and the amount is taken away from the amount's total. So 365 dollars would add 3 to the start of the array and subtract 300 from "amount"
    billsArr.unshift(Math.floor(amount / 100))
    amount -= Math.floor(amount / 100) * 100
    // 365 would be at 65 after the first step and it should then add a 1 to the beginning of the array and subtract 50 from the amount.
    billsArr.unshift(Math.floor(amount / 50))
    amount -= Math.floor(amount / 50) * 50

    billsArr.unshift(Math.floor(amount / 20))
    amount -= Math.floor(amount / 20) * 20

    billsArr.unshift(Math.floor(amount / 10))
    amount -= Math.floor(amount / 10) * 10

    billsArr.unshift(Math.floor(amount / 5))
    amount -= Math.floor(amount / 5) * 5

    billsArr.unshift(Math.floor(amount / 1))
    amount -= Math.floor(amount / 1) * 1

    return billsArr
}
