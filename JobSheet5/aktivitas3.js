const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat berisi angka: ", (str) => { 
    let int = parseInt(str);
    console.log(typeof int);
    rl.close();
});

if(true) {
    console.log("TRUE");
}