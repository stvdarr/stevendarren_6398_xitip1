const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan string: ", (str) => {
    const length = (str) => {
        return `Panjang string: ${str.length} karakter`;
    }
    console.log(length(str));
    rl.close();
});


