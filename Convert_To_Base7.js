// Given an integer, return its base 7 string representation.

function convertToBase7(num) {
    var base_7 = '';

    var sign = false;

    if (num === 0) {
        return "0";
    }

    else if (num < 0) {
        sign = true;
        num *= -1;
    }

    while (num / 7 !== 0) {
        base_7 = (num % 7).toString() + base_7;
        num = Math.trunc(num / 7);
    }

    if (sign === true) {
        base_7 = "-" + base_7;
    }
    return base_7;
}

var result = convertToBase7(100);
console.log(result);
var result = convertToBase7(0);
console.log(result);
result = convertToBase7(-1);
console.log(result);
result = convertToBase7(7);
console.log(result);
result = convertToBase7(-7);
console.log(result);
result = convertToBase7(-8);
console.log(result);
result = convertToBase7(-56);
console.log(result);
