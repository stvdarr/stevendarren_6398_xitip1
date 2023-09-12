const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Daftar menu restoran
const menu = [
    { id: "1", nama: "Nasi Goreng", harga: 20000 },
    { id: "2", nama: "Mie Goreng", harga: 18000 },
    { id: "3", nama: "Ayam Goreng", harga: 25000 },
    // Tambahkan menu lain sesuai kebutuhan
];

const riwayatPesanan = [];
let totalPembayaran = 0;

function tampilkanMenu() {
    console.log("Menu Restoran:");
    for (const id in menu) {
        console.log(`${id}. ${menu[id].nama} - Rp${menu[id].harga}`);
    }
    rl.question('Tambah Menu (y/n): ', (jawaban) => {
        if (jawaban.toLowerCase() === 'y') {
            tambahMenu();
        }else{
            rl.question('Edit Menu (y/n): ', (jawaban) => {
                if (jawaban.toLowerCase() === 'y'){
                    ubahMenu();
                }else{
                    mainMenu();
                }
            });
        }
    });
}

function tambahMenu() {
    rl.question("Masukkan nama menu baru: ", function (namaMenu) {
        rl.question("Masukkan harga menu baru: ", function (hargaMenu) {
            const idMenu = (menu.length + 1).toString(); // Buat ID baru berdasarkan jumlah menu yang ada
            const newMenu = { id: idMenu, nama: namaMenu, harga: parseInt(hargaMenu) };
            menu.push(newMenu);
            console.log(`Menu '${namaMenu}' telah ditambahkan.`);
            tampilkanMenu();
            rl.question('Tambah Menu (y/n): ', (jawaban) => {
                if (jawaban.toLowerCase() === 'y') {
                    tambahMenu();
                }else{
                    mainMenu();
                }
            });
        });
    });
}

function ubahMenu() {
    tampilkanMenu();
    rl.question("Masukkan ID menu yang ingin diubah: ", function (idMenu) {
        const menuTerpilih = menu.find(item => item.id === idMenu);
        if (!menuTerpilih) {
            console.log("Menu tidak ditemukan.");
            mainMenu();
            return;
        }
        rl.question("Masukkan nama menu baru (kosongkan jika tidak ingin diubah): ", function (namaMenuBaru) {
            rl.question("Masukkan harga menu baru (kosongkan jika tidak ingin diubah): ", function (hargaMenuBaru) {
                if (namaMenuBaru) {
                    menuTerpilih.nama = namaMenuBaru;
                }
                if (hargaMenuBaru) {
                    menuTerpilih.harga = parseInt(hargaMenuBaru);
                }
                console.log(`Menu dengan ID ${idMenu} telah diubah.`);
                tampilkanMenu();
                rl.question('Edit Menu (y/n): ', (jawaban) => {
                    if (jawaban.toLowerCase() === 'y'){
                        ubahMenu();
                    }else{
                        mainMenu();
                    }
                });
            });
        });
    });
}

function tambahPesanan(id, jumlah) {
    const menuTerpilih = menu.find(item => item.id === id);
    if (!menuTerpilih) {
        console.log("Menu tidak ditemukan.");
        return;
    }
    const totalHarga = menuTerpilih.harga * jumlah;
    riwayatPesanan.push({ menu: menuTerpilih, jumlah: jumlah, totalHarga: totalHarga });
    totalPembayaran += totalHarga;
    console.log(`Pesanan ${menuTerpilih.nama} (${jumlah}x) telah ditambahkan.`);
}

function tampilkanRiwayatPesanan() {
    console.log("Riwayat Pesanan:");
    riwayatPesanan.forEach((pesanan, index) => {
        console.log(`${index + 1}. ${pesanan.menu.nama} (${pesanan.jumlah}x) - Total: Rp${pesanan.totalHarga}`);
    });
}

function hitungTotalPembayaran() {
    return totalPembayaran;
}

function tutupBill() {
    console.log("Bill saat ini:");
    tampilkanRiwayatPesanan();
    const totalPembayaranSaatIni = hitungTotalPembayaran();
    console.log(`Total Pembayaran saat ini: Rp${totalPembayaranSaatIni}`);
    totalPembayaran = 0;
    riwayatPesanan.length = 0; // Mengosongkan riwayat pesanan
    console.log("Bill telah ditutup. Silakan buat bill pesanan baru.");
}

function mainMenu() {
    console.log("\nAplikasi Manajemen Restoran");
    console.log("1. Tampilkan Menu");
    console.log("2. Tambah Menu");
    console.log("3. Edit Menu");
    console.log("4. Tambah Pesanan");
    console.log("5. Tutup Bill");
    console.log("6. Keluar");
    rl.question("Pilih tindakan (1/2/3/4/5/6): ", function (pilihan) {
        if (pilihan === "1") {
            tampilkanMenu();
        }else if (pilihan === "2"){
            tambahMenu();
        }else if (pilihan === "3"){
            ubahMenu();
        }else if (pilihan === "4") {
            rl.question("Masukkan ID menu yang ingin dipesan: ", function (id) {
                rl.question("Jumlah yang ingin dipesan: ", function (jumlah) {
                    tambahPesanan(id, parseInt(jumlah));
                    mainMenu();
                });
            });
        } else if (pilihan === "5") {
            tutupBill();
            mainMenu();
        } else if (pilihan === "6") {
            console.log("Terima kasih!");
            rl.close();
        } else {
            console.log("Pilihan tidak valid. Silakan coba lagi.");
            mainMenu();
        }
    });
}

mainMenu();