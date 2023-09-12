const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan buku yang ingin dipinjam: ", (namaBuku) => {
    if(namaBuku.toUpperCase().charAt(0) == ('A' || 'P' || 'S')) {
        if(namaBuku.toUpperCase().charAt(1) == ('C' || 'D')) {
            console.log('Buku tidak tersedia');
            rl.close();
        } else {
            rl.question("Masukkan jumlah buku yang ingin dipinjam: ", (jumlah) => {
            console.log(`Buku "${namaBuku}" dipinjam sebanyak ${jumlah} buah`);
            rl.close();
        });
        }
    } else {
        rl.question("Masukkan jumlah buku yang ingin dipinjam: ", (jumlah) => {
            console.log(`Buku "${namaBuku}" dipinjam sebanyak ${jumlah} buah`);
            rl.close();
        });
    }        
});