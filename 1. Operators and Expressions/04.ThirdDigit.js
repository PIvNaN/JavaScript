"use strict";

function solve(args) {
    let num = parseInt(args[0]);
    let result = parseInt((num / 100) % 10);

    if (result === 7) {
        console.log(true);
    } else {
        console.log('false ' + result);
    }
}


// Conditions:

solve(['5']);
solve(['701']);
solve(['9703']);
solve(['877']);
solve(['777877']);
solve(['9999799']);