/**
 * 200. 岛屿数量
 * @param {*} grid 
 * @returns 
 */
var numIslands = function(grid) {
    let resCount = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === "1") {
                resCount++;
                turnZero(i, j, grid);
            }
        }
    }
    return resCount;
}


const turnZero = function(i, j, grid) {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "0") {
        return;
    }
    grid[i][j] = "0";
    turnZero(i, j + 1, grid);
    turnZero(i, j - 1, grid);
    turnZero(i + 1, j, grid);
    turnZero(i - 1, j, grid);
}