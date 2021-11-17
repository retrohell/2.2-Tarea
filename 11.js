var teclado;
let tot = 0;
process.stdout.on('data', function(data){
    teclado = data;
    for(let i=0; i<=teclado; i+=3){
        tot+=1;
        console.log(i);
    }
    console.log("Total de multiplos ", tot-1);
    process.exit();
});
