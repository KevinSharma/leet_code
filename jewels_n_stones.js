//You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
//
//The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case //sensitive, so "a" is considered a different type of stone from "A".

function jewels_n_stones(J,S){
    if (J.length < 1 || S.length < 1 ){
        return;
    }

    var count = 0;
    for (var types = 0; types < J.length; types++) {
        for (var stones = 0; stones < S.length; stones++) {
            if (J[types] === S[stones]) {
                count++;
            }
        }
    }
    return count;
}

var result = jewels_n_stones("aA","aAAbbbb");
console.log(result);
result = jewels_n_stones("z","ZZ");
console.log(result);
