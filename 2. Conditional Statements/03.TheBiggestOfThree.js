"use strict";

function solve(args) {
    var a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        c = parseFloat(args[2]),
        greater = a;

    if (b > a && b > c) {
        greater = b;
        console.log(greater);
    } else if (c > a) {
        greater = c;
        console.log(greater);
    } else {
        console.log(greater);
    }
}


// Conditions:

solve(['5', '2', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '5']);
solve(['-0.1', '-0.5', '-1.1']);