const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan angka: ", (num) => {
    const genapGanjil = (a) => {
        return a % 2 == 0 ? true : false;
    }
    console.log(genapGanjil(num));
    rl.close();
});