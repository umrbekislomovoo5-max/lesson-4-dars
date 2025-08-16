function engKatta(son1, son2, son3) {
    if (son1 >= son2 && son1 >= son3) {
        return son1 + " eng katta son.";
    } else if (son2 >= son1 && son2 >= son3) {
        return son2 + " eng katta son.";
    } else {
        return son3 + " eng katta son.";
    }
}

let a = prompt("1-sonni kiriting:");
let b = prompt("2-sonni kiriting:");
let c = prompt("3-sonni kiriting:");

alert(engKatta(Number(a), Number(b), Number(c)));
