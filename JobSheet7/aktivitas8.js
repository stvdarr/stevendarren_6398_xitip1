const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan angka positif: ", (angka) => {
    let i = 2;
    while(angka > 0 && i <= angka) {
        console.log(i);
        i += 2;
    }
    rl.close();
});