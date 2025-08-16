function task14(son1, son2) {
    if (son1 > son2) {
        return son1 + " katta " + son2 + " dan";
    } else if (son1 < son2) {
        return son2 + " katta " + son1 + " dan";
    } else {
        return "Sonlar teng";
    }
}

// Foydalanuvchidan qiymat olish
let a = prompt("Birinchi sonni kiriting:");
let b = prompt("Ikkinchi sonni kiriting:");

alert(task14(Number(a), Number(b)));
  