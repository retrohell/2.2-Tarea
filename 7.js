var tot = 0;
process.stdout.on('data', function(data){
    teclado = data.toString();
    tot++;
    console.log("total de frases: ", tot);
});
