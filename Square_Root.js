// Implement int sqrt(int x).
// Compute and return the square root of x.

function mySqrt(x) {

    if (x < 2) {
        return x;
    }

    let root = Math.floor(x/2);

    while (root < x) {
        if (root * root === x) {
            return root;
        }
        else if (root * root < x){
            if ((root + 1) * (root + 1) > x) {
                return root;
            }
            root++;
        }
        else {
            root = Math.floor(root / 2);
        }
    }
    return root;
}

var result = mySqrt(16);
console.log(result);
result = mySqrt(9);
console.log(result);
result = mySqrt(2);
console.log(result);
result = mySqrt(4);
console.log(result);
result = mySqrt(3);
console.log(result);
