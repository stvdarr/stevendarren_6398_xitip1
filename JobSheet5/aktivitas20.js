const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah angka: ", (angka) => { 
    console.log(angka > 0 || angka < 100)
    rl.close();
});