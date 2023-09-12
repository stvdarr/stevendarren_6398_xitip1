const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan nilai kinerja karyawan: ", (nilai) => {
    let bonus = 0;
    if(nilai > 80) {
        bonus += 0.03;
    }
    if(nilai > 90) {
        bonus += 0.02;
    }
    if(bonus != 0) {
        console.log(`Mendapat bonus sebesar ${bonus * 100}%`);
    } else {
        console.log('Tidak mendapatkan bonus')
    }
    rl.close();
});

