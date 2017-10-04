// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
//
// Example 1:
// Input: "abab"
//
// Output: True
//
// Explanation: It's the substring "ab" twice.
// Example 2:
// Input: "aba"
//
// Output: False
// Example 3:
// Input: "abcabcabcabc"
//
// Output: True
//
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

function repeatedSubstringPattern(s) {
    if (s.length < 1) {
        return;
    }

    var sub_str = '';

    for (var i = 0; i < s.length; i++) {
        sub_str += s[i];
        // times tracks the number of times the sub_str is repeated in the string.
        var times = s.length/sub_str.length;
        // even tracks if the string length is divisible sub_str length.
        var even = s.length % sub_str.length;
        if (even === 0) {
            if(s === sub_str.repeat(times) && times !== 1) {
                return true;
            }
        }
    }
    return false;
};

var result = repeatedSubstringPattern("abab");
console.log(result);
result = repeatedSubstringPattern("aba");
console.log(result);
result = repeatedSubstringPattern("abcabcabcabc");
console.log(result);
