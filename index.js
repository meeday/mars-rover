/**
 * @param {int} row
 * @param {int} column
 * @return {*} 2D array
 */
const createNewGrid = (row, column) => {
    const grid = new Array(row).fill("-").map(() => new Array(column).fill("-"));
    return grid;
}

/**
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
 * @description functions to move rover north
 * @param {array} grid
 * @param {int} currentRow
 * @param {int} currentColumn
 * @return {array} new Position
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
