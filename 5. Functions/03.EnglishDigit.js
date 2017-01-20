'use strict';

function solve(args) {
    var N = args[0];

    switch (lastNumber(N)) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';

        default:
            return "Not a digit";
    }

    function lastNumber(number) {
        var lastNum = number % 10;
        return (lastNum);
    }

}


// Conditions:

solve(['25']);