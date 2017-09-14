/**
 * @param {string} s
 * @return {boolean}
 */

 function isValid(s) {
// Returns false if string length is odd.
    if (s.length % 2 !== 0) {
    }
    else {
        dict = {'(':')', '{':'}', '[': ']'};
        var stack = [];
        for (var i = 0; i < s.length; i++) {
            if (s[i] in dict) {
                stack.push(s[i]);
            }
            else {
                if (s[i] !== dict[stack[stack.length - 1]]) {
                    return false;
                }
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
