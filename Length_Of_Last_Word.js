// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
//
// If the last word does not exist, return 0.
//
// Note: A word is defined as a character sequence consists of non-space characters only.
//
// For example,
// Given s = "Hello World",
// return 5.
/**
 * @param {string} s
 * @return {number}
 */
 function lengthOfLastWord(s) {
    // returns the string stripped of whitespace from both ends. trim() does not affect the value of the string itself.
    s = s.trim();
    if (s.length < 1) {
        return 0;
    }
    // splits a string into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
    var words = s.split(' ');
    return words[words.length - 1].length;
}

var result = lengthOfLastWord(' ');
console.log(result);
result = lengthOfLastWord('Hello World');
console.log(result);
result = lengthOfLastWord('  a');
console.log(result);
result = lengthOfLastWord('a  ');
console.log(result);
