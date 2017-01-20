"use strict";

function solve(args) {
    var a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        c = parseFloat(args[2]),
        greater,

        D = (b * b) - (4 * a * c),

        x1 = (-b + Math.sqrt(D)) / (2 * a),
        x2 = (-b - Math.sqrt(D)) / (2 * a);

    if (D > 0) {
        if (!(x1 < x2)) {
            greater = x1;
            x1 = x2;
            x2 = greater;
            console.log('x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2));
        } else {
            console.log('x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2));
        }
    } else if (D === 0) {
        console.log('x1=x2=' + x1.toFixed(2));
    } else {
        console.log('no real roots');
    }
}


// Conditions:

solve(['2', '5', '-3']);
solve(['-1', '3', '0']);
solve(['-0.5', '4', '-8']);
solve(['5', '2', '8']);
solve(['0.2', '9.572', '0.2']);