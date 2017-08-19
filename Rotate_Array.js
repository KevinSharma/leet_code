function rotate(nums, k) {

    if (k < 0) {
    }   else {
            var shift = k % nums.length;
            var temp = nums.slice(nums.length - shift);

            for (var index = nums.length - 1; index >= 0; index--) {
                if (index < shift){
                    //  pop from temp array and put into nums array.
                    nums[index] = temp.pop();
                } else {
                    nums[index] = nums[index - shift];
                }
            }
        }
    return;
}

// var result = rotate([1,2,3], 1);
// console.log(result);
var result = rotate([1],1);
console.log(result);
result = rotate([],1);
console.log(result);
result = rotate([1,2],1);
console.log(result);
