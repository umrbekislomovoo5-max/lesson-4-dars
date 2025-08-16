function task5(ball){
    if(ball >= 90 && ball <= 100){
        return "A";
    } else if(ball >= 80 && ball < 90){
        return "B";
    } else if(ball >= 70 && ball < 80){
        return "C";
    }
    else if(ball >= 60 && ball < 70){
        return "D";
    }
    else if(ball >= 50 && ball < 60){
        return "E";
} }
let ball = prompt("Ballni kiriting");
alert(task5(Number(ball)));