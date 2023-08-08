const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    startIndex = 0;
    length = 3;
    const substringResult = kalimat.substr(startIndex, length);
    console.log(`3 karakter pertama: ${substringResult}`);
    rl.close();
});