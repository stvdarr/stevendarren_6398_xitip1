const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan usia:", (usia) => {
    rl.question("Masukkan destinasi(Jakarta/Bogor/Depok):", (destinasi) => {
        destinasi = destinasi.toLowerCase();
        let harga;
        if(destinasi == "jakarta") {
            harga = 25000;
        } else if(destinasi == "bogor") {
            harga = 35000;
        } else if(destinasi == "depok") {
            harga = 30000;
        }
        if(usia >= 70) {
            harga -= 10000;
        } else if(usia >= 50) {
            harga -= 5000;
        }
        console.log(`Harga tiket: ${harga}`);
        rl.close();
    });
});