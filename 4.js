function task4(son){
    if(son % 2 === 0){
        return "Bu son juft";
    }   else{
        return "Bu son toq";
    }
}
let son = prompt("Son kiriting");
alert(task4(Number(son)));