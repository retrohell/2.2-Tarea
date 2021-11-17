let par = 0;
let impar = 0;
for(let i=1; i<=100; i++){
    if(i%2==0){
        par++;
    } else {
        impar++;
    }
}
console.log("Total de pares ", par, " e impares ", impar);