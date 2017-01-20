'use strict';

function solve(args) {
    var i = 0,
        inputStr = args[0],
        result,
        parantheses = 0;

    for (i = 0; i < inputStr.length; i += 1) {
        if (inputStr[i] === '(') {
            parantheses += 1;
        } else if (inputStr[i] === ')') {
            parantheses -= 1;
        }
        result = (!parantheses) ? 'Correct' : 'Incorrect';
    }
    console.log(result);
}


// Conditions:

solve([')(a+b))']);