//toko buku Agung Gunung: lihat buku, tambah buku, ubah info buku, cari buku yang ingin dipinjam, catat info peminjaman
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let buku = [
    {id: 1, nama: 'Laskar Pelangi', penulis: 'Andrea Hirata'},
    {id: 2, nama: 'Bumi Manusia', penulis: 'Pramoedya Ananta Toer'},
    {id: 3, nama: 'Pulang', penulis: 'Tere Liye'},
];
let pinjam = [];

const lihatBuku = () => {
    console.log('Daftar Buku:');
    buku.forEach((x) => {
        console.log(`${x.id}. ${x.nama} - Penulis: ${x.penulis}`);
    });
    rl.question('Apakah ada buku yang ingin ditambah(y/n): ', (lanjut) => {
        if(lanjut == 'y') {
            tambahBuku();
        } else {
            rl.question('Apakah ada buku yang ingin diubah informasinya(y/n): ', (lanjut) => {
                if(lanjut == 'y') {
                    ubahInfo();
                } else {
                    mainMenu();
                }
            });;
        }
    });
}

const tambahBuku = () => {
    rl.question('Masukkan nama buku yang ingin ditambahkan: ', (namaBuku) => {
        rl.question('Masukkan informasi buku yang ingin ditambahkan: ', (penulisBuku) => {
            buku.push({id: buku.length + 1, nama: namaBuku, penulis: penulisBuku});
            console.log('Buku Berhasil Ditambahkan!');
            lihatBuku();
            rl.question('Apakah ada buku lain yang ingin ditambah(y/n): ', (lanjut) => {
                if(lanjut == 'y') {
                    tambahBuku();
                } else {
                    mainMenu();
                }
            });
        });
    });
}

const mainMenu = () => {
    console.log('Selamat Datang Di Toko Buku Agung Gunung');
    console.log('1. Lihat Daftar Buku\n2. Tambah Buku\n3. Ubah Informasi Buku\n4. Cari Buku\n5. Ubah Informasi Buku\n6. Lihat Riwayat Peminjaman');

    rl.question('Pilih Nomor Fitur: ', (fitur) => {
        if(fitur == '1') {
            lihatBuku();
        } else if(fitur == '2') {
            tambahBuku();
        } else if(fitur == '3') {
            ubahInfo();
        } else if(fitur == '4') {
            cariBuku();
        }
    })
}
mainMenu();