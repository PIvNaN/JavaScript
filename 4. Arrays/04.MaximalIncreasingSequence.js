'use strict';

function solve(args) {
    var len = args[0],
        counter = 1,
        maxSeq = 0;

    for (var i = 1; i < len; i += 1) {

        if (+args[i] < +args[i + 1]) {
            counter += 1;
        } else {
            counter = 1;
        }
        if (counter > maxSeq) {
            maxSeq = counter;
        }
    }
    console.log(maxSeq);
}


// Conditions:

solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);