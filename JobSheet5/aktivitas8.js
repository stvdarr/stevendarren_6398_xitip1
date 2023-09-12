const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah angka bulat:", (angka1) => {
    rl.question("Masukkan sebuah angka bulat:", (angka2) => {
        let hasil = Number(angka1) % Number(angka2);
        console.log(hasil);
        rl.close();
    });
});