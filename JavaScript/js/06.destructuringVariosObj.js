const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Daniel",
    premium: true
}
//Destructuracion de onjetos con alias
const { nombre, precio, disponible } = producto;
const { nombre:nombreCliente, premium } = cliente;
console.log(nombre, precio, disponible );
console.log(nombreCliente, premium);