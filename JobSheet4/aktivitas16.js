const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah string:", (kalimat) => {
    const indeksKata = kalimat.indexOf("5");
    if (indeksKata != -1) {
    console.log(`Angka '5' pertama kali muncul pada indeks: ${indeksKata}`);
    } else {
        console.log(`Angka '5' tidak ditemukan dalam kalimat.`);
    }
    rl.close();
});