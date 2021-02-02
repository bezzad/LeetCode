/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let sPointer = 0;
    let sLen = s.length;

    if(sLen == 0) 
        return true;

    for(let i=0, len=t.length; i<len; i++) {    
        if (s[sPointer] == t[i]) {
            sPointer++;
        }        
    }

    return sPointer == sLen;
};


console.assert(isSubsequence("abc", "ahbgdc"), { number: 1, errorMsg: "is not Subsequence"});
console.assert(isSubsequence("axc", "ahbfffxagdc"), { number: 2, errorMsg: "is not Subsequence"});
console.assert(isSubsequence("", "ahbgdc"), { number: 3, errorMsg: "is not Subsequence"});