var teclado = 0, teclado2 = 0, num = 0, tot = 0;
process.stdin.on('data', function (data) {
    teclado = data;
    process.exit();
});
process.stdin.on('data', function (data) {
    teclado2 = data;
    process.exit();
});

for(let i=teclado; i<=teclado2; i++){
    console.log(i);
    if(i%2==0 || i%3==0){
        num++;
    }
    tot++;
}
console.log("existen ", num, " pares");
console.log("un total de ", tot);