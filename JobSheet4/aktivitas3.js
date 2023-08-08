const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (inputString) => { 
    console.log(`Banyak karakter: ${inputString.length}`); 
    rl.close();
});