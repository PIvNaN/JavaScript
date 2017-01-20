"use strict";

function solve(args) {
    let a = parseFloat(args[0]);
    let b = parseFloat(args[1]);
    let h = parseFloat(args[2]);

    let area = 0.5 * (a + b) * h;

    console.log(area.toFixed(7));
}


// Conditions:

solve(['5', '7', '12']);
solve(['2', '1', '33']);
solve(['8.5', '4.3', '2.7']);
solve(['100', '200', '300']);
solve(['0.222', '0.333', '0.555']);