"use strict";

function solve(args) {
    var length = args.splice(0, 1),
        arr = args.splice(0, length),
        x = args,
        min = 0,
        max = length - 1,
        result = -1,
        mid;
    while (min <= max) {
        mid = min + (max - min) / 2;
        mid = Math.floor(mid);
        if (+arr[mid] > x) {
            max = mid - 1;
        } else if (+arr[mid] < x) {
            min = mid + 1;
        } else {
            result = mid;
            break;
        }
    }
    console.log(result);
}


// Conditions:

solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);