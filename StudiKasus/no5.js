const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Objek untuk menyimpan produk dan deskripsi serta tanggal kedaluwarsa
const inventory = [];

// Fungsi untuk menambahkan produk baru
function tambahProduk() {
  rl.question('Masukkan nama produk: ', (namaProduk) => {
    rl.question('Masukkan deskripsi produk: ', (deskripsi) => {
      rl.question('Masukkan tanggal kedaluwarsa (YYYY-MM-DD): ', (tanggalKadaluwarsa) => {
        inventory[namaProduk] = {
          deskripsi,
          tanggalKadaluwarsa
        };
        console.log(`Produk "${namaProduk}" telah ditambahkan ke inventaris.`);
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

// Fungsi untuk menghapus produk yang sudah ada
function hapusProduk() {
  rl.question('Masukkan nama produk yang ingin dihapus: ', (namaProduk) => {
    if (inventory[namaProduk]) {
      delete inventory[namaProduk];
      console.log(`Produk "${namaProduk}" telah dihapus dari inventaris.`);
    } else {
      console.log(`Produk "${namaProduk}" tidak ditemukan dalam inventaris.`);
    }
    tampilkanMenu();
    rl.question('Hapus Produk (y/n): ', (jawaban) => {
      if (jawaban.toLowerCase() === 'y') {
          hapusProduk();
      }else{
          tampilkanMenu();
      }
    });
  });
}

// Fungsi untuk melihat daftar produk
function lihatDaftarProduk() {
  console.log('Daftar Produk:');
  for (const namaProduk in inventory) {
    const { deskripsi, tanggalKadaluwarsa } = inventory[namaProduk];
    console.log(`Nama: ${namaProduk}, Deskripsi: ${deskripsi}, Tanggal Kadaluwarsa: ${tanggalKadaluwarsa}`);
  }
  tampilkanMenu();
}

// Fungsi untuk mengupdate deskripsi produk
function updateDeskripsiProduk() {
  rl.question('Masukkan nama produk yang ingin diperbarui deskripsinya: ', (namaProduk) => {
    if (inventory[namaProduk]) {
      rl.question('Masukkan deskripsi baru: ', (deskripsiBaru) => {
        inventory[namaProduk].deskripsi = deskripsiBaru;
        console.log(`Deskripsi produk "${namaProduk}" telah diperbarui.`);
        tampilkanMenu();
        rl.question('Ubah Produk (y/n): ', (jawaban) => {
          if (jawaban.toLowerCase() === 'y') {
              updateDeskripsiProduk();
          }else{
              tampilkanMenu();
          }
        });
      });
    } else {
      console.log(`Produk "${namaProduk}" tidak ditemukan dalam inventaris.`);
      tampilkanMenu();
    }
  });
}

// Fungsi untuk menampilkan menu
function tampilkanMenu() {
  console.log('\nMenu:');
  console.log('1. Tambah Produk');
  console.log('2. Hapus Produk');
  console.log('3. Lihat Daftar Produk');
  console.log('4. Update Deskripsi Produk');
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
        lihatDaftarProduk();
        break;
      case '4':
        updateDeskripsiProduk();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Pilihan tidak valid. Silakan pilih menu yang sesuai.');
        tampilkanMenu();
        break;
    }
  });
}

// Mulai program dengan menampilkan menu
tampilkanMenu();
