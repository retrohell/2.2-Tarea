var teclado = "";

while(teclado!="N" || teclado!="S"){
    process.stdout.on('data', function(data){
        teclado = data.toString().trim();
        process.exit();
    });
}
