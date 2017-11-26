/**
 * @param {number[]} digits
 * @return {number[]}
 */

function plusOne(digits) {
// check for empty array
    if(digits.length < 1){
        return;
    }
//  setting index from end of array since we add one from the least significant digit.
    var ind = digits.length - 1;
    var sum = 0;
    sum = digits[ind] + 1;
    var start = 0;

    if(sum < 10){
        digits[ind] = sum;
    }
    else if(sum > 9 && digits.length === 1){
        digits[ind] = 1;
        digits.push(0);
    }
    else{
        if(sum > 9 && digits.length > 1){
            sum = digits[ind - 1] + 1;
            if(sum < 10){
                digits[ind - 1] = sum;
                digits[ind] = start;
            }
            else{
                while(digits[ind] === 9){
                    ind--;
                }
                if(digits[ind] < 9){
                    digits[ind] += 1;
                    for(var j = ind + 1; j <= digits.length - 1; j++){
                        digits[j] = 0;
                    }
                }
                else{
                    digits[start] = 1;
                    for(var i = 1; i <= digits.length - 1; i++){
                        digits[i] = 0;
                    }
                    digits.push(0);
                }
            }
        }
    }
    return digits;
};

var digits = [0];
var result = plusOne(digits);
console.log(result);
digits = [9];
result = plusOne(digits);
console.log(result);
digits = [1,9];
result = plusOne(digits);
console.log(result);
digits = [8];
result = plusOne(digits);
console.log(result);
digits = [];
result = plusOne(digits);
console.log(result);
digits = [4,2,9,9];
result = plusOne(digits);
console.log(result);
digits = [8,9,9,9];
result = plusOne(digits);
console.log(result);
digits = [8,9];
result = plusOne(digits);
console.log(result);
digits = [2,4,9,3,9];
result = plusOne(digits);
console.log(result);
