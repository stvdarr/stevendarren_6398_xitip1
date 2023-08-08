const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat:", (kalimat) => {
    const indeksKata = kalimat.indexOf("r");
    if (indeksKata != -1) {
    console.log(`Kata 'r' ditemukan pada indeks: ${indeksKata}`);
    } else {
        console.log(`Kata 'r' tidak ditemukan dalam kalimat.`);
    }
    rl.close();
});     