const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan total belanja: ", (total) => {
    total > 100000 ? console.log(`Total belanja: ${0.9 * total}`) : console.log(`Total belanja: ${total}`);
    rl.close();
});