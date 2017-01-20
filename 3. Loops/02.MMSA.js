"use strict";

function solve(args) {
    let min = +args[0],
        max = +args[0],
        sum = 0,
        avg,
        i;

    for (i = 0; i < args.length; i += 1) {
        if (+args[i] < min) {
            min = +args[i];
        }
        if (+args[i] > max) {
            max = +args[i];
        }

        sum += +args[i];
    }

    avg = sum / args.length;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}


// Conditions:

solve(['2', '5', '1']);
solve(['2', '-1', '4']);