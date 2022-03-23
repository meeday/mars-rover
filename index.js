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
    if (newRow > grid.length - 1) {
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
    if (newRow < 0) {
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
// object to map abbrevation to their name
const mapToDirection = {
    "N": "north",
    "E": "east",
    "S": "south",
    "W": "west"
}


/**
 * @description game play function
 * @param {array} gridSize
 * @param {array} startingPosition
 * @param {string} path
 * @return {object} rover final position, orientation and status
 */
const gamePlay = (gridSize, startingPosition, path) => {
    //create grid
    const grid = createNewGrid(gridSize[0], gridSize[1])
    // initialise rover
    const rover = {
        positionX: startingPosition[0],
        positionY: startingPosition[1],
        orientation: startingPosition[2]
    }

    console.log("\n")
    console.log(`Rover facing ${mapToDirection[rover.orientation]}`)
    console.log("\n")

    // show starting position of rover on grid
    grid[rover.positionX][rover.positionY] = "O"

    console.log("\n");
    displayGrid(grid)
    console.log("\n");

    const pathArray = path.split("")
    for (let i = 0; i < pathArray.length; i++) {
        console.log("\n")
        console.log(`*****step ${i + 1}*****`)
        displayGrid(grid)
        console.log("**********************");
        console.log("\n");

        // switch case to move or rotate rover depending on rover's orientation
        switch (pathArray[i]) {
            case "F":
                // forward will be different depending on the orientation of the rover
                if (rover.orientation === "E") {
                    const newPosition = moveEast(grid, rover.positionX, rover.positionY)
                    if (newPosition === "Lost") {
                        return {
                            status: "Lost",
                            positionX: rover.positionX,
                            positionY: rover.positionY,
                            orientation: rover.orientation
                        };
                    }
                    rover.positionX = newPosition[0]
                    rover.positionY = newPosition[1]
                } else if (rover.orientation === "W") {
                    const newPosition = moveWest(grid, rover.positionX, rover.positionY)
                    if (newPosition === "Lost") {
                        return {
                            status: "Lost",
                            positionX: rover.positionX,
                            positionY: rover.positionY,
                            orientation: rover.orientation
                        };
                    }
                    rover.positionX = newPosition[0]
                    rover.positionY = newPosition[1]
                } else if (rover.orientation === "S") {
                    const newPosition = moveSouth(grid, rover.positionX, rover.positionY)
                    if (newPosition === "Lost") {
                        return {
                            status: "Lost",
                            positionX: rover.positionX,
                            positionY: rover.positionY,
                            orientation: rover.orientation
                        };
                    }
                    rover.positionX = newPosition[0]
                    rover.positionY = newPosition[1]
                } else {
                    const newPosition = moveNorth(grid, rover.positionX, rover.positionY)
                    if (newPosition === "Lost") {
                        return {
                            status: "Lost",
                            positionX: rover.positionX,
                            positionY: rover.positionY,
                            orientation: rover.orientation
                        };
                    }
                    rover.positionX = newPosition[0]
                    rover.positionY = newPosition[1]
                }
                break;
                // right roatation will be different depending on rover's orientation
                // no position change, only orientation will change
            case "R":
                if (rover.orientation === "E") {
                    rover.orientation = "S"
                } else if (rover.orientation === "W") {
                    rover.orientation = "N"
                } else if (rover.orientation === "S") {
                    rover.orientation = "W"
                } else {
                    rover.orientation = "E"
                }
                break;

            case "L":
                if (rover.orientation === "E") {
                    rover.orientation = "N"
                } else if (rover.orientation === "W") {
                    rover.orientation = "S"
                } else if (rover.orientation === "S") {
                    rover.orientation = "E"
                } else {
                    rover.orientation = "W"
                }
                break;

            default:
                break;
        }
    }
    return {
        status:"Not Lost",
        positionX: rover.positionX,
        positionY: rover.positionY,
        orientation: rover.orientation
    }
}

console.log(gamePlay([4,8],[0,2,"N"],"FFLFRFF"))