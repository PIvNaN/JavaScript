"use strict";

function solve(arr) {
    function removeA(arr) {
        let what, a = arguments,
            L = a.length,
            ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax = arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    }
    let element = arr[0],
        array = arr.splice(1);

    removeA(array, element);
    for (let i = 0; i < array.length; i += 1) {
        console.log(array[i]);
    }
}