//Do NOT put "solves" in the top in BGCODER!!!

"use strict";

function solve(args) {
    let x = parseFloat(args[0]);
    let y = parseFloat(args[1]);

    let xC = 1;
    let yC = 1;
    let radius = 1.5;
    let isInRectangle;
    let isInCircle;

    if (x <= 5 && x >= -1 && y <= 1 && y >= -1) {
        isInRectangle = 'inside';
    } else {
        isInRectangle = 'outside';
    }

    if ((x - xC) * (x - xC) + (y - yC) * (y - yC) <= radius * radius) {
        isInCircle = 'inside';
    } else {
        isInCircle = 'outside';
    }

    console.log(isInCircle + ' circle ' + isInRectangle + ' rectangle');
}


// Conditions:

solve(['2.5', '2']);
solve(['0', '1']);
solve(['2.5', '1']);
solve(['1', '2']);