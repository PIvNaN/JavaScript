"use strict";

function solve(args) {
    let a = parseFloat(args[0]);
    let b = parseFloat(args[1]);

    let area = a * b;
    let perimeter = (a * 2) + (b * 2);

    console.log(area.toFixed(2) + " " + perimeter.toFixed(2));
}


// Conditions:

solve(['2.5', '3']);
solve(['5', '5']);
solve(['3', '4']);