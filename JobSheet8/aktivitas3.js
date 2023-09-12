const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

let fitur = ['Kelola Menu', 'Tambah Pesanan', 'Total Pembayaran', 'Update Harga Menu', 'Lacak Stok', 'Riwayat Pesanan', 'Selamat Tinggal'];
let menu = [['Ayam Goreng', 9000, 40], ['Ayam bakar', 10000, 35], ['Ayam panggang', 10000, 45], ['Ayam Gulai', 12000, 55], ['Ayam Balado', 11000, 65], ['Ayam Geprek', 13000, 50]];
let pesanan = [];
let finish = false;

const lihatMenu = () => {
    console.log('Daftar Menu:');
    for (let i = 0; i < menu.length; i++) {
        console.log(`${i + 1}. ${menu[i][0]}: Rp${menu[i][1]}`);
    }
    rl.question('Masukkan apapun untuk kembali: ', () => {
        console.log('\n');
        programResto();
    });
}

const tambahMenu = () => {
    rl.question('Masukkan nama menu yang ditambahkan: ', (menuBaru) => {
        if(menuBaru.length != 0) {
            let found;
            for(let i = 0; i < menu.length; i++) {
                menu[i][0] == menuBaru ? found = true : null;
            }
            if(!found) {
                rl.question('Masukkan harga menu yang ditambahkan: ', (hargaBaru) => {
                    hargaBaru = Number(hargaBaru);
                    if(!isNaN(hargaBaru)) {
                        rl.question('Masukkan stok bahan menu yang ditambahkan: ', (stokBaru) => {
                            stokBaru = Number(stokBaru);
                            if(!isNaN(stokBaru)) {
                                menu.push([menuBaru, hargaBaru, stokBaru]);
                                console.log('Menu Berhasil Ditambahkan!');
                                rl.question('Apakah ada menu lain yang ingin ditambah(ya/tidak): ', (lanjut) => {
                                    if(lanjut.toLowerCase() == 'ya') {
                                        console.log('\n');
                                        tambahMenu();
                                    } else if(lanjut.toLowerCase() == 'tidak') {
                                        console.log('Kembali Ke Menu Utama...');
                                        console.log('\n');
                                        programResto();
                                    } else {
                                        console.log('Aksi Tidak Valid!');
                                        console.log('\n');
                                        programResto();
                                    }
                                });
                            } else {
                                console.log('Stok Tidak Valid!');
                                console.log('\n');
                                tambahMenu();
                            }
                        });
                } else {
                    console.log('Harga Tidak Valid!');
                    console.log('\n');
                    tambahMenu();
                }
                });
            } else {
                console.log('Menu Sudah Ada!');
                console.log('\n');
                programResto();
            }
        } else {
            console.log('Nama Menu Tidak Valid!');
            console.log('\n');
            programResto();
        }
    });
}

const hapusMenu = () => {
    for (let i = 0; i < menu.length; i++) {
        console.log(`${i + 1}. ${menu[i][0]}`);
    }
    rl.question('Masukkan nomor menu yang dihapus: ', (indexMenu) => {
        if(indexMenu.length != 0 && indexMenu <= menu.length) {
            for(let i = 0; i < pesanan.length; i++) {
                pesanan[i][0] == menu[indexMenu - 1][0] ? pesanan.splice(indexMenu - 1, 1) : null;
            }
            menu.splice(indexMenu - 1, 1); 
            console.log('Menu Berhasil Dihapus!');
            rl.question('Apakah ada menu lain yang ingin dihapus(ya/tidak): ', (lanjut) => {
                if(lanjut.toLowerCase() == 'ya') {
                    console.log('\n');
                    hapusMenu();
                } else if(lanjut.toLowerCase() == 'tidak') {
                    console.log('Kembali Ke Menu Utama...');
                    console.log('\n');
                    programResto();
                } else {
                    console.log('Aksi Tidak Valid!');
                    console.log('\n');
                    programResto();
                }
            });
        } else {
            console.log('Nomor Menu Tidak Valid!');
            console.log('\n');
            programResto();
        }
        
    });
}

const tambahPesanan = () => {
    console.log('Daftar Menu:');
    for (let i = 0; i < menu.length; i++) {
        console.log(`${i + 1}. ${menu[i][0]}: Rp${menu[i][1]}`);
    }
    rl.question('Masukkan nomor menu yang ingin dipesan: ', (indexMenu) => {
        if(indexMenu.length != 0 && indexMenu <= menu.length) {
            rl.question('Masukkan banyak menu yang ingin dipesan: ', (jumlahMenu) => {
                let found;
                let indexMenuSama;
                if(pesanan.length > 0) {
                    for(let i = 0; i < pesanan.length; i++) {
                        pesanan[i][0] == menu[indexMenu - 1][0] ? (found = true, indexMenuSama = i) : null;
                    }
                }                
                jumlahMenu = Number(jumlahMenu);
                if(jumlahMenu <= menu[indexMenu - 1][2]) {
                    if(found) {
                        pesanan[indexMenuSama][3] += jumlahMenu;
                    } else {
                        pesanan.push(menu[indexMenu - 1].concat(jumlahMenu));
                    }
                    menu[indexMenu - 1][2] -= jumlahMenu;
                    console.log('Menu Berhasil Ditambah Ke Pesanan!');
                    rl.question('Apakah ada menu lain yang ingin ditambah(ya/tidak): ', (lanjut) => {
                        if(lanjut.toLowerCase() == 'ya') {
                            console.log('\n');
                            tambahPesanan();
                        } else if(lanjut.toLowerCase() == 'tidak') {
                            console.log('Kembali Ke Menu Utama...');
                            console.log('\n');
                            programResto();
                        } else {
                            console.log('Aksi Tidak Valid!');
                            console.log('\n');
                            programResto();
                        }
                    });
                } else if(jumlahMenu > menu[indexMenu][2]) {
                    console.log('Jumlah Menu Melebihi Stok Yang Tersedia!');
                    console.log('\n');
                    tambahPesanan();
                } else {
                    console.log('Jumlah Menu Tidak Valid!');
                    console.log('\n');
                    tambahPesanan();
                }
            });
        } else {
            console.log('Nomor Menu Tidak Valid!');
            console.log('\n');
            programResto();
        }
    });
}

