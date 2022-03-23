/**
 * @description function to create 2D array(grid)
 * @param {int} row
 * @param {int} column
 * @return {*} 2D array
 */
const createNewGrid = (row, column) => {
    const grid = new Array(row).fill("-").map(() => new Array(column).fill("-"));
    return grid;
}

/**
 * @description function to display grid in console
 * @param {array} grid
 */
const displayGrid = (grid) => {
    // decrement row so that 0,0 is in the bottom left corner
    for (let r = grid.length - 1; r >= 0; r--) {
        for (let c = 0; c < grid[0].length; c++) {
            process.stdout.write(grid[r][c]);
            process.stdout.write(" ");
        }
        process.stdout.write("\n");
    }
}

/**
 * @description function to move rover north
 * @param {array} grid
 * @param {int} currentRow
 * @param {int} currentColumn
 * @return {array} new position
 */
const moveNorth = (grid, currentRow, currentColumn) => {
    const newRow = currentRow + 1
    const newPosition = [newRow, currentColumn]
    if(newRow > grid.length -1){
        return "Lost"
    }
    // to make tracking rover easier. "x" symbolises the rovers previous moves and "O" symbolises the rovers current postion
    grid[currentRow][currentColumn] = "x"
    grid[newRow][currentColumn] = "O"
    return newPosition
}

/**
 * @description function to move rover south
 * @param {array} grid
 * @param {int} currentRow
 * @param {int} currentColumn
 * @return {array} new position
 */
const moveSouth = (grid, currentRow, currentColumn) => {
    const newRow = currentRow - 1
    const newPosition = [newRow, currentColumn]
    if (newRow < 0 ) {
        return "Lost"
    }
    grid[currentRow][currentColumn] = "x"
    grid[newRow][currentColumn] = "O"
    return newPosition
}

/**
 * @description function to move rover west
 * @param {array} grid
 * @param {int} currentRow
 * @param {int} currentColumn
 * @return {array} new position
 */
const moveWest = (grid, currentRow, currentColumn) => {
    const newColumn = currentColumn - 1
    const newPosition = [currentRow, newColumn]
    if (newColumn < 0) {
        return "Lost"
    }
    grid[currentRow][currentColumn] = "x"
    grid[currentRow][newColumn] = "O"
    return newPosition
}

/**
 * @description function to move rover east
 * @param {array} grid
 * @param {int} currentRow
 * @param {int} currentColumn
 * @return {array} new position
 */
const moveEast = (grid, currentRow, currentColumn) => {
    const newColumn = currentColumn + 1
    const newPosition = [currentRow, newColumn]
    if (newColumn > grid[0].length - 1) {
        return "Lost" 
    }
    grid[currentRow][currentColumn] = "x"
    grid[currentRow][newColumn] = "O"
    return newPosition
}