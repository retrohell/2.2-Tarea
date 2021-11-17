var teclado = 0, sum = 0;
process.stdin.on('data', function(data){
    teclado = data;
    for(let i=0;i<=10;i++){
        sum = teclado * i;
        console.log(sum);
    }
    process.exit();
});
