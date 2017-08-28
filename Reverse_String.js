// Write a function that takes a string as input and returns the string reversed.
//
// Example:
// Given s = "hello", return "olleh".

function reverseString(s) {

    var rev_str = '';

    if (s.length < 1) {
    }

    else {
        for (var i = s.length - 1; i >= 0; i--) {
            rev_str += s[i];
        }
    }

    return rev_str;
}

var result = reverseString("hello");
console.log(result);
result = reverseString("WhyYouLittle!@#$%^&*()_+");
console.log(result);
