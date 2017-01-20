"use strict";

function solve(args) {
    var a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        c = parseFloat(args[2]);

    if (a === 0 || b === 0 || c === 0) {
        console.log('0');
    } else
    if (a < 0 ^ b < 0 ^ c < 0) {
        console.log('-');
    } else {
        console.log('+');
    }
}


// Conditions:

solve(['5', '2', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '4']);
solve(['-1', '-0.5', '-5.1']);