const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Masukkan nilai tugas: ", (nilaiTugas) => {
    rl.question("Masukkan nilai UTS: ", (nilaiUTS) => {
            rl.question("Masukkan nilai UAS: ", (nilaiUAS) => {
                let persenTugas = 0.4;
                let persenUTS = 0.25;
                let persenUAS = 0.35;
                if(nilaiUAS < 75) {
                    persenTugas += 0.75;
                    persenUAS -= 0.75;
                } else if(nilaiUTS < 75) {
                    persenTugas += 0.1;
                    persenUTS -= 0.1;
                }
                nilaiAkhir = persenTugas * nilaiTugas + persenUTS * nilaiUTS + persenUAS * nilaiUAS;
                console.log(`Nilai akhir: ${nilaiAkhir}`);
                rl.close();
        });
    });
});