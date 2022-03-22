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
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            process.stdout.write(grid[r][c]);
            process.stdout.write(" ");
        }
        process.stdout.write("\n");
    }
}

