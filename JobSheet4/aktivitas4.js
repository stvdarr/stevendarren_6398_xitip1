const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah string: ", (inputString) => { 
    console.log(`banyak karakter: ${inputString.length}`); 
    rl.close();
});