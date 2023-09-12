const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah angka: ", (angka) => { 
    let total = 10;
    total *= Number(angka);
    console.log(total);
    rl.close();
});