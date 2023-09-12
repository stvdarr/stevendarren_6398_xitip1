const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Inisialisasi database produk
const produkDatabase = [];

function tambahProduk() {
  rl.question('Masukkan nama produk: ', (namaProduk) => {
    rl.question('Masukkan kategori produk: ', (kategoriProduk) => {
      rl.question('Masukkan jumlah stok: ', (jumlahStok) => {
        const produkBaru = {
          nama: namaProduk,
          kategori: kategoriProduk,
          stok: parseInt(jumlahStok)
        };
        produkDatabase.push(produkBaru);
        console.log(`Produk ${namaProduk} telah ditambahkan.`);
        tampilkanMenu();
        rl.question('Tambah Produk Lagi (y/n): ', (jawaban) => {
          if (jawaban.toLowerCase() === 'y') {
              tambahProduk();
          }else{
              tampilkanMenu();
          }
        });
      });
    });
  });
}

function hapusProduk() {
  rl.question('Masukkan nama produk yang ingin dihapus: ', (namaProduk) => {
    const indeksProduk = produkDatabase.findIndex((produk) => produk.nama === namaProduk);
    if (indeksProduk !== -1) {
      produkDatabase.splice(indeksProduk, 1);
      console.log(`Produk ${namaProduk} telah dihapus.`);
    } else {
      console.log(`Produk ${namaProduk} tidak ditemukan.`);
    }
    tampilkanMenu();
    rl.question('Hapus Produk Lagi (y/n): ', (jawaban) => {
      if (jawaban.toLowerCase() === 'y') {
          hapusProduk();
      }else{
          tampilkanMenu();
      }
    });
  });
}

function cariProduk() {
  rl.question('Masukkan kategori produk yang ingin dicari: ', (kategori) => {
    const produkDalamKategori = produkDatabase.filter((produk) => produk.kategori === kategori);
    if (produkDalamKategori.length > 0) {
      console.log(`Produk dalam kategori ${kategori}:`);
      produkDalamKategori.forEach((produk) => {
        console.log(`${produk.nama} - Stok: ${produk.stok}`);
      });
    } else {
      console.log(`Tidak ada produk dalam kategori ${kategori}.`);
    }
    tampilkanMenu();
  });
}

function cekStok() {
  rl.question('Masukkan nama produk yang ingin dicek stoknya: ', (namaProduk) => {
    const produk = produkDatabase.find((produk) => produk.nama === namaProduk);
    if (produk) {
      console.log(`Stok ${namaProduk}: ${produk.stok}`);
    } else {
      console.log(`Produk ${namaProduk} tidak ditemukan.`);
    }
    tampilkanMenu();
  });
}

function tampilkanMenu() {
  console.log('\nMenu:');
  console.log('1. Tambah Produk');
  console.log('2. Hapus Produk');
  console.log('3. Cari Produk berdasarkan Kategori');
  console.log('4. Cek Stok Produk');
  console.log('5. Keluar');

  rl.question('Pilih menu (1/2/3/4/5): ', (pilihan) => {
    switch (pilihan) {
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
        cekStok();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Pilihan tidak valid.');
        tampilkanMenu();
    }
  });
}

console.log('Selamat datang di Aplikasi Manajemen Stok Gudang.');
tampilkanMenu();
