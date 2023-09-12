const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

var nilai = {};
let i = 0;

rl.question("Masukkan jumlah siswa di kelas: ", (jumlahSiswa) => {
    let inputNilai = () => {
        rl.question("Masukkan nama siswa: ", (namaSiswa) => {
            rl.question("Masukkan nilai ujian: ", (nilaiSiswa) => {
                nilaiSiswa = Number(nilaiSiswa); 
                nilai[namaSiswa] = nilaiSiswa;
                i++;
                if(i < jumlahSiswa) {
                    inputNilai();
                } else {
                    let totalNilai = 0;
                    let rataNilai = 0;
                    for(let [namaSiswa, nilaiSiswa] of Object.entries(nilai)) {
                        totalNilai += nilaiSiswa;
                        rataNilai = totalNilai / Object.keys(nilai).length;
                        let status;
                        nilaiSiswa >= 70 ?
                        status = 'Lulus' :
                        status = 'Tidak Lulus' ;
                        console.log(namaSiswa, status)
                    }
                    console.log(`Rata-rata nilai ujian: ${rataNilai}`);
                    rl.close();
                };
            });
        });
    };
    inputNilai();
});

