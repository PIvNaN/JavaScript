"use strict";

function lak(args) {
    let N = +args[0],
        i,
        result = '';

    for (i = 1; i <= N; i++) {
        result += ' ' + i;
    }
    console.log(result.trimLeft());
}


// Conditions:

lak(['5']);
lak(['1']);