function task9(harorat){
    if(harorat < 30){
        return "havo juda quriq";
    } else if(harorat >= 30 && harorat < 60){
        return "havo juda qulay";

    }else{
        return "havo juda nam";
    }
}
let harorat = prompt("Havo haroratini kiriting");
alert(task9(Number(harorat)));
