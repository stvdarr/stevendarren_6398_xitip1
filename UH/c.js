const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let produk = [
    {id: 1, nama: 'TV', harga: 5000000, stok: 50},
    {id: 2, nama: 'Kulkas', harga: 4000000, stok: 40},
    {id: 3, nama: 'Microwave', harga: 1500000, stok: 30},
    {id: 4, nama: 'Mesin Cuci', harga: 3000000, stok: 35}
];
let riwayatPenjualan = [];

const lihatProduk = () => {
    console.log('Daftar Produk:');
    produk.forEach((prod) => {
        console.log(`${prod.id}. ${prod.nama} - Harga: Rp${prod.harga}`);
    });
    rl.question('Masukkan apapun untuk kembali: ', () => {
        mainMenu();
    });
}

const tambahProduk = () => {
    rl.question('Masukkan nama produk yang ingin ditambah: ', (namaBaru) => {
        rl.question('Masukkan harga produk yang ingin ditambah: ', (hargaBaru) => {
            rl.question('Masukkan stok produk yang ingin ditambah: ', (stokBaru) => {
                produk.push({id: produk.length + 1, nama: namaBaru, harga: hargaBaru, stok: stokBaru})
                console.log('Produk Berhasil Ditambahkan!');
                produk.forEach((prod) => {
                    console.log(`${prod.id}. ${prod.nama}`);
                });
                rl.question('Apakah ada produk lain yang ingin ditambah (y/n): ', (lanjut) => {
                    if(lanjut.toLowerCase == 'y') {
                        tambahProduk();
                    } else {
                        mainMenu();
                    }
                });
            });
        });
    });
}

const hapusProduk = () => {
    produk.forEach((prod) => {
        console.log(`${prod.id}. ${prod.nama} - Harga: Rp${prod.harga}`);
    });
    rl.question('Masukkan ID produk yang ingin dihapus: ', (idProduk) => {
        produkHapus = produk.find(prod => prod.id == idProduk);
        if (produkHapus) {
            produk.splice(idProduk - 1, 1);
            console.log('Produk Berhasil Dihapus!');
        } else {
            console.log('Produk Tidak Ditemukan!');
        }
        produk.forEach((prod) => {
            console.log(`${prod.id}. ${prod.nama} - Harga: Rp${prod.harga}`);
        });
        rl.question('Apakah ada produk lain yang ingin dihapus (y/n): ', (lanjut) => {
            if (lanjut.toLowerCase() == 'y') {
                hapusProduk();
            }else{
                mainMenu();
            }
        });
    });
}

const terimaPesanan = () => {
    produk.forEach((prod) => {
        console.log(`${prod.id}. ${prod.nama}`);
    });
    rl.question('Masukkan nama produk yang ingin dipesan: ', (produkPesanan) => {
        produkPesanan = produk.find(prod => prod.nama.toLowerCase() == produkPesanan.toLowerCase());
        if(produkPesanan) {
            rl.question('Masukkan jumlah produk yang ingin dipesan: ', (jumlahPesanan) => {
                if(jumlahPesanan <= produkPesanan.stok) {
                    jumlahPesanan = parseInt(jumlahPesanan);
                    produk[produkPesanan.id - 1].stok -= jumlahPesanan;
                    riwayatPenjualan.push({id: riwayatPenjualan.length + 1, nama: produkPesanan.nama, harga: produkPesanan.harga, jumlah: jumlahPesanan});
                    console.log('Produk Berhasil Ditambah Ke Pesanan!');
                    riwayatPenjualan.forEach((pesanan) => {
                        console.log(`${pesanan.id}. ${pesanan.nama} - Jumlah: ${pesanan.jumlah} buah`);
                    });
                    rl.question('Apakah ada produk lain yang ingin dipesan (y/n): ', (lanjut) => {
                        if (lanjut.toLowerCase() == 'y') {
                            terimaPesanan();
                        }else{
                            mainMenu();
                        }
                    });
                } else {
                    console.log('Pesanan Melebihi Stok!');
                }
                mainMenu();
            });
        } else {
            console.log('Produk Tidak Ditemukan!');
            mainMenu();
        }
    });
}

