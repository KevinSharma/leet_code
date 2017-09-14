/**
 * @param {string} s
 * @return {boolean}
 */

 function isValid(s) {
// Returns false if string length is odd.
    if (s.length % 2 === 0) {
        // dictionary with left braces as keys and the right braces as values.
        dict = {'(':')', '{':'}', '[': ']'};
        var stack = [];
        for (var i = 0; i < s.length; i++) {
            // pushes string value into array if key in dict.
            if (s[i] in dict) {
                stack.push(s[i]);
            }
            // string value not in dict the return false
            else {
                if (s[i] !== dict[stack[stack.length - 1]]) {
                    return false;
                }
                // string value in dict pop last string value.
                else {
                    stack.pop(s[i]);
                }
            }
        }
        if (stack.length < 1) {
            return true;
        }
    }
    return false;
}
var result = isValid("([])");
console.log(result);
result = isValid("()");
console.log(result);
result = isValid("){");
console.log(result);
result = isValid("()[]{}");
console.log(result);
result = isValid("(]");
console.log(result);
result = isValid("([)]");
console.log(result);
result = isValid("([]))");
console.log(result);
result = isValid(")");
console.log(result);
