"use strict";

function sort(args) {
    args.splice(0, 1);
    result = args.sort(function(a, b) { return a - b });

    console.log(result.join('\n'));
}


// Conditions:

sort(['6', '3', '4', '1', '5', '2', '6']);
sort(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);