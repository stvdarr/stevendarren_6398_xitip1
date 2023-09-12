const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Pilih opsi pengiriman(ekspres/reguler/kilat): ", (opsi) => {
    opsi = opsi.toLowerCase();
    if(opsi == 'ekspres') {
        console.log('Estimasi waktu pengiriman: 2 hari');
    } else if(opsi == 'reguler') {
        console.log('Estimasi waktu pengiriman: 3 hari');
    } else if(opsi == 'kilat') {
        console.log('Estimasi waktu pengiriman: 1 hari');
    }
    rl.close();
});