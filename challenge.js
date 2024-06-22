function saludo(){
    console.log("¡Hola mundo!");
}

saludo()

function saludo2(nombre){
    console.log(`Hola ${nombre}, un gusto conocerte`);
}
saludo2("mauro")


function doble(numero){
    return numero * 2;
}
console.log(doble(5))


function comparacion (a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}

comparacion(3,5)