const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan total belanja:", (total) => {
    if (total >= 100000) {
        total *= (100-10)/100;
        console.log('Anda mendapat diskon sebesar 10%');
        console.log(`Harga yang harus dibayar: Rp${total}`);
    } else {
        console.log(`Harga yang harus dibayar: Rp${total}`);
    }
    rl.close();
});     