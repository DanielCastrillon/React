//FUNCION NORMAL
const sumar = function (numero1 = 0, numero2 = 0) {
    return numero1+numero2
}

//FUNCION FLECHA
const sumarArrow = (numero1 = 0, numero2 = 0) => {
    return numero1+numero2
}

//LLAMADO DE FUNCIONES
const resultado = sumar(10,20);
const resultado2 = sumarArrow(50,20);

//LOGS
console.log(resultado);
console.log(resultado2);