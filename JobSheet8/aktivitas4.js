const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan string: ", (str) => {
    const upperCase = (a) => {
        return a.toUpperCase();
    }
    console.log(upperCase(str));
    rl.close();
});