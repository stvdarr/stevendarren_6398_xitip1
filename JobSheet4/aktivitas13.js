const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat:", (kalimat) => {
    const indeksKata = kalimat.indexOf("apel");
    if (indeksKata != -1) {
    console.log(`Kata 'apel' pertama kali muncul pada indeks: ${indeksKata}`);
    } else {
        console.log(`Kata 'apel' tidak ditemukan dalam kalimat.`);
    }
    rl.close();
});