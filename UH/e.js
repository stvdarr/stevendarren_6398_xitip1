const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let menu = [
    { id: 1, nama: 'Kopi Hitam', harga: 15000, stok: 50 },
    { id: 2, nama: 'Cappuccino', harga: 25000, stok: 40 },
    { id: 3, nama: 'Roti Bakar', harga: 10000, stok: 30 },
    { id: 4, nama: 'Mie Goreng', harga: 15000, stok: 35 }
];
let riwayatPesanan = [];

const lihatMenu = () => {
    console.log('Daftar Menu:');
    menu.forEach((prod) => {
        console.log(`${prod.id}. ${prod.nama} - Harga: Rp${prod.harga}`);
    });
    rl.question('Masukkan apapun untuk kembali: ', () => {
        mainMenu();
    });
}

const tambahMenu = () => {
    rl.question('Masukkan nama menu yang ingin ditambah: ', (namaBaru) => {
        rl.question('Masukkan harga menu yang ingin ditambah: ', (hargaBaru) => {
            rl.question('Masukkan stok menu yang ingin ditambah: ', (stokBaru) => {
                hargaBaru = parseInt(hargaBaru);
                stokBaru = parseInt(stokBaru);
                menu.push({id: menu.length + 1, nama: namaBaru, harga: hargaBaru, stok: stokBaru});
                console.log('Menu Berhasil Ditambahkan!');
                menu.forEach((prod) => {
                    console.log(`${prod.id}. ${prod.nama}`);
                });
                rl.question('Apakah ada menu lain yang ingin ditambah (y/n): ', (lanjut) => {
                    if(lanjut.toLowerCase == 'y') {
                        tambahMenu();
                    } else {
                        mainMenu();
                    }
                });
            });
        });
    });
}

const hapusMenu = () => {
    menu.forEach((prod) => {
        console.log(`${prod.id}. ${prod.nama} - Harga: Rp${prod.harga}`);
    });
    rl.question('Masukkan ID menu yang ingin dihapus: ', (idProduk) => {
        produkHapus = menu.find(prod => prod.id == idProduk);
        produkPesananHapus = riwayatPesanan.find(prod => prod.nama == produkHapus.nama);
        if (produkHapus) {
            menu.splice(idProduk - 1, 1);
            if(produkPesananHapus) {
                riwayatPesanan.splice(produkPesananHapus.id - 1, 1);
            }
            console.log('Menu Berhasil Dihapus!');
        } else {
            console.log('Menu Tidak Ditemukan!');
        }
        menu.forEach((prod) => {
            console.log(`${prod.id}. ${prod.nama} - Harga: Rp${prod.harga}`);
        });
        rl.question('Apakah ada menu lain yang ingin dihapus (y/n): ', (lanjut) => {
            if (lanjut.toLowerCase() == 'y') {
                hapusMenu();
            }else{
                mainMenu();
            }
        });
    });
}

const catatPesanan = () => {
    menu.forEach((prod) => {
        console.log(`${prod.id}. ${prod.nama}`);
    });
    rl.question('Masukkan nama menu yang ingin dipesan: ', (produkPesanan) => {
        produkPesanan = menu.find(prod => prod.nama.toLowerCase() == produkPesanan.toLowerCase());
        if(produkPesanan) {
            rl.question('Masukkan jumlah menu yang ingin dipesan: ', (jumlahPesanan) => {
                if(jumlahPesanan <= produkPesanan.stok) {
                    jumlahPesanan = parseInt(jumlahPesanan);
                    menu[produkPesanan.id - 1].stok -= jumlahPesanan;
                    riwayatPesanan.push({id: riwayatPesanan.length + 1, nama: produkPesanan.nama, harga: produkPesanan.harga, jumlah: jumlahPesanan});
                    console.log('Menu Berhasil Ditambah Ke Pesanan!');
                    riwayatPesanan.forEach((pesanan) => {
                        console.log(`${pesanan.id}. ${pesanan.nama} - Jumlah: ${pesanan.jumlah} buah`);
                    });
                    rl.question('Apakah ada menu lain yang ingin dipesan (y/n): ', (lanjut) => {
                        if(lanjut.toLowerCase() == 'y') {
                            catatPesanan();
                        } else {
                            mainMenu();
                        }
                    });
                } else {
                    console.log('Pesanan Melebihi Stok!');
                }
                mainMenu();
            });
        } else {
            console.log('Menu Tidak Ditemukan!');
            mainMenu();
        }
    });
}

