const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan nilai rapor: ", (nilai) => {
    if(nilai > 75) {
        console.log('Anda berhak mendapatkan beasiswa');
    } else {
        console.log('Anda tidak bisa mendapatkan beasiswa');  
    }
    rl.close();
});

