const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan usiamu:", (usia) => {
    if (usia >= 56) {
    console.log('Anda Bisa Mendapat Hadiah!');
    }
    if (usia < 56) {
    console.log('Anda Tidak Bisa Mendapat Hadiah');
    }
    rl.close();
});