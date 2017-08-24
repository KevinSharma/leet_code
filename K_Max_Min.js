function k_min_max(array_int, k) {
// Checks if array is empty, k is 0 or negative, and if k is greater than the length of the array.
    if (array_int.length < 1 || k < 1 || k > array_int.length) {
        return;
    }
    // Sorts array from low to high values.
    array_int = array_int.sort();

    // Check for k# max and min numbers.
    var array_max = [array_int[array_int.length - 1]];
    var array_min = [array_int[0]];
    console.log(array_int.length);

    for (var i = 1; i < k; i++) {
        array_min.push(array_int[i]);
    }
    console.log(array_max);

    for (var j = array_int.length - 2; j > array_int.length - 1 - k; j--) {
        console.log(j);
        array_max.push(array_int[j]);

    }

    var dict = {min: array_min, max: array_max};

    return dict;
}

var result = k_min_max([2,4,5,3],2);
console.log(result);
result = k_min_max([],2);
console.log(result);
result = k_min_max([],1);
console.log(result);
result = k_min_max([5],2);
console.log(result);
result = k_min_max([2,4,0,3,-1,11,17,38,15],2);
console.log(result);
