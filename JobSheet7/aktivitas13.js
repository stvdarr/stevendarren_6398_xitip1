const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

var belanja = {};
let i = 0;

rl.question("Masukkan jumlah item yang dibeli: ", (jumlahItem) => {
    let inputItem = () => {
        rl.question("Masukkan nama item: ", (namaItem) => {
            rl.question("Masukkan harga item: ", (hargaItem) => {
                rl.question(`Masukkan jumlah ${namaItem}: `, (totalItem) => {
                    // hargaItem = Number(hargaItem); 
                    // totalItem = Number(totalItem); 
                    let totalhargaItem = hargaItem * totalItem;
                    belanja[namaItem] = totalhargaItem;
                    i++;
                    if(i < jumlahItem) {
                        inputItem();
                    } else {
                        let arrItem = [];
                        let totalHarga = 0;
                        for(let [namaItem, totalHargaItem] of Object.entries(belanja)) {
                            arrItem.push(namaItem);
                            totalHarga += totalHargaItem;
                        }
                        console.log(`Total belanja ${arrItem.join(', ')}: ${totalHarga}`);
                        if(totalHarga > 500000) {
                            totalHarga *= 0.9;
                            console.log('Anda mendapatkan diskon!');
                            console.log(`Total belanja menjadi: ${totalHarga}`);
                        } else {
                            console.log('Anda tidak mendapatkan diskon!');
                        }
                        rl.close();
                    };
                });
            });
        });
    };
    inputItem();
});

