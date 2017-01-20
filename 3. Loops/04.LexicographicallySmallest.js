'use strict';

function solve(element) {
    let elements = Object.getOwnPropertyNames(element);
    elements.sort();

    console.log("Element " + element);
    console.log("Lexicographically first: " + elements[0]);
    console.log("Lexicographically last: " + elements[elements.length - 1]);
    console.log(" ");
}


// Conditions:

solve(document);
solve(window);
solve(navigator);