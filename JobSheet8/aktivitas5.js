const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

let fitur = ['Tambah Produk', 'Hapus Produk', 'Lihat Produk', 'Update Deskripsi Produk', 'Lacak Tanggal Kedaluwarsa', 'Selamat Tinggal'];
let produk = [
    ["Paracetamol", "Faskes", "30 September 2023"],
    ["Vitamin C", "Vitalin", "15 Desember 2024"],
    ["Antibiotik", "AntibioCare", "25 Juni 2023"],
    ["Obat Batuk", "TussiRelief", "10 November 2023"],
    ["Salep Antibiotik", "Dermacure", "5 Agustus 2024"],
    ["Obat Mata", "VisiClear", "31 Mei 2023"],
    ["Antasida", "StomachGuard", "20 Januari 2024"]
];
let finish = false;

const lihatProduk = () => {
    console.log('Daftar Produk:');
    for (let i = 0; i < produk.length; i++) {
        console.log(`${i + 1}. ${produk[i][0]}:\nDeskripsi: ${produk[i][1]}\nTanggal Kedaluwarsa: ${produk[i][2]}`);
    }
    rl.question('Masukkan apapun untuk kembali: ', () => {
        console.log('\n');
        programInventaris();
    });
}

const tambahProduk = () => {
    rl.question('Masukkan nama produk yang ditambahkan: ', (produkBaru) => {
        if(produkBaru.length != 0) {
            let found;
            for(let i = 0; i < produk.length; i++) {
                produk[i][0] == produkBaru ? found = true : null;
            }
            if(!found) {
                rl.question('Masukkan deskripsi produk yang ditambahkan: ', (descBaru) => { 
                    rl.question('Masukkan tanggal kedaluwarsa produk yang ditambahkan: ', (expBaru) => {
                        produk.push([produkBaru, descBaru, expBaru]);
                        console.log('Produk Berhasil Ditambahkan!');
                        rl.question('Apakah ada produk lain yang ingin ditambah(ya/tidak): ', (lanjut) => {
                            if(lanjut.toLowerCase() == 'ya') {
                                console.log('\n');
                                tambahProduk();
                            } else if(lanjut.toLowerCase() == 'tidak') {
                                console.log('Kembali Ke Menu Utama...');
                                console.log('\n');
                                programInventaris();
                            } else {
                                console.log('Aksi Tidak Valid!');
                                console.log('\n');
                                programInventaris();
                            }
                        });
                    });
                });
            } else {
                console.log('Produk Sudah Ada!');
                console.log('\n');
                programInventaris();
            }
        } else {
            console.log('Nama Produk Tidak Valid!');
            console.log('\n');
            programInventaris();
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
            rl.question('Apakah ada produk lain yang ingin dihapus(ya/tidak): ', (lanjut) => {
                if(lanjut.toLowerCase() == 'ya') {
                    console.log('\n');
                    hapusProduk();
                } else if(lanjut.toLowerCase() == 'tidak') {
                    console.log('Kembali Ke Menu Utama...');
                    console.log('\n');
                    programInventaris();
                } else {
                    console.log('Aksi Tidak Valid!');
                    console.log('\n');
                    programInventaris();
                }
            });
        } else {
            console.log('Nomor Produk Tidak Valid!');
            console.log('\n');
            programInventaris();
        }
        
    });
}

const updateDesc = () => {
    console.log('Daftar Produk:');
    for (let i = 0; i < produk.length; i++) {
        console.log(`${i + 1}. ${produk[i][0]}: ${produk[i][1]}`);
    }
    rl.question('Masukkan nama produk yang diperbarui deskripsinya: ', (produkTarget) => {
        let found;
        let indexProdukSama;
        for(let i = 0; i < produk.length; i++) {
            produk[i][0] == produkTarget ? (found = true, indexProdukSama = i) : null;
        }
        if(found) {
            rl.question('Masukkan deskripsi produk baru: ', (descBaru) => {
                produk[indexProdukSama][1] = descBaru;
                console.log('Deskripsi Produk Berhasil Diperbarui!');
                console.log('\n');
                rl.question('Apakah ada produk lain yang ingin diperbarui(ya/tidak): ', (lanjut) => {
                    if(lanjut.toLowerCase() == 'ya') {
                        console.log('\n');
                        updateDesc();
                    } else if(lanjut.toLowerCase() == 'tidak') {
                        console.log('Kembali Ke Menu Utama...');
                        console.log('\n');
                        programInventaris();
                    } else {
                        console.log('Aksi Tidak Valid!');
                        console.log('\n');
                        programInventaris();
                    }
                });

            })
        } else {
            console.log('Produk Tidak Ditemukan!');
            console.log('\n');
            programInventaris();
        }
    })
}

const lacakExp = () => {
    console.log('Tanggal Kedaluwarsa Produk:');
    for (let i = 0; i < produk.length; i++) {
        console.log(`${i + 1}. ${produk[i][0]}: ${produk[i][2]}`);
    }
    rl.question('Masukkan apapun untuk kembali: ', () => {
        console.log('\n');
        programInventaris();
    });
}

const programInventaris = () => {
    if(finish) {
        console.log('Terima Kasih, Semoga Harimu Menyenangkan!');
        rl.close();
        return;
    }

    for (let i = 0; i < fitur.length; i++) {
        console.log(`${i + 1}. ${fitur[i]}`);
    }

    rl.question("Selamat Datang Di Inventaris Apotik, Pilih Nomor Fitur: ", (pilihFitur) => {
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
                updateDesc();
                break;
            case '5':
                lacakExp();
                break;
            case '6':
                finish = true;
                programInventaris();
                break;
            default:
                console.log('Fitur tidak valid!');
                programInventaris();
                break;
        }
    });
}

programInventaris();