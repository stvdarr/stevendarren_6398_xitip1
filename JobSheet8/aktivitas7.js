const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan string: ", (str1) => {
    rl.question("Masukkan string: ", (str2) => {
    const gabung = (a, b) => {
        return a.concat(b);
    }
    console.log(gabung(str1, str2));
    rl.close();
});
});