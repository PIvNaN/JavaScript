'use strict';

function solve(args) {
    var word = args[0],
        toCheck = args[1];

    function countSubstring(text, pattern) {
        var i,
            count = 0,
            workingText = text.toLowerCase();
        pattern = pattern.toLowerCase();

        while (workingText.indexOf(pattern) > -1) {
            count += 1;
            workingText = workingText.substring(workingText.indexOf(pattern) + 1);
        }
        return count;
    }

    console.log(countSubstring(toCheck, word));

}


// Conditions:

solve(['We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);