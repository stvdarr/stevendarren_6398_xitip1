const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan banyak buku yang dipinjam: ", (total) => { 
    if(total <= 3) {
        console.log("Peminjaman Berhasil")
    }
    if(total > 3) {
        console.log("Tidak Bisa Meminjam")
    }
    rl.close();
});