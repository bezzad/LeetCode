/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
    let n = 0;
    for (let i = 0; i < A.length; ++i) {
        n = ((n << 1) + A[i]) % 5;
        A[i] = n == 0;
    }
    return A;
};

var isArrayEqual = function (array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false;
        }
    }

    return true;
}
console.assert(isArrayEqual(prefixesDivBy5(0, 1, 1), [true, false, false]), { number: 1, errorMsg: "prefixesDivBy5(0,1,1) != [true,false,false]" });
console.assert(isArrayEqual(prefixesDivBy5(1, 1, 1), [false, false, false]), { number: 1, errorMsg: "prefixesDivBy5(1,1,1) != [false,false,false]" });
console.assert(isArrayEqual(prefixesDivBy5(0, 1, 1, 1, 1, 1), [true, false, false, false, true, false]), { number: 1, errorMsg: "prefixesDivBy5(0,1,1,1,1,1) != [true,false,false,false,true,false]" });
console.assert(isArrayEqual(prefixesDivBy5(1, 1, 1, 0, 1), [false, false, false, false, false]), { number: 1, errorMsg: "prefixesDivBy5(0,1,1,1,1,1) != [true,false,false,false,true,false]" });
