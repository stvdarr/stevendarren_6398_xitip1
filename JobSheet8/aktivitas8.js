const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

let fitur = ['Tambah Produk', 'Hapus Produk', 'Cari Produk', 'Lacak Stok', 'Selamat Tinggal'];
const kategori = {
  Makanan: [
    ["Makanan Ringan", 100],
    ["Produk Daging", 75],
    ["Minuman Kaleng", 50]
  ],
  Elektronik: [
    ["Televisi LED", 20],
    ["Kamera DSLR", 15],
    ["Laptop Gaming", 10]
  ],
  Pakaian: [
    ["Kemeja Formal", 30],
    ["Celana Denim", 25],
    ["Jaket Kulit", 40]
  ],
  Obat: [
    ["Antibiotik", 80],
    ["Vitamin C", 100],
    ["Obat Demam", 40]
  ]
};
let finish = false;
let arrKategori = Object.entries(kategori);

const tambahProduk = () => {
    for (let i = 0; i < arrKategori.length; i++) {
        console.log(`${i + 1}. ${arrKategori[i][0]}`);
    }
    rl.question('Masukkan kategori produk yang ditambahkan: ', (kategoriProduk) => {
        let found;
        let indexKategoriSama;
        for(let i = 0; i < arrKategori.length; i++) {
            arrKategori[i][0].toLowerCase() == kategoriProduk.toLowerCase() ? (found = true, indexKategoriSama = i) : null;
        }
        if(found) {
            rl.question('Masukkan nama produk yang ditambahkan: ', (produkBaru) => {
                if(produkBaru.length != 0) {
                    let found;
                    for(let i = 0; i < arrKategori[indexKategoriSama][1].length; i++) {
                        arrKategori[indexKategoriSama][1][i][0] == produkBaru ? found = true : null;
                    }
                    if(!found) {
                        rl.question('Masukkan stok produk yang ditambahkan: ', (stokBaru) => {
                            stokBaru = Number(stokBaru);
                            if(!isNaN(stokBaru)) {
                                arrKategori[indexKategoriSama][1].push([produkBaru, stokBaru]);
                                console.log('Produk Berhasil Ditambahkan!');
                                rl.question('Apakah ada produk lain yang ingin ditambah(ya/tidak): ', (lanjut) => {
                                    if(lanjut.toLowerCase() == 'ya') {
                                        console.log('\n');
                                        tambahProduk();
                                    } else if(lanjut.toLowerCase() == 'tidak') {
                                        console.log('Kembali Ke Menu Utama...');
                                        console.log('\n');
                                        programGudang();
                                    } else {
                                        console.log('Aksi Tidak Valid!');
                                        console.log('\n');
                                        programGudang();
                                    }
                                });
                            } else {
                                console.log('Stok Tidak Valid!');
                                console.log('\n');
                                tambahProduk();
                            }
                        });
                    } else {
                        console.log('Produk Sudah Ada!');
                        console.log('\n');
                        tambahProduk();
                    }
                } else {
                    console.log('Nama Produk Tidak Valid!');
                    console.log('\n');
                    tambahProduk();
                }
            });
        } else {
            console.log('Kategori Tidak Tersedia!');
            console.log('\n');
            programGudang();
        }
        
    });
}

