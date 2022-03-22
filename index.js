/**
 * @param {int} row
 * @param {int} column
 * @return {*} 2D array
 */
const createNewGrid = (row, column) => {
    const grid = new Array(row).fill("-").map(() => new Array(column).fill("-"));
    return grid;
}
