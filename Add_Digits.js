/**
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
For example:
Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
 // * @param {number} num
 // * @return {number}
 // */
function addDigits(num) {

    if (num < 0) {
        return;
    }

    var sum = 0;

    // Determines the sum of the initial digits.

    sum = digits_add(num);

    while (sum >= 10) {
        sum = digits_add(sum);
    }

    return sum;
}

function digits_add(num){
    var sum = 0;
    // If the number does not equal the modulo (remainder) update the sum with the digit and update the num with the quotient.
    while (num !== num % 10) {
    sum += num % 10;
    num = Math.trunc(num / 10);
    }
    sum += num;
    return sum;
}

var result = addDigits(0);
console.log(result);
result = addDigits(1);
console.log(result);
result = addDigits(9);
console.log(result);
result = addDigits(10);
console.log(result);
result = addDigits(11);
console.log(result);
result = addDigits(21);
console.log(result);
result = addDigits(9876);
console.log(result);
