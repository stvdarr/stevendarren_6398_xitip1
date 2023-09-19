const fruits = [
    {nama: 'Pisang', warna: 'Kuning', rasa: 'Manis'},
    {nama: 'Apel', warna: 'Merah', rasa: 'Manis'},
    {nama: 'Melon', warna: 'Hijau', rasa: 'Manis'}
];
namaBuah = fruits.map((buah) => {return buah.nama});
console.log(namaBuah);