let num = 0;
let impar = 0;
for(let i=1; i<=100; i++){
    if(i%2==0 || i%3==0){
        num++;
    }
}
console.log("cantidad de multiplos ", num);