const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan angka positif: ", (angka) => {
    for(let i = 2; i < angka; i++) {
        let prima = false;
        for(let j = 2; j <= i; j++) {
            if(i % j == 0 && j != i) {
                prima = true;
            }
        }
        if(prima == false) {
            console.log(i);
        }
    }
    rl.close();
});