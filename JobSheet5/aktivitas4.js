const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat berisi angka desimal: ", (str) => { 
    let flt = parseInt(str);
    console.log(typeof flt);
    rl.close();
});