'use strict';

function solve(args) {
    var n = +args[0],
        arr = args[0].split("\n"),
        counter = 1,
        maxSequence = 1;

    for (var i = 0; i <= n; i += 1) {
        arr[i] = args[i];
    }

    for (var j = 0; j < n; j += 1) {
        if (arr[j] === arr[j + 1]) {
            counter++;
            if (counter > maxSequence) {
                maxSequence = counter;
            }
        } else {
            counter = 1;
        }
    }
    if (n === 0) {
        maxSequence = 0;
    }
    console.log(maxSequence);
}


// Conditions:

solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);