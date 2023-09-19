const cars = [
    {merk: 'Suzuki', tahun: 2015, harga: 100000000},
    {merk: 'Toyota', tahun: 2012, harga: 200000000},
    {merk: 'Chevrolet', tahun: 2019, harga: 400000000},
    {merk: 'Volkswagen', tahun: 2014, harga: 700000000}
];
merkMobil = cars.map((mobil) => {return mobil.merk});
console.log(merkMobil);