

var a = 3;
var N = 18;
var res = 0;



for(var i = 0; i <= 20; i++){
    if(i % a == 0 || i % N == 0){
        res += i;
    }
}

console.log(res);
