// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height){
    // Pretty straight forward function where the weight and height will be recieved as arguments and weight will be divided by height squared and stored in variable "bmi". The "bmi" variable will be compared to certain numbers to determine what the return should say.
    let bmi = weight / (height ** 2)

    if(bmi <= 18.5){
        return `Underweight`
    }else if(bmi <= 25.0){
        return `Normal`
    }else if(bmi <= 30.0){
        return `Overweight`
    }else{
        return `Obese`
    }
}