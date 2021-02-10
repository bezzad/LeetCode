/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let sum = 0;
    let floorCount = Math.max(...height);

    for (let f = 1; f <= floorCount; f++) {
        let firstLeftStone = height.length, firstRightStone = 0;
        for (let l = 0; l < height.length; l++) {
            if (height[l] >= f) {
                firstLeftStone = l;
                break;
            }
        }
        for (let r = height.length - 1; r > firstLeftStone; r--) {
            if (height[r] >= f) {
                firstRightStone = r;
                break;
            }
        }
        for (let i = firstLeftStone; i < firstRightStone; i++) {
            if (height[i] < f) {
                sum++;
            }
        }
    }

    return sum;
};

console.assert(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) == 6, "1");
console.assert(trap([4, 2, 0, 3, 2, 5]) == 9, "2");
console.assert(trap([2, 0, 2]) == 2, "3");