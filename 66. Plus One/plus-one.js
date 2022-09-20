/**
 * https://leetcode.com/problems/plus-one
 * You are given a large integer represented as an integer array digits, 
 * where each digits[i] is the ith digit of the integer. 
 * The digits are ordered from most significant to least significant in left-to-right order. 
 * The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
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
