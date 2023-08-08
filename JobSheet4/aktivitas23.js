const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    startIndex = -7;
    const substringResult = kalimat.substr(startIndex);
    console.log(`7 karakter terakhir: ${substringResult}`);
    rl.close();
});