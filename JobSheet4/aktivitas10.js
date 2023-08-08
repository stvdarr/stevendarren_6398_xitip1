const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Apa makanan favoritmu: ", (makanan) => {
    const kalimat1 = "Makanan favorite saya adalah ";
    console.log(kalimat1.concat(makanan));
    rl.close;
});

