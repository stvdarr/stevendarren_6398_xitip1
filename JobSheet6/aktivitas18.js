const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan berat paket: ", (berat) => { 
    rl.question("Pilih jenis pengiriman(reguler, ekspres, kilat): ", (jenis) => {
        let biaya;
        switch(jenis) {
            case "reguler":
                biaya = 2000 * berat;
                break;
            case "ekspres":
                biaya = 4000 * berat;
                break;
            case "kilat":
                biaya = 6000 * berat;
                break;
        }
        console.log(`Estimasi biaya pengiriman: ${biaya}`);
        rl.close();
    });
});