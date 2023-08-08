const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    startIndex = 4;
    endIndex = startIndex + 4;
    const substringResult = kalimat.slice(startIndex, endIndex);
    console.log(`Hasil slice: ${substringResult}`);
    rl.close();
}); 