"use strict";

function solve() {
    return function compareLex(charArrs) {
        var char, longer,
            str1 = charArrs[0],
            str2 = charArrs[1];

        if (str1 < str2) {
            longer = str2;
        } else {
            longer = str1;
        }

        for (char = 0; char < longer.length; char += 1) {
            if (str1[char] < str2[char]) {
                return "<";
            } else if (str1[char] > str2[char]) {
                return ">";
            }
        }
        return "=";
    }
}


// Conditions:

solve(['food', 'food']);