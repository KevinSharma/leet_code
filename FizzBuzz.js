function fizzBuzz(n) {

    var result = [];

    if (n < 1){
        // exits program as n is less than 1.
        return result;
    }

    else{
        var i = 1;

        while (i <= n) {
            if (i % 15 === 0){
                result.push("FizzBuzz");
            }
            else if (i % 5 === 0){
                result.push("Buzz");
            }
            else if (i % 3 === 0){
                result.push("Fizz");
            }
            // when n is not divisible by 3, 5, or 3 and 5. Converts to string then pushes to result.
            else{
                i = i.toString();
                result.push(i);
            }
            i++;
        }
    }
    return result;
}

var result = fizzBuzz(15);
console.log(result);
result = fizzBuzz(0);
console.log(result);
result = fizzBuzz(1);
console.log(result);
result = fizzBuzz(5);
console.log(result);
