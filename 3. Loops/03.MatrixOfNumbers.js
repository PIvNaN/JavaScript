"use strict";

function solve(args) {
    let n = args[0],
        row = 1,
        result = "",
        i;

    for (i = 0; i < n; i += 1) {

        if (row <= n) {
            if (i < n - 1) {
                result += (i + row) + " ";
            } else {
                result += i + row + "\n";
                row += 1;
                i = -1;
            }
        }
    }
    console.log(result);
}


// Conditions:

solve(['3']);