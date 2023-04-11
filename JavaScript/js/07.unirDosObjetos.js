const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Daniel",
    premium: true
}

const nuevoObjeto = {
    producto:{...producto},
    cliente: {...cliente}
}
console.log(nuevoObjeto);