const hapusProduk = () => {
    for (let i = 0; i < arrKategori.length; i++) {
        console.log(`${i + 1}. ${arrKategori[i][0]}`);
    }
    rl.question('Masukkan kategori dari produk yang dihapus: ', (kategoriProduk) => {
        let found;
        let indexKategoriSama;
        for(let i = 0; i < arrKategori.length; i++) {
            arrKategori[i][0].toLowerCase() == kategoriProduk.toLowerCase() ? (found = true, indexKategoriSama = i) : null;
        }
        if(found) {
            for(let i = 0; i < arrKategori[indexKategoriSama][1].length; i++) {
                console.log(`${i + 1}. ${arrKategori[indexKategoriSama][1][i][0]}`);
            }
            rl.question('Masukkan nomor produk yang dihapus: ', (indexProduk) => {
                indexProduk = Number(indexProduk);
                if(indexProduk.length != 0 && indexProduk <= arrKategori[indexKategoriSama][1].length) {
                    arrKategori[indexKategoriSama][1].splice(indexProduk - 1, 1); 
                    console.log('Produk Berhasil Dihapus!');
                    rl.question('Apakah ada produk lain yang ingin dihapus(ya/tidak): ', (lanjut) => {
                        if(lanjut.toLowerCase() == 'ya') {
                            console.log('\n');
                            hapusProduk();
                        } else if(lanjut.toLowerCase() == 'tidak') {
                            console.log('Kembali Ke Menu Utama...');
                            console.log('\n');
                            programGudang();
                        } else {
                            console.log('Aksi Tidak Valid!');
                            console.log('\n');
                            programGudang();
                        }
                    });
                } else {
                    console.log('Nomor Produk Tidak Valid!');
                    console.log('\n');
                    hapusProduk();
                }
            });
        } else {
            console.log('Kategori Tidak Tersedia!');
            console.log('\n');
            programGudang();
        }
    }); 
}

const cariProduk = () => {
    for (let i = 0; i < arrKategori.length; i++) {
        console.log(`${i + 1}. ${arrKategori[i][0]}`);
    }
    rl.question('Masukkan kategori produk yang dicari: ', (kategoriProduk) => {
        let found;
        let indexKategoriSama;
        for(let i = 0; i < arrKategori.length; i++) {
            arrKategori[i][0].toLowerCase() == kategoriProduk.toLowerCase() ? (found = true, indexKategoriSama = i) : null;
        }
        if(found) {
            console.log('Daftar Produk:');
            for(let i = 0; i < arrKategori[indexKategoriSama][1].length; i++) {
                console.log(`${i + 1}. ${arrKategori[indexKategoriSama][1][i][0]}`);
            }
            rl.question('Masukkan apapun untuk kembali: ', () => {
                console.log('\n');
                programGudang();
            });
        } else {
            console.log('Kategori Tidak Tersedia!');
            console.log('\n');
            programGudang();
        }
    });
}

const lacakStok = () => {
    for (let i = 0; i < arrKategori.length; i++) {
        console.log(`${i + 1}. ${arrKategori[i][0]}`);
    }
    rl.question('Masukkan kategori produk yang dilacak: ', (kategoriProduk) => {
        let found;
        let indexKategoriSama;
        for(let i = 0; i < arrKategori.length; i++) {
            arrKategori[i][0].toLowerCase() == kategoriProduk.toLowerCase() ? (found = true, indexKategoriSama = i) : null;
        }
        if(found) {
            console.log('Stok Produk:');
            for(let i = 0; i < arrKategori[indexKategoriSama][1].length; i++) {
                console.log(`${i + 1}. ${arrKategori[indexKategoriSama][1][i][0]}: ${arrKategori[indexKategoriSama][1][i][1]}`);
            }
            rl.question('Masukkan apapun untuk kembali: ', () => {
                console.log('\n');
                programGudang();
            });
        } else {
            console.log('Kategori Tidak Tersedia!');
            console.log('\n');
            programGudang();
        }
    });
}

const programGudang = () => {
    if(finish) {
        console.log('Terima Kasih, Semoga Harimu Menyenangkan!');
        rl.close();
        return;
    }

    for (let i = 0; i < fitur.length; i++) {
        console.log(`${i + 1}. ${fitur[i]}`);
    }

    rl.question("Selamat Datang Di Gudang, Pilih Nomor Fitur: ", (pilihFitur) => {
        switch(pilihFitur) {
            case '1':
                tambahProduk();
                break;
            case '2':
                hapusProduk();
                break;
            case '3':
                cariProduk();
                break;
            case '4':
                lacakStok();
                break;
            case '5':
                finish = true;
                programGudang();
                break;
            default:
                console.log('Fitur tidak valid!');
                programGudang();
                break;
        }
    });
}

programGudang();