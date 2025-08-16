function task3(yil){
     yosh=2025 - yil;
        if (yosh < 18) {
            return "Siz hali voyaga yetmagansiz";
        }else{ (yosh >= 18) 
            return "Siz voyaga yetgansiz";

        }
    
}
let yil = prompt("Tug'ilgan yilingizni kiriting");
alert(task3(Number(yil)));