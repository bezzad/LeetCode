/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    for (let i = 0; i < gas.length; i++) {
        let gasStation = i;
        let tank = 0;
        do {
            tank += gas[gasStation] - cost[gasStation]; 
            gasStation = goNextStation(gasStation, gas.length);
        } while (gasStation != i && tank >= 0);
        
        if (tank >= 0)
            return i;
    }

    return -1;
};

function goNextStation(currentStation, len) {
    currentStation++;
    if (currentStation >= len) {
        return 0;
    }
    return currentStation;
}

console.assert(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) == 3, { number: 1, errorMsg: "1" });
console.assert(canCompleteCircuit([2, 3, 4], [3, 4, 3]) == -1, { number: 2, errorMsg: "2" });
console.assert(canCompleteCircuit([1, 2, 3, 4, 5, 6, 7, 8], [3, 4, 5, 1, 9, 3, 4, 4]) == 5, { number: 3, errorMsg: "3" });
console.assert(canCompleteCircuit([5, 6, 3, 2, 1], [6, 1, 4, 3, 2]) == 1, { number: 4, errorMsg: "4" });