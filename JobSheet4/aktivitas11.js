const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Apa warna favoritmu: ", (warna) => {
    const kalimat1 = "Saya sangat suka sekali warna ";
    console.log(kalimat1.concat(warna));
    rl.close;
});

