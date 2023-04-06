const producto = {
    nombre: "Tablet",
    precio: 500,
    disponible: true
}

console.log(producto);
console.table(producto);

//Desestructurar saca variables del objeto
const { imagen, nombre } = producto;
console.log(imagen);
console.log(nombre);

// Object Literar Enhacement - Variables que estan fuera de un objeto incluirlas
const autenticado = true;
const usuario = "Daniel";

const nuevoObjeto = {
    autenticado,//: autenticado,
    usuario//: usuario
}
console.table(nuevoObjeto);