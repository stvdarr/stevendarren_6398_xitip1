const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    startIndex = 2;
    length = 5;
    const substringResult = kalimat.substr(startIndex, length);
    console.log(`Hasil substring dari indeks ${startIndex} dengan panjang ${length}: ${substringResult}`);
    rl.close();
});