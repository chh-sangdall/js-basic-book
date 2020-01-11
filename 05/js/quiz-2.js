function bigger(a, b){
    if(a == null){
        a = parseInt(prompt("첫 번째 숫자"));
    }
    if(b == null){
        b == parseInt(prompt("두 번째 숫자"));
    }
    if(a < b){
        alert(a + "보다 " + b + "가 큰 값입니다.");
    }else if(b < a){
        alert(b + "보다 " + a + "가 큰 값입니다.");
    }else{
        alert(a + "와 " + b + "가 같은 값입니다.");
    }
}
bigger();