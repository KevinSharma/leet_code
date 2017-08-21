function missingNumber(nums) {

    if ( nums === undefined) {
        return;
    }
    
    var value = 0;
    while (value <= nums.length) {
     // Checks if value of is within the array.
        if (nums.indexOf(value) === -1) {
            return value;
        }
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
