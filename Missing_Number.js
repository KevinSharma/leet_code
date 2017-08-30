// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
//
// For example,
// Given nums = [0, 1, 3] return 2.

function missingNumber(nums) {

    if (nums === undefined) {
        return;
    }

    var value = 0;
    while (value <= nums.length) {
     // Checks if value of not within the array.
        if (nums.indexOf(value) === -1) {
            return value;
        }
        // if value within array increment the value re-run while loop.
        else {
            value ++;
            continue;
        }
    }
 }

var result = missingNumber([0]);
console.log(result);
result = missingNumber([0,1,2,4]);
console.log(result);
result = missingNumber([4,2,1,0]);
console.log(result);
