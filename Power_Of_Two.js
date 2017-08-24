/**
Given an integer, write a function to determine if it is a power of two.
 * @param {number} n
 * @return {boolean}
 */

 function isPowerOfTwo(n) {

    var PowerTwo = false;
    // handles negative numbers.
    if ( n <= 0 ) {
        return PowerTwo;
    }
    // handles n = 1.
    if (n === 1) {
        return !PowerTwo;
    }
    // checks whether quotient is non-zero, and remainder is zero.
    while (n / 2 !== 0 && n % 2 === 0) {
        // checks whether quotient is equal to 1, and remainder is zero and returns true.
        if ( n / 2 === 1 && n % 2 === 0) {
            return !PowerTwo;
        }
        // updates n with the quotient.
        else {
            n = n / 2;
        }
    }
    return PowerTwo;
};

var result = isPowerOfTwo(0);
console.log(result);
result = isPowerOfTwo(1);
console.log(result);
result = isPowerOfTwo(-1);
console.log(result);
result = isPowerOfTwo(-0.5);
console.log(result);
result = isPowerOfTwo(8);
console.log(result);
result = isPowerOfTwo(12);
console.log(result);
result = isPowerOfTwo(3);
console.log(result);
result = isPowerOfTwo(64);
console.log(result);
result = isPowerOfTwo(52);
console.log(result);
