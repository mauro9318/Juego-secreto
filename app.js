//DOM .- DOCUMENT OBJECT MODEL.- es una representacion de cada etiqueta que existe
//Los selectores son la forma en que JS selecciona elementos
//queryselecto .- retorna el objeto
//getElementbyID .- retorna el objeto

//variables

let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumerosSorteados = []//variable tipo lista que permite almacenar los numeros que ya fueron sorteados
let numeroMaximo = 10;

/*
let titulo = document.querySelector('h1');//la variable titulo es un tipo de dato complejo. Es un objeto para ser mas preciso
titulo.innerHTML="Juego del numero secreto";
*/
/*
let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un numero del 1 al 10";
*/

//TODOS LOS EVENTOS EN JS comienzan con el prefio ON

function intentoDeUsuario(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value)//Hacemos referencia a un elemento HTML identificando el id del mismo
    console.log(numeroSecreto)
    //console.log(intentos)
    //console.log(numeroSecreto === numeroUsuario);
    if(numeroSecreto === numeroUsuario){
        asignarElemento('p',`Acertaste el numero. FELICIDADES. Tuviste ${intentos} ${intentos == 1 ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //Usuario no acerto
        if(numeroUsuario > numeroSecreto){
            asignarElemento('p',"El numero es menor");
        }
        else{
            asignarElemento('p',"El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


//EL TEXTO Y LA ETIQUET que eran tratadas como literales fijos, ahora se los tratara como parametros y variables
function asignarElemento(etiqueta, texto){
    let titulo = document.querySelector(etiqueta);
    titulo.innerHTML = texto;
    return;//la funcion no retorna nada, pero por buenas practicas es aconsejable colocarlo
}
function condicionesIniciales(){
    asignarElemento('h1',"Juego del numero secreto V2");
    asignarElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}


function generarNumeroSecreto(){
//    return Math.floor(Math.random()*10);

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
             //Si el numero generado esta incluido en la lista
            if(listaNumerosSorteados.includes(numeroGenerado)){//el metodo includes recorre todo el arreglo buscando el dato asignado
                return generarNumeroSecreto();
            }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
    }
    
   

    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de ntervalo de numeros
    //generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();   
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}

condicionesIniciales()