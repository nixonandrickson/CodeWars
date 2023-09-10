// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"



function getPlanetName(id){
    var name;
    // Because there is no return for the cases you need to add a break at the end of each case
    // I think it would be better to remove "var name;" and just have each case return the planet. That way there would be no need for "var name", breaks for each case, and no need for a return at the end of the function.
    switch(id){
      case 1:
        name = 'Mercury'
        break
      case 2:
        name = 'Venus'
        break
      case 3:
        name = 'Earth'
        break
      case 4:
        name = 'Mars'
        break
      case 5:
        name = 'Jupiter'
        break
      case 6:
        name = 'Saturn'
        break
      case 7:
        name = 'Uranus'
        break
      case 8:
        name = 'Neptune'
        break
    }
    
    return name;
}
