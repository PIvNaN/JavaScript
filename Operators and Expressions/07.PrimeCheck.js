solve(['2']);
"use strict";

function solve(args) {
    var number = +args[0];
    var prime = true;
    if (number < 2) {
        prime = false;
        console.log(prime);
    } else {
        for (var i = 2; i <= Math.sqrt(number); i += 1) {
            if (number % i === 0) {
                prime = false;
                break;
            }
        }
        console.log(prime);
    }
}

// Conditions:


solve(['2']);
solve(['23']);
solve(['-3']);
solve(['0']);
solve(['1']);