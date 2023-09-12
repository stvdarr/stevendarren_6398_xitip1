const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah angka: ", (angka) => {
    if(angka % 2 == 0) {
        console.log("Angka Genap");
    }
    if(angka % 2 == 1) {
        console.log("Angka Ganjil");
    }
    rl.close();
});