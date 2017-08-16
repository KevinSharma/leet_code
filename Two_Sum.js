/**
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

nums = [3,2,4];
target = 6;

function twoSum(nums, target) {

    for( var i = 0; i < nums.length - 1; i++){
        for(var j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
}

var sum = twoSum(nums, target);
