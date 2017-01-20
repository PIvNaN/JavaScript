'use strict';

function solve(args) {
    var arr = args[1].split(' ');

    check(arr);

    function check(array) {
        var i;

        for (i = 0; i < array.length; i += 1) {

            if (+array[i] < (+array[i + 1]) && (+array[i + 1]) > (+array[i + 2])) {
                var pop = array[i + 1];
                var index = array.indexOf(pop);
                console.log(index);
                break;
            }
        }
    }
}


// Conditions:

solve(['6', '-26 -25 -28 31 2 27']);