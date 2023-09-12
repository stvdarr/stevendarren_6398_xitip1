const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah angka: ", (angka) => { 
    let str = '5';
    console.log(angka === str)
    rl.close();
});