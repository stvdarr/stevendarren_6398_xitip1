const countries = [
    {nama: 'Jerman', ibukota: 'Berlin', populasi: 74538712},
    {nama: 'Argentina', ibukota: 'Buenos Aires', populasi: 50435987},
    {nama: 'Perancis', ibukota: 'Paris', populasi: 47582710}
];
namaNegara = countries.map((negara) => {return negara.nama});
console.log(namaNegara);