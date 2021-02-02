/**
 * @param {number[]} nums
 * 1 <= nums.length <= 30,000
 * -100,000 <= nums[i] <= 100,000
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0;
    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        sum = Math.max(current, sum + current);
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
};

// maxSum:              -2  -2  1   1  4   4  5  6   6  6 ===> 6
// sum:                  0  -2  1  -2  4   3  5  6   1  5
// current                  -2  1  -3  4  -1  2  1  -5  4
console.assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6, { number: 1, errorMsg: "[4,-1,2,1]" });

console.assert(maxSubArray([1]) == 1, { number: 2, errorMsg: "[1]" });
console.assert(maxSubArray([0]) == 0, { number: 3, errorMsg: "[0]" });
console.assert(maxSubArray([-1]) == -1, { number: 4, errorMsg: "[-1]" });
console.assert(maxSubArray([-100000]) == -100000, { number: 5, errorMsg: "[-100000]" });
console.assert(maxSubArray([-2, -1, -3, -4, -1, -2, -1, -5, -4]) == -1, { number: 6, errorMsg: "[-1]" });
console.assert(maxSubArray([2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6, { number: 7, errorMsg: "[4,-1,2,1]" });
console.assert(maxSubArray([-3, 12, -5, 6]) == 13, { number: 8, errorMsg: "[12,-5,6]" });