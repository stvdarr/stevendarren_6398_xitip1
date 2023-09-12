const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Pilih Menu 1 - 5: ", (menu) => { 
    if(menu === "1") {
        console.log("Ayam Goreng");
    };
    if(menu === "2") {
        console.log("Ayam Bakar");
    };
    if(menu === "3") {
        console.log("Ayam Panggang");
    };
    if(menu === "4") {
        console.log("Ayam Gulai");
    };
    if(menu === "5") {
        console.log("Ayam Rica-Rica");
    };
    rl.close();
});