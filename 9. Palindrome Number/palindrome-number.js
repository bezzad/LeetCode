/**
 * https://leetcode.com/problems/palindrome-number/
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is a palindrome while 123 is not.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var str = x.toString();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1])
            return false;
    }

    return true;
};


// ----------------- unit tests -----------------------------------
console.assert(isPalindrome(121), "121");
console.assert(isPalindrome(-121) == false, "-121");
console.assert(isPalindrome(10) == false, "10");
//console.assert(isPalindrome(011) == true, "011");
//console.assert(isPalindrome(012321) == true, "012321");
//console.assert(isPalindrome(0123210) == false, "0123210");
console.assert(isPalindrome(123210) == false, "123210");
console.assert(isPalindrome(0) == true, "0");
console.assert(isPalindrome(-1) == false, "-1");