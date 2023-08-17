// Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

// You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either "am" or "pm") as input.

// Your task is to return a four-digit string that encodes that time in 24-hour time.

// Notes
// By convention, noon is 12:00 pm, and midnight is 12:00 am.
// On 12-hours clock, there is no 0 hour, and time just after midnight is denoted as, for example, 12:15 am. On 24-hour clock, this translates to 0015.



function to24hourtime(hour, minute, period) {
    if (period === 'pm') {
        if (hour == 12) {
            if (minute > 9) {
                return `${hour}${minute}`
            }else {
                return `${hour}0${minute}`
            }
        }else {
            if (minute > 9) {
                return `${hour + 12}${minute}`
            }else {
                return `${hour + 12}0${minute}`
            }
        }
    }else {
        if (hour == 12) {
            if (minute > 9) {
                return `00${minute}`
            }else {
                return `000${minute}`
            }
        }else if (hour > 9) {
            if (minute > 9) {
                return `${hour}${minute}`
            }else {
                return `${hour}0${minute}`
            }
        }else {
            if (minute > 9) {
                return `0${hour}${minute}`
            }else {
                return `0${hour}0${minute}`
            }
        }
    }
}

// function to24hourtime(hour, minute, period) {
//     if (period === "am" && hour === 12) {
//       hour = 0;
//     } else if (period === "pm" && hour !== 12) {
//       hour += 12;
//     }
       // .padStart() will add a "0" to the front of the string if there aren't 2 characters in the string already.
//     return hour.toString().padStart(2, "0") + minute.toString().padStart(2, "0");
// }