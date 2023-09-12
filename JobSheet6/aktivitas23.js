const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan usia: ", (usia) => {
    rl.question("Masukkan jenis(Dewasa/Anak): ", (jenis) => {
        jenis = jenis.toLowerCase();
        let harga;
        if(jenis == "dewasa") {
            if(usia >= 13) {
                harga = 50000;
            } else {
                harga = 35000;
            }
        } else {
            if(usia >= 13) {
                harga = 35000;
            } else {
                harga = 25000;
            }
        }
        console.log(`Harga tiket: ${harga}`);
        rl.close();
    });
});