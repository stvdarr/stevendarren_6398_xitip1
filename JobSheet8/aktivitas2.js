const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan angka pertama: ", (angka1) => {
    rl.question("Masukkan angka kedua: ", (angka2) => {
        const perkalian = (a, b) => {
            return a * b;
        }
        console.log(perkalian(angka1, angka2));
        rl.close();
    });
});