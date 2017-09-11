// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
//
// Example:
// Given num = 16, return true. Given num = 5, return false.

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    // Check if num is greater than a positive 32 bit integer or less than a negative 32 bit integer.
    if(num > Math.pow(2,31) - 1 || num < -(Math.pow(2,31) - 1)) {
    }
    else if ( num <= 0) {
    }
    else if (num === 1) {
        return true;
    }
    else if (num % 2 === 1) {
    }
    while (num / 4 !== 0 && num % 4 === 0) {
        if ( num / 4 === 1 && num % 4 === 0) {
            return true;
        }
        num = num / 4;
    }
    return false;
};
var result = isPowerOfFour(16);
console.log(result);
result = isPowerOfFour(0);
console.log(result);
result = isPowerOfFour(-240);
console.log(result);
result = isPowerOfFour(64);
console.log(result);
