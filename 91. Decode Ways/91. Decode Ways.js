/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    
};

// ---------- unit tests ----------------
console.assert(numDecodings("12") == 2, "'12' could be decoded as 'AB' (1 2) or 'L' (12).");
console.assert(numDecodings("226") == 2, "'226' could be decoded as 'BZ' (2 26), 'VF' (22 6), or 'BBF' (2 2 6).");
console.assert(numDecodings("06") == 0, "'06' cannot be mapped to 'F' because of the leading zero ('6' is different from '06').");

console.log("END");