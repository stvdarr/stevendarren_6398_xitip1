const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan sebuah angka: ", (angka) => {
    let prima = true;
    if(angka < 2) {
        prima = false;
    }
    if(angka % 2 == 0 && angka > 2) {
            prima = false;
    }
    if(angka % (3 || 5 || 7 || 11 || 13 || 17 || 19 || 23 || 29 || 31 || 37 || 41 || 43 || 47) == 0) {
            prima = false;
    }
    if(prima == true) {
        console.log("Angka Prima");
    }
    if(prima == false) {
        console.log("Angka Bukan Prima");
    }
    rl.close();
});