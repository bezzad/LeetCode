/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    let sum = 0;
    var count = new Array(60).fill(0);
    for (let i = 0; i < time.length; i++) {
        let remian = time[i] % 60;
        sum += remian == 0 ? count[0] : count[60 - remian];
        count[remian]++;
    }
    return sum;
};

console.assert(numPairsDivisibleBy60([30, 20, 150, 100, 40]) == 3);
console.assert(numPairsDivisibleBy60([60, 60, 60]) == 3);
console.assert(numPairsDivisibleBy60([15, 63, 451, 213, 37, 209, 343, 319]) == 1);