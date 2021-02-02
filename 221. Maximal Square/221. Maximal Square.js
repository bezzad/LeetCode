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

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == "1") {
                let currentLen = getDeep(matrix, i, j, deepKeeper) + 1;
                max = Math.max(max, currentLen);
            }
            else {
                deepKeeper[i][j] = 0;
            }
        }
    }

    return max * max;
};

//    ___ ___ ___ ___
//   |_1_|_2_|_3_|_4_|
//   |_2_|_2_|_3_|_4_|
//   |_3_|_3_|_3_|_4_|
//   |_4_|_4_|_4_|_4_|
//
function getDeep(matrix, i, j, deepKeeper) {
    if (deepKeeper[i][j] >= 0) {
        return deepKeeper[i][j];
    }

    //    ___ ___
    //   |_1_|_X_|
    //   |_X_|_X_|
    let neighbors = [[i, j + 1], [i + 1, j + 1], [i + 1, j]];
    let min = Infinity;
    deepKeeper[i][j] = 0;
    if (matrix.length > i + 1 && matrix[i].length > j + 1) {
        for (let i = 0; i < neighbors.length; i++) {
            if (matrix[neighbors[i][0]][neighbors[i][1]] != "1") {
                return 0;
            }
            min = Math.min(min, getDeep(matrix, neighbors[i][0], neighbors[i][1], deepKeeper));
        }
        deepKeeper[i][j] = min + 1;
    }
    return deepKeeper[i][j];
}



// -----------------------------  UNIT TESTs -----------------------------
console.assert(maximalSquare([
    ["1", "0", "1", "0", "0", "1"],
    ["1", "0", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0", "1"]]) == 4, "1");

console.assert(maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]]) == 4, "1");

console.assert(maximalSquare([
    ["0", "1"],
    ["1", "0"]]) == 1, "2");

console.assert(maximalSquare([["0"]]) == 0, "3");

console.assert(maximalSquare([["1", "1"]]) == 1, "4");
// -----------------------------  /UNIT TESTs -----------------------------

console.log("END");
