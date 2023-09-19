const animals = [
    {nama: 'Bebek', jenis: "Unggas", jumlahKaki: 2},
    {nama: "Ular", jenis: "Reptil", jumlahKaki: 0},
    {nama: "Semut", jenis: "Arthropoda", jumlahKaki: 6}, 
    {nama: "Laba - Laba", jenis: "Arachnida", jumlahKaki: 8}
];
newAnimals = animals.filter((hewan) => {return hewan.jumlahKaki > 4});
console.log(newAnimals);