var teclado;
process.stdout.on('data', function(data){
    teclado = data;
    if(teclado>=0){
        console.log("Positivo");
    } else {
        console.log("Negativo");
    }
    process.exit();
});
