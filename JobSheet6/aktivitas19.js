const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan jumlah kehadiran: ", (presensi) => {
    presensi > 20 ? console.log("Hadir") : console.log("Tidak Hadir");
    rl.close();
});