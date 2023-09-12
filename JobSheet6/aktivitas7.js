const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan nama buku yang dipinjam: ", (namaBuku) => {
    let inisial = namaBuku.toUpperCase().charAt(0);
    if(!(inisial == "A" || inisial == "C" || inisial == "D" || inisial == "S")) {
        console.log(`Buku "${namaBuku}" dapat dipinjam`);
    } else {
        console.log(`Buku "${namaBuku}" sedang habis`);
    }
    rl.close();
});