function getSum(a, b) {

    var result = 0;

    // checking if both numbers are equal.
    if (a === b) {
        result = 2 * a;
    }
    // checking if either of the numbers are 0.
    else if (a === 0 && b !== 0){
        result = b;
    }
    else if (a !== 0 && b === 0) {
        result = a;
    }
    // checking if either of the numbers are 1.
    else if(a === 1 && b > 0){
        result = 1;
        result += b;
    }
    else if(a > 0 && b === 1){
        result = 1;
        result += a;
    }
    // if a is less than b.
    else if (a < b){
        if (b % a === 0){
            result = a;
            result += b;
        }
        else if(b % a === 1){
            result = -1;
            result += b * Math.ceil(b/a);
        }
        else{
            result = b;
            result += a;
        }
    }
    // if a is greater than b.
    else{
        if(a % b === 0){
            result = b;
            result += a;
        }
        else if(a % b === 1){
            result = -1;
            result = b * Math.ceil(a/b);
        }
        else{
            result = a;
            result += b;
        }
    }

    return result;
}

var total = getSum(2,3);
console.log(total);
total = getSum(20,30);
console.log(total);
total = getSum(8,16);
console.log(total);
total = getSum(8,8);
console.log(total);
total = getSum(1,9);
console.log(total);
total = getSum(9,1);
console.log(total);
total = getSum(0,2);
console.log(total);
total = getSum(2,0);
console.log(total);
total = getSum(-2,-3);
console.log(total);
total = getSum(-20,20);
console.log(total);
