var teclado;
process.stdout.on('data', function(data){
    teclado = data;
    if(teclado%2==0){
        console.log("Par");
    } else {
        console.log("Impar");
    }
    process.exit();
});
