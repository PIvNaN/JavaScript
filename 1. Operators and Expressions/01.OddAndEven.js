"use strict";

function solve(args) {
    let number = parseInt(args[0]);

    if (number % 2 === 0) {
        console.log("even " + args[0]);
    } else {
        console.log("odd " + args[0]);
    }

    let num = parseInt(args[1]);
    if (number % 2 === 0) {
        console.log("even " + args[1]);
    } else {
        console.log("odd " + args[1]);
    }

}


// Conditions:

solve(['3', '-1']);
solve(['7', '-4']);
solve(['-2', '-7']);