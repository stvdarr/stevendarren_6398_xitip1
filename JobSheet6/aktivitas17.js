const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Pilih Tujuan Liburan(1 - 5): ", (tujuan) => { 
    switch(tujuan) {
        case "1":
            console.log("Harga: Rp1000000; Fasilitas: kamar hotel");
            break;
        case "2":
            console.log("Harga: Rp3000000; Fasilitas: kamar hotel, kolam renang");
            break;
        case "3":
            console.log("Harga: Rp2500000; Fasilitas: kamar hotel, restoran");
            break;
        case "4":
            console.log("Harga: Rp5000000; Fasilitas: kamar hotel, kolam renang, restoran");
            break;
        case "5":
            console.log("Harga: Rp1750000; Fasilitas: kamar hotel, laundry");
            break;
    }
    rl.close();
});