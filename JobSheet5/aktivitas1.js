const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah angka: ", (angka) => { 
    angka = Number(angka);
    console.log(typeof angka);
    angka = angka.toString();
    console.log(typeof angka);
    rl.close();
});