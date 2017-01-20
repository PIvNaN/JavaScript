"use strict";

function solve(args) {
    let n = +args[0],
        i,
        arr = [];

    for (i = 0; i < n; i++) {
        arr.push(i * 5);
        console.log(arr[i]);
    }
}


// Conditions:

solve(['5']);