function task9(tezlik){
    if(tezlik < 50){
        return "internet juda sekin";
    } else if(tezlik >= 50 && tezlik < 100){
        return "internet o'rtacha";

    }else{
        return "tez internet";
    }
}
let tezlik = prompt("internet tezligini kiriting");
alert(task9(Number(tezlik)));