const hitungTotal = () => {
    let totalPembayaran = 0;
    for(pesanan in riwayatPesanan) {
        totalPembayaran += riwayatPesanan[pesanan].harga * riwayatPesanan[pesanan].jumlah;
    }
    console.log(`Total Pembayaran: Rp${totalPembayaran}`);
    rl.question('Masukkan apapun untuk kembali: ', () => {
        mainMenu();
    });
}

const ubahHarga = () => {
    menu.forEach((prod) => {
        console.log(`${prod.id}. ${prod.nama}`);
    });
    rl.question('Masukkan nama menu yang ingin diubah: ', (produkUpdate) => {
        produkUpdate = menu.find(prod => prod.nama.toLowerCase() == produkUpdate.toLowerCase());
        if (produkUpdate) {
            rl.question('Masukkan harga menu yang baru: ', (hargaUpdate) => {
                hargaUpdate = parseInt(hargaUpdate);
                menu[produkUpdate.id - 1].harga = hargaUpdate;
                riwayatPesanan.forEach(pesanan => {
                    if (pesanan.nama == produkUpdate.nama) {
                        pesanan.harga = hargaUpdate;
                    }
                });
                console.log('Menu Berhasil Diperbarui!');
                rl.question('Apakah ada menu lain yang ingin diperbarui (y/n): ', (lanjut) => {
                    if(lanjut.toLowerCase == 'y') {
                        ubahHarga();
                    } else {
                        mainMenu();
                    }
                });
            });
        } else {
            console.log('Menu Tidak Ditemukan!');
            mainMenu();
        }
    });
}

const lacakStok = () => {
    console.log('Stok Menu:');
    menu.forEach((prod) => {
        console.log(`${prod.id}. ${prod.nama}: ${prod.stok} buah`);
    });
    rl.question('Masukkan apapun untuk kembali: ', () => {
        mainMenu();
    });
}

const tampilkanRiwayat = () => {
    console.log('Riwayat Pesanan:');
    riwayatPesanan.forEach((pesanan) => {
        console.log(`${pesanan.id}. ${pesanan.nama}: ${pesanan.jumlah} buah`);
    });
    rl.question('Masukkan apapun untuk kembali: ', () => {
        mainMenu();
    });
}

const tutupBill = () => {
    console.log("Bill saat ini:");
    riwayatPesanan.forEach((pesanan) => {
        console.log(`${pesanan.id}. ${pesanan.nama}: ${pesanan.jumlah} buah`);
    });
    let totalPembayaran = 0;
    for(pesanan in riwayatPesanan) {
        totalPembayaran += riwayatPesanan[pesanan].harga * riwayatPesanan[pesanan].jumlah;
    }
    console.log(`Total Pembayaran: Rp${totalPembayaran}`);
    riwayatPesanan.length = 0;
    console.log("Bill telah ditutup. Silakan buat bill pesanan baru.");
    mainMenu();
}

const mainMenu = () => {
    console.log('\nSelamat Datang Di Manajemen Warung Kopi!');
    console.log('\n1. Lihat Menu\n2. Tambah Menu\n3. Hapus Menu\n4. Terima Pesanan\n5. Hitung Total Pembayaran\n6. Ubah Harga Menu\n7. Lacak Stok\n8. Tampilkan Riwayat Pesanan\n9. Tutup Bill\n10. Keluar');
    rl.question('Pilih Nomor Fitur: ', (fitur) => {
        switch(fitur) {
            case '1':
                lihatMenu();
                break;
            case '2':
                tambahMenu();
                break;
            case '3':
                hapusMenu();
                break;
            case '4':
                catatPesanan();
                break;
            case '5':
                hitungTotal();
                break;
            case '6':
                ubahHarga();
                break;
            case '7':
                lacakStok();
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