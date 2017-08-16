// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.
//
// Example 1:
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

/**
 * @param {string} moves
 * @return {boolean}
 */

var result = '';

function judgeCircle(moves) {

    var x = 0, y = 0;

    if(moves.length % 2 === 0){

        for(var i = 0; i < moves.length; i++){
            if(moves[i] == 'U'){
                y += 1;
            }
            else if(moves[i] == 'D'){
                y -= 1;
            }
            else if(moves[i] == 'R'){
                x += 1;
            }
            else if(moves[i] == 'L'){
                x -= 1;
            }
        }
    }

    if(x === 0 && y === 0){
        return true;
    }
    else
        return false;

}
// true case
result = judgeCircle('UD');
console.log(result);
// false case
result = judgeCircle('LL');
console.log(result);
// false case
result = judgeCircle('LLDDRR');
console.log(result);
// true case
result = judgeCircle('UUDDLLRR');
console.log(result);
