// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.
//
// For example:
//
// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].
//
// Note:
// The order of the result is not important. So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

function singleNumber(nums) {
    // Check for empty nums.
    if ( nums.length < 1) {
        return;
    }

    var dict = {};

    for (var i = 0; i < nums.length; i++) {
        // If array element in not in dictionary add the key and set the value to 1, otherwise just increment the value.
        if (!(nums[i] in dict)) {
            dict[nums[i]] = 1;
        }
        else {
            dict[nums[i]] += 1;
        }
    }
    var unique = [];

    // pushes key into empty array where the key value equals 1.
    for (key in dict) {
        if(dict[key] === 1){
            unique.push(parseInt(key));
        }
    }
    return unique;
}

var result = singleNumber([1,2,1,3,2,5]);
