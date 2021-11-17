var teclado;
process.stdout.on('data', function(data){
    teclado = data;
    for(let i=1; i<=teclado; i++){
        console.log(i);
    }
    process.exit();
});
