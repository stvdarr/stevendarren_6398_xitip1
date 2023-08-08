const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat:", (kalimat) => {
    const kataTerakhir = kalimat.slice(-1);
    const indeksKataTerakhir = kalimat.lastIndexOf(kataTerakhir);
    console.log(`Index karakter terakhir: ${indeksKataTerakhir}`); 
    rl.close();
});