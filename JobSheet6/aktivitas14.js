const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Pilih mode transportasi:", (mode) => {
    let waktu;
    let biaya;
    if(mode == "kereta") {
        waktu = 3;
        biaya = 30000;
    } else if(mode == "bus") {
        waktu = 5;
        biaya = 10000;
    } else if(mode == "pesawat") {
        waktu = 1;
        biaya = 200000;
    }
    console.log(`Estimasi waktu perjalanan: ${waktu} jam; Biaya: Rp${biaya}`);
    rl.close();
});