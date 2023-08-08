const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (inputString) => {
    let index = 7;
    const character = inputString.charAt(index);
    console.log(`Karakter pada indeks ${index}: ${character}`);
    rl.close();
});