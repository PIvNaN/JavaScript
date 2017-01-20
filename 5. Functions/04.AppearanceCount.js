'use strict';

function solve(args) {
    var n = args[1].split(' '),
        x = +args[2];

    count(n, x);

    function count(arr, numSerch) {
        var i,
            result = 0;

        for (i = 0; i < arr.length; i += 1) {
            if (numSerch === +arr[i]) {
                result += 1;
            }
        }
        console.log(result);
    }
}


// Conditions:

solve(['8', '28 6 21 6 -7856 73 73 -56', '73']);