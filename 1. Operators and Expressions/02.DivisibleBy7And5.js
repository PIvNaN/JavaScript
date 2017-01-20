"use strict";

function solve(args) {
    let num = parseInt(args[0]);
    if (num % 7 === 0 && num % 5 === 0) {
        console.log('true ' + args[0]);
    } else {
        console.log('false ' + args[0]);
    }
}


// Conditions:

solve(['3']);
solve(['0']);
solve(['5']);
solve(['7']);
solve(['35']);
solve(['140']);