function solution(frank, sam, tom) {

    let samMax = Math.max(...sam)
    let tomMax = Math.max(...tom)
    let samMin = Math.min(...sam)
    let tomMin = Math.min(...tom)
    let frankCards = 4
    let frankScore = 0
    let samScore = 0
    let tomScore = 0

    // Checks for frank's first card that can beat Sam and Tom's lowest card
    // If it does it gets rid of the cards used by all 3 players and Frank's score increases by 1
    for (let i = 0; i < frank.length; i++) {
        if (frank[i] > samMin && frank[i] > tomMin) {
            frankScore++
            frank.splice(i,1)
            sam.shift()
            tom.shift()
            // break is used to exit the for loop as soon as the if conditional gets met once
            break
        }
    }
    // Checks if Frank won the first round and if he didn't it checks to see if Sam or Tom won.
    if (frank.length === frankCards && samMax > tomMax) {
        samScore++
        frank.shift()
        sam.pop()
        tom.pop()
    }else if (frank.length === frankCards && tomMax > samMax) {
        tomScore++
        frank.shift()
        sam.pop()
        tom.pop()
    }
    frankCards = frank.length
    // Repeats 3 more times because it's possible for Sam and Tom to win once each and then Frank win the last (fourth) game.
    // Round 2
    samMin = Math.min(...sam)
    tomMin = Math.min(...tom)
    for (let i = 0; i < frank.length; i++) {
        if (frank[i] > samMin && frank[i] > tomMin) {
            frankScore++
            frank.splice(i,1)
            sam.shift()
            tom.shift()
            break
        }
    }
    if (frank.length === frankCards && samMax > tomMax) {
        samScore++
        frank.shift()
        sam.pop()
        tom.pop()
    }else if (frank.length === frankCards && tomMax > samMax) {
        tomScore++
        frank.shift()
        sam.pop()
        tom.pop()
    }
    frankCards = frank.length
    // Checks if there was a winner
    if (frankScore === 2) {
        return true
    }else if (samScore === 2 || tomScore === 2) {
        return false
    }

    // Round 3
    samMin = Math.min(...sam)
    tomMin = Math.min(...tom)
    for (let i = 0; i < frank.length; i++) {
        if (frank[i] > samMin && frank[i] > tomMin) {
            frankScore++
            frank.splice(i,1)
            sam.shift()
            tom.shift()
            break
        }
    }
    if (frank.length === frankCards && samMax > tomMax) {
        samScore++
        frank.shift()
        sam.pop()
        tom.pop()
    }else if (frank.length === frankCards && tomMax > samMax) {
        tomScore++
        frank.shift()
        sam.pop()
        tom.pop()
    }
    frankCards = frank.length
    if (frankScore === 2) {
        return true
    }else if (samScore === 2 || tomScore === 2) {
        return false
    }

    // Final Round
    samMin = Math.min(...sam)
    tomMin = Math.min(...tom)
    for (let i = 0; i < frank.length; i++) {
        if (frank[i] > samMin && frank[i] > tomMin) {
            frankScore++
            frank.splice(i,1)
            sam.shift()
            tom.shift()
            break
        }
    }
    if (frank.length === frankCards && samMax > tomMax) {
        samScore++
        frank.shift()
        sam.pop()
        tom.pop()
    }else if (frank.length === frankCards && tomMax > samMax) {
        tomScore++
        frank.shift()
        sam.pop()
        tom.pop()
    }
    frankCards = frank.length
    if (frankScore === 2) {
        return true
    }else if (samScore === 2 || tomScore === 2) {
        return false
    }
}

// function solution(frank, sam, tom) 
// {
    // Checks if Frank's second highest card is greater than Tom and Sam's lowest.
    // And also checks if Frank's highest card is greater than Tom and Sam's second lowest.
//  return frank[2] > sam[0] && frank[2] > tom[0] && frank[3] > sam[1] && frank[3] > tom[1]
// }