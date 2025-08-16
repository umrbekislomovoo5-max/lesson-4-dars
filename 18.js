function task18(yil,foiz,asosiy_summa){
    return (asosiy_summa * foiz*yil)/100
}
let yil = prompt("Yilni kiriting");
let foiz = prompt("Yillik foizni kiriting");
let asosiy_summa = prompt("Asosiy summani kiriting");
alert("Foiz summasi: " + task18(Number(yil), Number(foiz), Number(asosiy_summa)));