const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat:", (kalimat) => {
    const indeksKata = kalimat.indexOf("a");
    if (indeksKata != -1) {
    console.log(`Huruf 'a' pertama kali muncul pada indeks: ${indeksKata}`);
    } else {
        console.log(`Huruf 'a' tidak ditemukan dalam kalimat.`);
    }
    rl.close();
});