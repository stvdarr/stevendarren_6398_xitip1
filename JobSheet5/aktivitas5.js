const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah angka:", (angka1) => {
    rl.question("Masukkan sebuah angka:", (angka2) => {
        let hasil = Number(angka1) + Number(angka2);
        console.log(hasil);
        rl.close();
    });    
});     