"use strict";

function solve(args) {
    let x = parseFloat(args[0]);
    let y = parseFloat(args[1]);

    let radius = 2;

    let distance = Math.sqrt((x * x + y * y));

    if (distance <= radius) {
        console.log('yes ' + distance.toFixed(2));
    } else {
        console.log('no ' + distance.toFixed(2));
    }
}


// Conditions:

solve(['-2', '0']);
solve(['-1', '2']);
solve(['1.5', '-1']);
solve(['-1.5', '-1.5']);
solve(['100', '-30']);
solve(['0', '0']);
solve(['0.2', '-0.8']);
solve(['0.9', '-1.93']);
solve(['1', '1.655']);
solve(['0', '1']);