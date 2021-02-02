/**
 * Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 * @param {character[][]} matrix
 * @return {number}
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 300
 * matrix[i][j] is '0' or '1'.
 */
var maximalSquare = function (matrix) {
    let max = 0;
    let deepKeeper = new Array(matrix.length).fill().map(() => new Array(matrix[0].length).fill(-1));
    // matrix.forEach((v) => v.push("0")); // right zero padding
    // matrix.push(new Array(matrix[0].length).fill("0")); // bottom zero padding

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == "1") {
                let currentLen = getDeep(matrix, i, j, deepKeeper) + 1;
                max = Math.max(max, currentLen);                
            }
        }
    }

    return max;
};

function getDeep(matrix, i, j, deepKeeper) {
    if (deepKeeper[i][j] >= 0) {
        return deepKeeper[i][j];
    }

    deepKeeper[i][j] = 0;
    let neighbors = hasNeighbors(matrix, i, j);
    if (neighbors != null) {
        let min = Infinity;
        for (let i = 0; i < neighbors.length; i++) {
            min = Math.min(min, getDeep(matrix, neighbors[i][0], neighbors[i][1], deepKeeper));
        }
        deepKeeper[i, j] = min + 1;
    }

    return deepKeeper[i][j];
}

//    ___ ___
//   |_1_|_x_|
//   |_X_|_X_|
//
function hasNeighbors(matrix, i, j) {
    let neighbors = [[i, j + 1], [i + 1, j + 1], [i + 1, j]];

    if (matrix.length > i + 1 && matrix[i].length > j + 1) {
        for (let i = 0; i < neighbors.length; i++) {
            if (matrix[neighbors[i][0], neighbors[i][1]] != "1") {
                return null;
            }
        }
        return neighbors;
    }
    return null;
}





// -----------------------------  UNIT TESTs -----------------------------
console.assert(maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]]) == 4, "1");

console.assert(maximalSquare([
    ["0", "1"],
    ["1", "0"]]) == 1, "2");

console.assert(maximalSquare([["0"]]) == 0, "3");
// -----------------------------  /UNIT TESTs -----------------------------

console.log("END");
