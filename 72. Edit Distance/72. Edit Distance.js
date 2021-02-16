/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let matrix = [];

    if (word1.length * word2.length == 0) {
        return word1.length + word2.length;
    }

    for (let i = 0; i < word1.length + 1; i++) {
        matrix.push(new Array(word2.length + 1).fill(0));
        matrix[i][0] = i;
    }

    for (let j = 0; j < word2.length + 1; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                matrix[i][j] = Math.min(1 + matrix[i - 1][j], 1 + matrix[i][j - 1], matrix[i - 1][j - 1]);
            }
            else {
                matrix[i][j] = 1 + Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
            }
        }
    }

    return matrix[word1.length][word2.length];
};

console.assert(minDistance("horse", "ros") == 3, "1");
console.assert(minDistance("intention", "execution") == 5, "2");
console.assert(minDistance("tour", "ruot") == 4, "3");