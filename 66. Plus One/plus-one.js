/**
 * https://leetcode.com/problems/plus-one
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    var num = 1;
    for(var i=digits.length-1; i>=0; i--) {
        var sum = digits[i] + num;
        if(sum > 9)
        {
            digits[i] = sum % 10;
        }
        else {
           digits[i] = sum;
           break;
        }
        
        if(i==0) {
            digits.splice(0, 0, 0);
            i=1;
        }
    }
    
    return digits;
};

// plusOne([9]) == [1,0]
