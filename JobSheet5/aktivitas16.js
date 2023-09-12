const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah angka:", (angka1) => {
    rl.question("Masukkan sebuah angka:", (angka2) => {
        if(angka1 === angka2) {
            console.log(`${angka1} sama dengan ${angka2}`);
        } else {
            console.log(`${angka1} tidak sama dengan ${angka2}`);
        }
        rl.close();
    });
});