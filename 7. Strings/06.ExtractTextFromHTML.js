'use strict';

function solve(args) {
    var i = 0,
        regex = /<(.*?)>/g,
        result = '';

    for (i; i < args.length; i += 1) {
        result += args[i].trim().replace(regex, '').trim();
    }

    console.log(result);
}


// Conditions:

solve([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);