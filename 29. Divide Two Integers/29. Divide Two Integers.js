/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let result = 0;
    let isNegativeDivisor = divisor < 0;
    let isNegativeDividend = dividend < 0;

    if (isNegativeDivisor)
        divisor = -divisor;

    if (isNegativeDividend)
        dividend = -dividend;

    if (divisor == 1)
        result = dividend;
    else {
        while (dividend >= divisor && dividend > 0) {
            result++;
            dividend -= divisor;
        }
    }

    if (isNegativeDivisor)
        result = -result;

    if (isNegativeDividend)
        result = -result;

    if (result > 2147483647)
        result = 2147483647;

    if (result < -2147483648)
        result = -2147483648;

    return result;
};

console.assert(divide(10, 3) == 3, { number: 1, errorMsg: "10/3" });
console.assert(divide(7, -3) == -2, { number: 2, errorMsg: "7/-3" });
console.assert(divide(0, 1) == 0, { number: 3, errorMsg: "0/1" });
console.assert(divide(1000, 1000) == 1, { number: 4, errorMsg: "1000/1000" });
console.assert(divide(1010, 1000) == 1, { number: 5, errorMsg: "1010/1000" });
console.assert(divide(1, -1) == -1, { number: 6, errorMsg: "1/-1" });
console.assert(divide(-1, -1) == 1, { number: 7, errorMsg: "-1/-1" });
console.assert(divide(-2147483648, -1) == 2147483647, { number: 8, errorMsg: "-2147483648/-1" });
console.assert(divide(-2147483648, 1) == -2147483648, { number: 9, errorMsg: "-2147483648/1" });

console.log("END")