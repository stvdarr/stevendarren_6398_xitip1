const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => { 
    startIndex = 11;
    const substringResult = kalimat.substring(startIndex);
    console.log(`Hasil substring dari indeks ${startIndex}: ${substringResult}`);
    rl.close();
});