const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

var barang = {
    beras: 300,
    telur: 20,
    susu: 50
};
let i = 0;

rl.question("Masukkan jumlah jenis barang yang ingin ditambah ke stok: ", (jumlahJenis) => {
    let inputBarang = () => {
        rl.question("Masukkan nama barang: ", (namaBarang) => {
            rl.question("Masukkan jumlah barang yang di tambahkan: ", (jumlahBarang) => {
                jumlahBarang = Number(jumlahBarang);
                namaBarang in Object.entries(barang) ? 
                barang[namaBarang] += jumlahBarang : 
                barang[namaBarang] = jumlahBarang;
                i++;
                if(i < jumlahJenis) {
                    inputBarang();
                } else {
                    let totalNama = [];
                    let totalBarang = 0;
                    for(let [key, value] of Object.entries(barang)) {
                        totalNama.push(key);
                        totalBarang += value;
                    }
                    console.log(barang);
                    console.log(`Total stok ${totalNama.join(', ')}: ${totalBarang}`);
                    rl.close();
                };
            });
        });
    };
    inputBarang();
});

