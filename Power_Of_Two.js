/**
Given an integer, write a function to determine if it is a power of two.
 * @param {number} n
 * @return {boolean}
 */

 function isPowerOfTwo(n) {

    var PowerTwo = false;
    if ( n <= 0 ) {
        return PowerTwo;
    }

    else if (n === 1) {
        return !PowerTwo;
    }

    while (n / 2 !== 0 && n % 2 === 0) {

        if ( n / 2 === 1 && n % 2 === 0) {
            return !PowerTwo;
        }
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