const hitungTotal = () => {
    let totalPenjualan = 0;
    for(pesanan in riwayatPenjualan) {
        totalPenjualan += riwayatPenjualan[pesanan].harga * riwayatPenjualan[pesanan].jumlah;
    }
    console.log(`Total Penjualan: Rp${totalPenjualan}`);
    rl.question('Masukkan apapun untuk kembali: ', () => {
        mainMenu();
    });
}

const ubahHarga = () => {
    produk.forEach((prod) => {
        console.log(`${prod.id}. ${prod.nama}`);
    });
    rl.question('Masukkan nama produk yang ingin diubah: ', (produkUpdate) => {
        produkUpdate = produk.find(prod => prod.nama.toLowerCase() == produkUpdate.toLowerCase());
        if (produkUpdate) {
            rl.question('Masukkan harga produk yang baru: ', (hargaUpdate) => {
                hargaUpdate = parseInt(hargaUpdate);
                produk[produkUpdate.id - 1].harga = hargaUpdate;
                riwayatPenjualan.forEach(pesanan => {
                    if (pesanan.nama == produkUpdate.nama) {
                        pesanan.harga = hargaUpdate;
                    }
                });
                console.log('Produk Berhasil Diperbarui!');
                rl.question('Apakah ada produk lain yang ingin diperbarui (y/n): ', (lanjut) => {
                    if(lanjut.toLowerCase == 'y') {
                        ubahHarga();
                    } else {
                        mainMenu();
                    }
                });
            });
        } else {
            console.log('Produk Tidak Ditemukan!');
            mainMenu();
        }
    });
}

const pantauStok = () => {
    console.log('Stok Produk:');
    produk.forEach((prod) => {
        console.log(`${prod.id}. ${prod.nama}: ${prod.stok} buah`);
    });
    rl.question('Masukkan apapun untuk kembali: ', () => {
        mainMenu();
    });
}

const tampilkanRiwayat = () => {
    console.log('Riwayat Penjualan:');
    riwayatPenjualan.forEach((pesanan) => {
        console.log(`${pesanan.id}. ${pesanan.nama}: ${pesanan.jumlah} buah`);
    });
    rl.question('Masukkan apapun untuk kembali: ', () => {
        mainMenu();
    });
}

const tutupBill = () => {
    console.log("Bill saat ini:");
    riwayatPenjualan.forEach((pesanan) => {
        console.log(`${pesanan.id}. ${pesanan.nama}: ${pesanan.jumlah} buah`);
    });
    let totalPenjualan = 0;
    for(pesanan in riwayatPenjualan) {
        totalPenjualan += riwayatPenjualan[pesanan].harga * riwayatPenjualan[pesanan].jumlah;
    }
    console.log(`Total Penjualan: Rp${totalPenjualan}`);
    riwayatPenjualan.length = 0;
    console.log("Bill telah ditutup. Silakan buat bill pesanan baru.");
    mainMenu();
}

const mainMenu = () => {
    console.log('\nSelamat Datang Di Manajemen Toko Elektronik!');
    console.log('\n1. Lihat Produk\n2. Tambah Produk\n3. Hapus Produk\n4. Terima Pesanan\n5. Hitung Total Penjualan\n6. Ubah Harga Produk\n7. Pantau Stok\n8. Tampilkan Riwayat Penjualan\n9. Tutup Bill\n10. Keluar');
    rl.question('Pilih Nomor Fitur: ', (fitur) => {
        switch(fitur) {
            case '1':
                lihatProduk();
                break;
            case '2':
                tambahProduk();
                break;
            case '3':
                hapusProduk();
                break;
            case '4':
                terimaPesanan();
                break;
            case '5':
                hitungTotal();
                break;
            case '6':
                ubahHarga();
                break;
            case '7':
                pantauStok();
                break;
            case '8':
                tampilkanRiwayat();
                break;
            case '9':
                tutupBill();
                break;
            case '10':
                console.log('Selamat Tinggal!');
                rl.close();
                break;
            default:
                console.log('Fitur Tidak Valid!');
                mainMenu();
                break;
        }
    });
}
mainMenu();