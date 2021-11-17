var teclado = 0, anterior = 0, menor = 0, mayor = 0;
for (let i = 0; i <= 4; i++) {
    process.stdout.on('data', function (data) {
        teclado = data;
        if (teclado >= anterior) {
            mayor = teclado;
        } else if (teclado < anterior) {
            menor = teclado;
        }
        process.exit();
    });
}
console.log("Mayor ", mayor, " Menor", menor);

