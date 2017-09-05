// Reverse digits of an integer.
//
// Example1: x = 123, return 321
// Example2: x = -123, return -321

function reverse(x) {
    // boolean to track negative numbers.
    var negative = false;

    if (x < 0) {
        negative = true;
        x = x * -1;
    }
    // convert number to string.
    x = x.toString();
    // split string based on no character so it will split on every character.
    var arr = x.split('');

    // reverse the array by swapping from back to the front.
    for (var i = 0; i < Math.trunc(arr.length/2); i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - i -1];
        arr[arr.length - i - 1] = temp;
    }
    // join the array on no character.
    x = arr.join('');

    x = Number(x);

    if(negative) {
        x = x * -1;
    }
    // checks for overflow(max) and underflow(min) of signed integer.
    if(x > Math.pow(2,31) - 1 || x < -(Math.pow(2,31) - 1)) {
        return 0;
    }

    return x;
};

var result = reverse(123);
console.log(result);
result = reverse(-123);
console.log(result);
