/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {

    var i = 0;
    var dict = {};

    while(i < nums.length) {
        // Checks if value is not in dictionary, and creates key and add occurrence of 1.
        if (!(nums[i] in dict)) {
            dict[nums[i]] = 1;
        }
        // Value is in dictionary, so we increment the occurrence.
        else {
            dict[nums[i]] += 1;
        }
        i++;
    }
    // Traverses keys in dictionary and checks if occurence is 1 and returns key.
    for (key in dict){
        if(dict[key] === 1) {
            return Number(key);
        }
    }
};

var result = singleNumber([-1,-1,-2]);
console.log(result);
result = singleNumber([-1]);
console.log(result);
result = singleNumber([5]);
console.log(result);
result = singleNumber([0,1]);
console.log(result);
result = singleNumber([0,1,0]);
console.log(result);
