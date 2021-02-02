/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let len1 = text1.length;
    let len2 = text2.length;
    let matrix = new Array(len1 + 1).fill().map(() => new Array(len2 + 1).fill(0));
    let max = 0;

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i - 1][j - 1], matrix[i - 1][j]);
            if (text1[i - 1] == text2[j - 1] && matrix[i][j] == matrix[i][j - 1] && matrix[i][j] == matrix[i - 1][j - 1]) {
                let value = ++matrix[i][j];
                max = Math.max(max, value);
            }
        }
    }

    return max;
};



//     a b c d e 
//   0 0 0 0 0 0
// a 0 1 1 1 1 1      +  +
// c 0 1 1 2 2 2      +  O
// e 0 1 1 2 2 3

console.assert(longestCommonSubsequence("abcde", "ace") == 3, "1"); // ace
console.assert(longestCommonSubsequence("abc", "abc") == 3, "2"); // abc
console.assert(longestCommonSubsequence("abc", "def") == 0, "3");
console.assert(longestCommonSubsequence("abcwxyzd", "dxzc") == 2, "4"); // xz
console.assert(longestCommonSubsequence("ezupkr", "ubmrapg") == 2, "5"); // up
console.assert(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy") == 2, "6"); // qr
console.assert(longestCommonSubsequence("hofubmnylkra", "pqhgxgdofcvmr") == 5, "7"); // hofmr
console.assert(longestCommonSubsequence("bsbininm", "jmjkbkjkv") == 1, "8"); // b
console.assert(longestCommonSubsequence("abcba", "abcbcba") == 5, "9"); // abcba
console.log("END");