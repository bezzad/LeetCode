/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
   if (s.length == 0)
      return 0;

   let stack = [];
   let preChar = '';
   for (var i = 0; i < s.length; i++) {
      let char = s[i];

      if (char == '0') {
         if (preChar == '1' || preChar == '2') {
            stack.push(stack.pop() + char);
         }
         else return 0; // the impossible state
      }
      else {
         stack.push(char);
      }

      // keep last character
      preChar = char; 
   }

   return 0;
};

function getNumber(character) {
   return character.toUpperCase().charCodeAt(0) - 64;
}

// Possible characters count: [1 1 1 2 1 3 1] = 1 * 1 * 1 * 2 * 1 * 3 * 1 = 6

// ---------- unit tests ----------------
console.assert(numDecodings("12") == 2, "'12' could be decoded as 'AB' (1 2) or 'L' (12).");
console.assert(numDecodings("226") == 3, "'226' could be decoded as 'BZ' (2 26), 'VF' (22 6), or 'BBF' (2 2 6).");
console.assert(numDecodings("06") == 0, "'06' cannot be mapped to 'F' because of the leading zero ('6' is different from '06').");
console.assert(numDecodings("") == 0, "s contains only digits and may contain leading zero(s).");

console.log("END");