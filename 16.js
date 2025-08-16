function task16(narx){
    if(narx>500000){
        return "shuncha to'liysiz" + narx * 0.9; 
    } else {
        return "shuncha to'liysiz: yani chegirmasiz to'liysiz " + narx;
    }
}
let narx = prompt("Mahsulot narxini kiriting");
alert(task16(Number(narx)));