"use strict";

function solve(args) {
    var arr = args[1].split(' ');

    check(arr);

    function check(array) {
        var i,
            result = 0;

        for (i = 0; i < array.length; i += 1) {

            if (+array[i] < (+array[i + 1]) && (+array[i + 1]) > (+array[i + 2])) {
                result += 1;
            }
        }
        console.log(result);
    }
}


// Conditions:

solve(['6', '20 30 25 45 39 41 40 99 55 98 100 97']);