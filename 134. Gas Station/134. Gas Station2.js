/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let tank = 0; let sum = 0; let index = 0;

    for (let i = 0; i < gas.length; i++) {
        let nodeValue = gas[i] - cost[i];
        sum += nodeValue;
        tank += nodeValue;
        if (tank < 0) {
            tank = 0;
            index = i + 1;
        }
    }

    // check if sum of node values is less than zero 
    // which means we can't complete the trip.
    return sum < 0 ? -1 : index; 
};

// index:                          0  1  2  3  4
// nodeValue:                     -2 -2 -1  3  3
// sum:                           -2 -4 -5 -2  1 >= 0
// tank:                          -2 -2 -1  3  6
console.assert(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) == 3, { number: 1, errorMsg: "1" });
console.assert(canCompleteCircuit([2, 3, 4], [3, 4, 3]) == -1, { number: 2, errorMsg: "2" });
console.assert(canCompleteCircuit([1, 2, 3, 4, 5, 6, 7, 8], [3, 4, 5, 1, 9, 3, 4, 4]) == 5, { number: 3, errorMsg: "3" });
console.assert(canCompleteCircuit([5, 6, 3, 2, 1], [6, 1, 4, 3, 2]) == 1, { number: 4, errorMsg: "4" });