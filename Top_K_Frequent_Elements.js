// Given a non-empty array of integers, return the k most frequent elements.
// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    if (nums.length < 1) {
        return;
    }
    var dict = {};
    for (var i = 0; i < nums.length; i++) {
        while (!(nums[i] in dict)) {
            dict[nums[i]] = 1;
        }
        dict[nums[i]] += 1;
    }
    // returns an array of a given object's in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
    var keys = Object.keys(dict);

    keys.sort(function(a,b){
        return dict[b] - dict[a];
    })

    var k_arr = [];

    for (var j = 0; j < k; j++) {
        k_arr.push(parseInt(keys[j]));
    }
    return k_arr;
 }

 var result = topKFrequent([2,1,1,3,3,3],2);
 console.log(result);
 result = topKFrequent([1,1,1,2,2,3],2);
 console.log(result);
