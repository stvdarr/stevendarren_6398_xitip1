const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat:", (kalimat) => {
    const indeksKata = kalimat.indexOf("w");
    if (indeksKata != -1) {
    console.log(`Kata 'w' ditemukan pada indeks: ${indeksKata}`);
    } else {
        console.log(`Kata 'w' tidak ditemukan dalam kalimat.`);
    }
    rl.close();
});     