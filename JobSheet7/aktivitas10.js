const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

var menu = {};
let i = 0;

rl.question("Masukkan jumlah menu yang dipesan: ", (jumlahMenu) => {
    let inputMenu = () => {
        rl.question("Masukkan nama menu: ", (namaMenu) => {
            rl.question("Masukkan harga menu: ", (hargaMenu) => {
                hargaMenu = Number(hargaMenu);
                menu[namaMenu] = hargaMenu;
                i++;
                if(i < jumlahMenu) {
                    inputMenu();
                } else {
                    let totalMenu = [];
                    let totalHarga = 0;
                    for(let [namaMenu, hargaMenu] of Object.entries(menu)) {
                        totalMenu.push(namaMenu);
                        totalHarga += hargaMenu;
                    }
                    console.log(`Total biaya untuk ${totalMenu.join(', ')}: Rp${totalHarga}`);
                    rl.close();
                };
            });
        });
    };
    inputMenu();
});

