var contar = 0, sumar = 0;
for(let i=0; i<=60; i++){
    if(i%2==0){
        console.log(i);
        contar++;
        sumar+=i;
    }
}
console.log("cantidad de ", contar, " sumados ", sumar);