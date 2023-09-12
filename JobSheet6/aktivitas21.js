const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan usia: ", (usia) => {
    usia >= 18 ? console.log('Anda dapat mendaftar') : console.log('Anda belum cukup umur');
    rl.close();
});