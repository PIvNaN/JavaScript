solve(['5', '2', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '5']);
solve(['-0.1', '-0.5', '-1.1']);

// Мое решение
function solve(args) {
    var a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        c = parseFloat(args[2]),
        greater = a;

    if (b > a && b > c) {
        greater = b;
        console.log(greater);
    } else if (c > a) {
        greater = c;
        console.log(greater);
    } else {
        console.log(greater);
    }
}

// Чуждо решение
// function solve(args) {
//     var a = parseFloat(args[0]);
//     var b = parseFloat(args[1]);
//     var c = parseFloat(args[2]);

//     if (a >= b && a >= c) {
//         console.log(a);
//     }
//     else if (b >= c) {
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }