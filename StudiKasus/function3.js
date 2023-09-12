const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

let fitur = ['Tambah Produk', 'Hapus Produk', 'Lihat Produk', 'Update Harga Produk', 'Lacak Stok', 'Hitung Pendapatan', 'Selamat Tinggal'];
let produk = [['Buku', 5000, 50, 100], ['Pensil', 2000, 75, 60], ['Pulpen', 3000, 90, 125], ['Penggaris', 4000, 35, 55], ['Penghapus', 1000, 45, 40]];
let finish = false;

const tambahProduk = () => {
    rl.question('Masukkan nama produk yang ditambahkan: ', (produkBaru) => {
        if(produkBaru.length != 0) {
            rl.question('Masukkan harga produk yang ditambahkan: ', (hargaBaru) => {
            hargaBaru = Number(hargaBaru);
            if(!isNaN(hargaBaru)) {
                rl.question('Masukkan stok produk yang ditambahkan: ', (stokBaru) => {
                    stokBaru = Number(stokBaru);
                    if(!isNaN(stokBaru)) {
                        produk.push([produkBaru, hargaBaru, stokBaru, 0]);
                        console.log('Produk Berhasil Ditambahkan!');
                        rl.question('Apakah ada produk lain yang ingin ditambah(ya/tidak): ', (lanjut) => {
                            if(lanjut.toLowerCase() == 'ya') {
                                console.log('\n');
                                tambahProduk();
                            } else if(lanjut.toLowerCase() == 'tidak') {
                                console.log('Kembali Ke Menu Utama...');
                                console.log('\n');
                                programManajemenInventaris();
                            } else {
                                console.log('Aksi Tidak Valid!');
                                console.log('\n');
                                programManajemenInventaris();
                            }
                        });
                    } else {
                        console.log('Stok Tidak Valid!');
                        console.log('\n');
                        tambahProduk();
                    }
                });
            } else {
                console.log('Harga Tidak Valid!');
                console.log('\n');
                tambahProduk();
            }
            });
        } else {
            console.log('Nama Produk Tidak Valid!');
            console.log('\n');
            tambahProduk();
        }
        
    });
}

const hapusProduk = () => {
    for (let i = 0; i < produk.length; i++) {
        console.log(`${i + 1}. ${produk[i][0]}`);
    }
    rl.question('Masukkan nomor produk yang dihapus: ', (indexProduk) => {
        if(indexProduk.length != 0 && indexProduk <= produk.length) {
            produk.splice(indexProduk - 1, 1);
            console.log('Produk Berhasil Dihapus!');
            rl.question('Apakah ada produk lain yang ingin ditambah(ya/tidak): ', (lanjut) => {
                if(lanjut.toLowerCase() == 'ya') {
                    console.log('\n');
                    hapusProduk();
                } else if(lanjut.toLowerCase() === 'tidak') {
                    console.log('Kembali Ke Menu Utama...');
                    console.log('\n');
                    programManajemenInventaris();
                } else {
                    console.log('Aksi Tidak Valid!');
                    console.log('\n');
                    programManajemenInventaris();
                }
            });
        } else {
            console.log('Nomor Produk Tidak Valid!');
            console.log('\n');
            hapusProduk();
        }
        
    });
}

const lihatProduk = () => {
    console.log('List Produk:');
    for (let i = 0; i < produk.length; i++) {
        console.log(`${i + 1}. ${produk[i][0]}: Rp${produk[i][1]}`);
    }
    rl.question('Masukkan apapun untuk kembali: ', () => {
        console.log('\n');
        programManajemenInventaris();
    });
}

const updateHarga = () => {
    console.log('List Produk:');
    for (let i = 0; i < produk.length; i++) {
        console.log(`${i + 1}. ${produk[i][0]}: Rp${produk[i][1]}`);
    }
    rl.question('Masukkan nama produk yang diperbarui harganya: ', (produkTarget) => {
        let found;
        let indexProduk;
        for(let i = 0; i < produk.length; i++) {
            produk[i][0] == produkTarget ? (found = true, indexProduk = i) : null;
        }
        if(found) {
            rl.question('Masukkan harga produk baru: ', (hargaBaru) => {
                hargaBaru = Number(hargaBaru);
                if(!isNaN(hargaBaru)) {
                    produk[indexProduk][1] = hargaBaru;
                    console.log('Harga Produk Berhasil Diperbarui!');
                    console.log('\n');
                    rl.question('Apakah ada produk lain yang ingin diperbarui(ya/tidak): ', (lanjut) => {
                        if(lanjut.toLowerCase() == 'ya') {
                            console.log('\n');
                            updateHarga();
                        } else if(lanjut.toLowerCase() == 'tidak') {
                            console.log('Kembali Ke Menu Utama...');
                            console.log('\n');
                            programManajemenInventaris();
                        } else {
                            console.log('Aksi Tidak Valid!');
                            console.log('\n');
                            programManajemenInventaris();
                        }
                    });
                } else {
                    console.log('Harga Tidak Valid!');
                    console.log('\n');
                    updateHarga();
                }
            })
        } else {
            console.log('Produk Tidak Ditemukan!');
            console.log('\n');
            updateHarga();
        }
    })
}

const lacakStok = () => {
    console.log('Stok Produk:');
    for (let i = 0; i < produk.length; i++) {
        console.log(`${i + 1}. ${produk[i][0]}: ${produk[i][2]} buah`);
    }
    rl.question('Masukkan apapun untuk kembali: ', () => {
        console.log('\n');
        programManajemenInventaris();
    });
}

const hitungTotal = () => {
    let total = 0;
    console.log('Penjualan Produk:');
    for (let i = 0; i < produk.length; i++) {
        total += produk[i][1] * produk[i][3];
        console.log(`${i + 1}. ${produk[i][0]}: ${produk[i][3]} buah`);
    }
    console.log(`Total Pendapatan: Rp${total}`);
    rl.question('Masukkan apapun untuk kembali: ', () => {
        console.log('\n');
        programManajemenInventaris();
    });
}

const programManajemenInventaris = () => {
    if(finish) {
        console.log('Terima Kasih, Semoga Harimu Menyenangkan!');
        rl.close();
        return;
    }

    for (let i = 0; i < fitur.length; i++) {
        console.log(`${i + 1}. ${fitur[i]}`);
    }

    rl.question("Selamat Datang Di Inventaris Toko, Pilih Nomor Fitur: ", (pilihFitur) => {
        switch(pilihFitur) {
            case '1':
                tambahProduk();
                break;
            case '2':
                hapusProduk();
                break;
            case '3':
                lihatProduk();
                break;
            case '4':
                updateHarga();
                break;
            case '5':
                lacakStok();
                break;
            case '6':
                hitungTotal();
                break;
            case '7':
                finish = true;
                programManajemenInventaris();
                break;
            default:
                console.log('Fitur tidak valid!');
                programManajemenInventaris();
                break;
        }
    });
}

programManajemenInventaris();