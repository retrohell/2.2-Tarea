var teclado = 0;
process.stdin.on('data', function (data) {
    teclado = data;
    process.exit();
});

function fibo(num){  
    var f = 0; 
    for(let i = 0; i<= num; i++){
        f+=i;
    }
    console.log(f)
    return f;
}

fibo(teclado);