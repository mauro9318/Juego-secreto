function factorial(numero){
    if (numero == 0 || numero == 1){
        return 1
    }
    
    return numero*factorial(numero-1);
}

function tablaMultiplicacion(numero){
    for (let i = 1; i <= 10; i++) {
        resultado = numero * i
        console.log(`${numero} multiplicado por ${i} es: ${resultado}`)
    }
}
tablaMultiplicacion(5)