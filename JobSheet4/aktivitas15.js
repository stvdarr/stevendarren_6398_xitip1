const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat:", (kalimat) => {
    const indeksKata = kalimat.indexOf("jurusan");
    if (indeksKata != -1) {
    console.log(`Kata 'jurusan' pertama kali muncul pada indeks: ${indeksKata}`);
    } else {
        console.log(`Kata 'jurusan' tidak ditemukan dalam kalimat.`);
    }
    rl.close();
});