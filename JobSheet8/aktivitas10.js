const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

let fitur = ['Tambah Buku', 'Hapus Buku', 'Lihat Buku', 'Update Informasi Buku', 'Lacak Salinan', 'Hitung Total Buku', 'Selamat Tinggal'];
let buku = [
  ["Laskar Pelangi", "Andrea Hirata", 50000, 10],
  ["Bumi Manusia", "Pramoedya Ananta Toer", 75000, 5],
  ["Pulang", "Tere Liye", 60000, 15],
  ["Ayat-Ayat Cinta", "Habiburrahman El Shirazy", 55000, 8],
  ["Negeri 5 Menara", "Ahmad Fuadi", 45000, 20]
];

let finish = false;

const tambahBuku = () => {
    rl.question('Masukkan nama buku yang ditambahkan: ', (bukuBaru) => {
        if(bukuBaru.length != 0) {
            let found;
            for(let i = 0; i < buku.length; i++) {
                buku[i][0] == bukuBaru ? found = true : null;
            }
            if(!found) {
                rl.question('Masukkan informasi buku yang ditambahkan: ', (infoBaru) => {
                    rl.question('Masukkan harga buku yang ditambahkan: ', (hargaBaru) => {
                        hargaBaru = Number(hargaBaru);
                        if(!isNaN(hargaBaru)) {
                            rl.question('Masukkan jumlah salinan buku yang ditambahkan: ', (salinanBaru) => {
                                salinanBaru = Number(salinanBaru);
                                if(!isNaN(salinanBaru)) {
                                    buku.push([bukuBaru, infoBaru, hargaBaru, salinanBaru]);
                                    console.log('Buku Berhasil Ditambahkan!');
                                    rl.question('Apakah ada buku lain yang ingin ditambah(ya/tidak): ', (lanjut) => {
                                        if(lanjut.toLowerCase() == 'ya') {
                                            console.log('\n');
                                            tambahBuku();
                                        } else if(lanjut.toLowerCase() == 'tidak') {
                                            console.log('Kembali Ke Menu Utama...');
                                            console.log('\n');
                                            programPerpustakaan();
                                        } else {
                                            console.log('Aksi Tidak Valid!');
                                            console.log('\n');
                                            programPerpustakaan();
                                        }
                                    });
                                } else {
                                    console.log('Salinan Tidak Valid!');
                                    console.log('\n');
                                    tambahBuku();
                                }
                            });
                        } else {
                            console.log('Harga Tidak Valid!');
                            console.log('\n');
                            tambahBuku();
                        }
                    });
                });
            } else {
                console.log('Buku Sudah Ada!');
                console.log('\n');
                programPerpustakaan();
            }
        } else {
            console.log('Nama Buku Tidak Valid!');
            console.log('\n');
            programPerpustakaan();
        }
    });
}

const hapusBuku = () => {
    for (let i = 0; i < buku.length; i++) {
        console.log(`${i + 1}. ${buku[i][0]}`);
    }
    rl.question('Masukkan nomor buku yang dihapus: ', (indexBuku) => {
        if(indexBuku.length != 0 && indexBuku <= buku.length) {
            buku.splice(indexBuku - 1, 1); 
            console.log('Buku Berhasil Dihapus!');
            rl.question('Apakah ada buku lain yang ingin dihapus(ya/tidak): ', (lanjut) => {
                if(lanjut.toLowerCase() == 'ya') {
                    console.log('\n');
                    hapusBuku();
                } else if(lanjut.toLowerCase() == 'tidak') {
                    console.log('Kembali Ke Menu Utama...');
                    console.log('\n');
                    programPerpustakaan();
                } else {
                    console.log('Aksi Tidak Valid!');
                    console.log('\n');
                    programPerpustakaan();
                }
            });
        } else {
            console.log('Nomor Buku Tidak Valid!');
            console.log('\n');
            programPerpustakaan();
        }
        
    });
}

const lihatBuku = () => {
    console.log('Daftar Buku:');
    for (let i = 0; i < buku.length; i++) {
        console.log(`${i + 1}. ${buku[i][0]}:\nPenulis: ${buku[i][1]}\nHarga: Rp${buku[i][2]}`);
    }
    rl.question('Masukkan apapun untuk kembali: ', () => {
        console.log('\n');
        programPerpustakaan();
    });
}

const updateInfo = () => {
    console.log('Daftar Buku:');
    for (let i = 0; i < buku.length; i++) {
        console.log(`${i + 1}. ${buku[i][0]}: ${buku[i][1]}`);
    }
    rl.question('Masukkan nama buku yang diperbarui informasinya: ', (bukuTarget) => {
        let found;
        let indexBukuSama;
        for(let i = 0; i < buku.length; i++) {
            buku[i][0] == bukuTarget ? (found = true, indexBukuSama = i) : null;
        }
        if(found) {
            rl.question('Masukkan informasi buku baru: ', (infoBaru) => {
                buku[indexBukuSama][1] = infoBaru;
                console.log('Informasi Buku Berhasil Diperbarui!');
                console.log('\n');
                rl.question('Apakah ada buku lain yang ingin diperbarui(ya/tidak): ', (lanjut) => {
                    if(lanjut.toLowerCase() == 'ya') {
                        console.log('\n');
                        updateInfo();
                    } else if(lanjut.toLowerCase() == 'tidak') {
                        console.log('Kembali Ke Menu Utama...');
                        console.log('\n');
                        programPerpustakaan();
                    } else {
                        console.log('Aksi Tidak Valid!');
                        console.log('\n');
                        programPerpustakaan();
                    }
                });
            })
        } else {
            console.log('Buku Tidak Ditemukan!');
            console.log('\n');
            programPerpustakaan();
        }
    })
}

const lacakSalinan = () => {
    let total = 0;
    console.log('Salinan Buku:');
    for (let i = 0; i < buku.length; i++) {
        total += buku[i][3];
        console.log(`${i + 1}. ${buku[i][0]}: ${buku[i][3]} buah`);
    }
    console.log(`Total Salinan Buku: ${total} buah`);
    rl.question('Masukkan apapun untuk kembali: ', () => {
        console.log('\n');
        programPerpustakaan();
    });
}

const hitungTotal = () => {
    let total = 0;
    for (let i = 0; i < buku.length; i++) {
        total += buku[i][2] * buku[i][3];
    }
    console.log(`Total Nilai Buku: Rp${total}`);
    rl.question('Masukkan apapun untuk kembali: ', () => {
        console.log('\n');
        programPerpustakaan();
    });    
}

const programPerpustakaan = () => {
    if(finish) {
        console.log('Terima Kasih, Semoga Harimu Menyenangkan!');
        rl.close();
        return;
    }

    for (let i = 0; i < fitur.length; i++) {
        console.log(`${i + 1}. ${fitur[i]}`);
    }

    rl.question("Selamat Datang Di Perpustakaan, Pilih Nomor Fitur: ", (pilihFitur) => {
        switch(pilihFitur) {
            case '1':
                tambahBuku();
                break;
            case '2':
                hapusBuku();
                break;
            case '3':
                lihatBuku();
                break;
            case '4':
                updateInfo();
                break;
            case '5':
                lacakSalinan();
                break;
            case '6':
                hitungTotal();
                break;
            case '7':
                finish = true;
                programPerpustakaan();
                break;
            default:
                console.log('Fitur tidak valid!');
                programPerpustakaan();
                break;
        }
    });
}

programPerpustakaan();