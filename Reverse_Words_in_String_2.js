// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
//
// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

 function reverseWords(s) {
    //  rev_str will hold entire string with each word reversed & preserving white space and word order.
    var rev_str = "";
    // temp_str will be used to reverse each word.
    var temp_str = "";
    // i helps keep track of our place in the string.
    var i = 0;
    // Ensures we don't exceed the length of the string and handles empty string case.
    while (i < s.length) {
        // If element of string s[i] is not a ' ', then adds element to front of temp_str.
        if (s[i] !== ' ') {
            temp_str = s[i] + temp_str;
        }
        // If element of string s[i] is a ' ', then add to end of temp_str, add temp_str to rev_str and
        // reset temp_str to an empty string.
        else {
            temp_str += s[i];
            rev_str = rev_str + temp_str;
            temp_str = "";
        }
        i++;
    }
    // Once you reach the end of the string add final reversed word to rev_str.
    rev_str = rev_str + temp_str;

    return rev_str;
}

var result = reverseWords("Let's take LeetCode contest");
console.log(result);
