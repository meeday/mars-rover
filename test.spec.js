const {
    createNewGrid,
    moveNorth,
    moveEast,
    moveSouth,
    moveWest,
    gamePlay
} = require("./index")

test('should create 2D array', () => { 
    const grid = createNewGrid(4,5)
    expect(grid.length).toBe(4)
    expect(grid[0].length).toBe(5)
 })

test('should return null for incorrect arguments', () => {
    const grid = createNewGrid("four","five")
    expect(grid).toBe(null)
})

test('should move rover north', () => {
    const grid = createNewGrid(4,5)
    const newPosition = moveNorth(grid, 0, 0)
    expect(newPosition[0]).toBe(1)
    expect(newPosition[1]).toBe(0)
})
test('should return "Lost" if rover leaves grid North', () => {
    const grid = createNewGrid(4,5)
    const newPosition = moveNorth(grid, 3, 0)
    expect(newPosition).toBe("Lost")
})

test('should move rover south', () => {
    const grid = createNewGrid(4,5)
    const newPosition = moveSouth(grid, 2, 0)
    expect(newPosition[0]).toBe(1)
    expect(newPosition[1]).toBe(0)
})

test('should return "Lost" if rover leaves grid South', () => {
    const grid = createNewGrid(4,5)
    const newPosition = moveSouth(grid, 0, 0)
    expect(newPosition).toBe("Lost")
})

test('should move rover east', () => {
    const grid = createNewGrid(4,5)
    const newPosition = moveEast(grid, 0, 0)
    expect(newPosition[0]).toBe(0)
    expect(newPosition[1]).toBe(1)
})

test('should return "Lost" if rover leaves grid East', () => {
    const grid = createNewGrid(4,5)
    const newPosition = moveEast(grid, 0, 4)
    expect(newPosition).toBe("Lost")
})

test('should move rover west', () => {
    const grid = createNewGrid(4,5)
    const newPosition = moveWest(grid, 0, 2)
    expect(newPosition[0]).toBe(0)
    expect(newPosition[1]).toBe(1)
})

test('should return "Lost" if rover leaves grid West', () => {
    const grid = createNewGrid(4,5)
    const newPosition = moveWest(grid, 0, 0)
    expect(newPosition).toBe("Lost")
})

test('should return correct position and status of rover', () => { 
    const result = gamePlay([4,8],[0,2,"N"],"FFLFRFF")
    expect(result.status).toBe("Lost")
    expect(result.positionX).toBe(3)
    expect(result.positionY).toBe(1)
    expect(result.orientation).toBe('N')
 })

