const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan angka positif: ", (angka) => {
    const functionPrima = (a) => {
        let prima = false;
        for(let i = 2; i <= a; i++){
            if(a % i == 0 && a != i) {
                prima = false;
                break
            } else {
                prima = true;
            }
        }
        return prima;
    }
    console.log(functionPrima(angka));
    rl.close();
});