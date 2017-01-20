solve(['5', '2']);
solve(['3', '4']);
solve(['5.5', '4.5']);


function solve(args) {
    var a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        greater;

    if (a > b) {
        greater = a;
        a = b;
        b = greater;
        console.log(a, b);
    } else {
        console.log(a, b);
    }
}