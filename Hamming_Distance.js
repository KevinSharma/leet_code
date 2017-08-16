/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance( x, y ) {

    if( x == y ){
        return 0;
    }

    var bin_1 = 0, bin_2 = 0;
    var count = 0;
    var binary = '';

    bin_1 = conv_Dec_toBin( x );
    bin_2 = conv_Dec_toBin( y );

    // checks if length of binary for x and y are equal.
    if( bin_1.length != bin_2.length ){
        var add = 0;
        // checks if length of binary of x is greater than y.
        if( bin_1.length > bin_2.length ){
            add = bin_1.length - bin_2.length;

            bin_2 = '0'.repeat(add) + bin_2;
        }
        // checks if length of binary of y is greater than x.
        else{
            add = bin_2.length - bin_1.length;

            bin_1 = '0'.repeat(add) + bin_1;
        }
    }
    // // compares each element of x to y and counts the number of differences.
    for(var i = 0; i < bin_1.length; i++){
        if(bin_1[i] != bin_2[i]){
            count ++;
        }
    }

    return count;
};

function conv_Dec_toBin(dec1){
    var temp = '';
    var binary = '';

    while( dec1 > 0){
        // stores remainder as a string.
        temp = (dec1 % 2).toString();
        binary = temp + binary;
        // removes the decimal of the quotient.
        dec1 = Math.trunc(dec1 / 2);
    }

    return binary;
}

var result = hammingDistance( 93,73 );
console.log(result);
