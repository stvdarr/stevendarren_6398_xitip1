const cars = [
    {merk: 'Suzuki', tahun: 2005, harga: 100000000},
    {merk: 'Toyota', tahun: 2012, harga: 200000000},
    {merk: 'Chevrolet', tahun: 2019, harga: 400000000},
    {merk: 'Mercedes-Benz', tahun: 2017, harga: 500000000},
    {merk: 'Volkswagen', tahun: 2014, harga: 700000000}
];
newCars = cars.filter((mobil) => {return mobil.tahun > 2010});
console.log(newCars);