const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("Pilih Menu 1 - 5: ", (menu) => { 
    switch(menu) {
        case "1":
            console.log("Ayam Goreng");
            break;
        case "2":
            console.log("Steak Sapi");
            break;
        case "3":
            console.log("Babi Panggang");
            break;
        case "4":
            console.log("Air Mineral");
            break;
        case "5":
            console.log("Es Teh Manis");
            break;
        default:
            console.log("Pilih Menu!");
            break;
    }
    rl.close();
});