"use strict";

function solve(args) {
    var n = +args[0];
    var value = 0;
    for (var i = n; i >= 0; i--) {
        var isPrime = true;

        for (var divider = 2; divider <= Math.sqrt(i); divider++) {
            if (i % divider === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            value = i;
            break;
        }
    }
    console.log(value);
}


// Conditions:

solve(['13']);
solve(['126']);
solve(['26']);