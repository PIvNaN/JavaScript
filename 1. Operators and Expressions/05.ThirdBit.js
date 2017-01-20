"use strict";

function solve(args) {
    let number = parseInt(args[0]);
    let mask = 1 << 3;
    let result = number & mask;
    let bit = result >> 3;

    console.log(bit);
}


// Conditions:

solve(['15']);
solve(['1024']);