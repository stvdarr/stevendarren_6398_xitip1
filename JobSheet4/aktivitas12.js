const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan nama: ", (nama) => {
    const kalimat1 = "Welcome ";
    console.log(kalimat1.concat(nama));
    rl.close;
});

