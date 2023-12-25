const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let start = 1;
    while (start <= input[0]) {
        console.log("*".repeat(start));
        start++;
    }
});
