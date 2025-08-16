function task12(yosh, tur) {
    if (yosh < 18 && tur === "skutur") {
        return "Sizga ruxsat berildi: " + tur;
    } else if (yosh >= 18 && tur === "yengil") {
        return "Sizga ruxsat berildi: " + tur;
    } else if (yosh >= 21 && tur === "yuk") {
        return "Sizga ruxsat berildi: " + tur;
    } else if (tur === "skutur" || tur === "yengil" || tur === "yuk") {
        return "Sizga ruxsat berilmagan: " + tur;
    } else {
        return "Noto'g'ri ma'lumot kiritildi.";
    }
}
let yosh = prompt("Yoshingizni kiriting");
let tur = prompt("Avtomobil turi (skutur, yengil, yuk) ni kiriting");
alert(task12(Number(yosh), tur));