const hitungTotal = () => {
    let total = 0;
    if(pesanan.length != 0) {
        console.log('Menu yang dipesan:');
        for (let i = 0; i < pesanan.length; i++) {
            total += pesanan[i][1] * pesanan[i][3];
            console.log(`${i + 1}. ${pesanan[i][0]}: ${pesanan[i][3]} buah`);
        }
        console.log(`Total Pembayaran: Rp${total}`);
        rl.question('Masukkan apapun untuk kembali: ', () => {
            console.log('\n');
            programResto();
        });
    } else {
        console.log('Belum Ada Menu Yang Dipesan!');
        console.log('\n');
        programResto();
    }
    
}

const updateHarga = () => {
    console.log('Daftar Menu:');
    for (let i = 0; i < menu.length; i++) {
        console.log(`${i + 1}. ${menu[i][0]}: Rp${menu[i][1]}`);
    }
    rl.question('Masukkan nama menu yang diperbarui harganya: ', (menuTarget) => {
        let found;
        let indexMenuSama;
        for(let i = 0; i < menu.length; i++) {
            menu[i][0] == menuTarget ? (found = true, indexMenuSama = i) : null;
        }
        if(found) {
            rl.question('Masukkan harga menu baru: ', (hargaBaru) => {
                hargaBaru = Number(hargaBaru);
                if(!isNaN(hargaBaru)) {
                    menu[indexMenuSama][1] = hargaBaru;
                    console.log('Harga Menu Berhasil Diperbarui!');
                    console.log('\n');
                    rl.question('Apakah ada menu lain yang ingin diperbarui(ya/tidak): ', (lanjut) => {
                        if(lanjut.toLowerCase() == 'ya') {
                            console.log('\n');
                            updateHarga();
                        } else if(lanjut.toLowerCase() == 'tidak') {
                            console.log('Kembali Ke Menu Utama...');
                            console.log('\n');
                            programResto();
                        } else {
                            console.log('Aksi Tidak Valid!');
                            console.log('\n');
                            programResto();
                        }
                    });
                } else {
                    console.log('Harga Tidak Valid!');
                    console.log('\n');
                    updateHarga();
                }
            })
        } else {
            console.log('Menu Tidak Ditemukan!');
            console.log('\n');
            programResto();
        }
    })
}

const lacakStok = () => {
    console.log('Stok Bahan Menu:');
    for (let i = 0; i < menu.length; i++) {
        console.log(`${i + 1}. ${menu[i][0]}: ${menu[i][2]} buah`);
    }
    rl.question('Masukkan apapun untuk kembali: ', () => {
        console.log('\n');
        programResto();
    });
}

const riwayatPesanan = () => {
    if(pesanan.length != 0) {
        console.log('Menu yang dipesan:');
        for (let i = 0; i < pesanan.length; i++) {
            console.log(`${i + 1}. ${pesanan[i][0]}: ${pesanan[i][3]} buah`);
        }
        rl.question('Masukkan apapun untuk kembali: ', () => {
            console.log('\n');
            programResto();
        });
    } else {
        console.log('Belum Ada Menu Yang Dipesan!');
        console.log('\n');
        programResto();
    }
    
}

const programResto = () => {
    for (let i = 0; i < fitur.length; i++) {
        console.log(`${i + 1}. ${fitur[i]}`);
    }

    rl.question("Selamat Datang Di Restoran, Pilih Nomor Fitur: ", (pilihFitur) => {
        switch(pilihFitur) {
            case '1':
                rl.question('Pilih aksi(lihat/tambah/hapus): ', (aksi) => {
                    switch(aksi.toLowerCase()) {
                        case 'lihat':
                            lihatMenu();
                            break;
                        case 'tambah':
                            tambahMenu();
                            break;
                        case 'hapus':
                            hapusMenu();
                            break;
                        default:
                            console.log('Aksi Tidak Valid!');
                            console.log('\n');
                            programResto();
                            break;
                    }
                });
                break;
            case '2':
                tambahPesanan();
                break;
            case '3':
                hitungTotal();
                break;
            case '4':
                updateHarga();
                break;
            case '5':
                lacakStok();
                break;
            case '6':
                riwayatPesanan();
                break;
            case '7':
                console.log('Terima Kasih, Semoga Harimu Menyenangkan!');
                rl.close();
                break;
            default:
                console.log('Fitur tidak valid!');
                programResto();
                break;
        }
    });
}

programResto();