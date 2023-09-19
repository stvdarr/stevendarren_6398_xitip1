const foods = [
    {nama: 'Kentang Goreng', jenis: 'Cemilan', kalori: 100},
    {nama: 'Mie', jenis: 'Makanan Berat', kalori: 400},
    {nama: 'Ayam Goreng', jenis: 'Lauk', kalori: 150},
    {nama: 'Ikan Goreng', jenis: 'Lauk', kalori: 150},
    {nama: 'Rendang', jenis: 'Lauk', kalori: 250}
];
newFoods = foods.filter((makanan) => {return makanan.kalori < 300});
console.log(newFoods);