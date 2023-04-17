//Condicionales

// y (&&) o ||

const numero1 = 1;
const numero2 = 2;
const autenticado = false;
//Condicional normal
if (numero1 > numero2) {
    console.log("Entro al cerdadero");
}else{
    console.log("Entro a false");
}

//condicional Ternario
autenticado ? 
    console.log("Usuario autenticado, Si") :
    console.log("No, al login");

//Negacion de la condicion
!autenticado ? console.log("Usuario autenticado, Si") : console.log("No, al login");

//Ternario anidado
autenticado ?
    console.log('Si'):
    numero1>numero2 ?
        console.log('si'):
         console.log('No es mayor');


