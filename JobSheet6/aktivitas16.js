const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan panjang sisi 1:", (sisi1) => {
    rl.question("Masukkan panjang sisi 2:", (sisi2) => {
        rl.question("Masukkan panjang sisi 3:", (sisi3) => {
            switch(true) {
                case sisi1 == sisi2 && sisi1 == sisi3:
                    console.log('Segitiga Sama Sisi');
                    break;
                case sisi1 == sisi2 || sisi1 == sisi3 || sisi2 == sisi3:
                    console.log('Segitiga Sama Kaki');
                    break;
                case sisi1 != sisi2 && sisi1 != sisi3 && sisi2 != sisi3:
                    console.log('Segitiga Sembarang');
                    break;
            }
            rl.close();
        });
    });
});