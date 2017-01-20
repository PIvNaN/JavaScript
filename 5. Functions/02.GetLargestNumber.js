"use strict";

function solve(args) {
    var arr = args[0].split(' '),
        firstN = arr[0],
        secondN = arr[1],
        thirdN = arr[2];

    if (getMax(firstN, secondN) > thirdN) {
        return getMax(firstN, secondN);
    } else {
        return thirdN;
    }

    function getMax(first, second) {
        return first > second ? first : second;
    }
}


// Conditions:

solve(['8 3 6']);