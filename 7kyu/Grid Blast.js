// Ready! Set! Fire... but where should you fire?

// The battlefield is 3x3 wide grid. HQ has already provided you with an array for easier computing:

// var grid = ['top left',    'top middle',    'top right',
//             'middle left', 'center',        'middle right',
//             'bottom left', 'bottom middle', 'bottom right']
// HQ radios you with 'x' and 'y' coordinates. x=0 y=0 being 'top left' part of the battlefield;

// Your duty is to create a function that takes those Xs and Ys and return the correct grid sector to be hit.

// fire(0,0); => 'top left'
// fire(1,2); => 'bottom middle'
// etc.
// Notice the grid is a monodimensional array, good luck!



function fire(x, y) {
    let horizontal, vertical

    // Assign x-axis location
    if (x === 0) {
        horizontal = "left"
    }else if (x === 1) {
        horizontal = "middle"
    }else if (x === 2) {
        horizontal = "right"
    }
    // Assign y-axis location
    if (y === 0) {
        vertical = "top"
    }else if (y === 1) {
        vertical = "middle"
    }else if (y === 2) {
        vertical = "bottom"
    }

    // Checks if the outcome will be "center" because that is the only outlier
    if (x === 1 && y === 1) {
        return "center"
    }else {
        return `${vertical} ${horizontal}`
    }
}

// function fire(x, y) {
//     return fire.GRID[x + y * 3]
//   }
  
//   fire.GRID = [
//     'top left',    'top middle',    'top right',
//     'middle left', 'center',        'middle right',
//     'bottom left', 'bottom middle', 'bottom right'
//   ]