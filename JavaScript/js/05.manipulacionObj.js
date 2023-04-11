const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

//Reescribir valor
producto.nombre = "Monitor curvo";

//Si no existe la propiedad aniadirla
producto.imagen = "imagen.jpg";

console.table(producto);
delete producto.disponible;
console.table(producto);

//No poder modificar objeto
Object.freeze(producto); //No permite la modificacion del objeto
Object.seal(producto); //Permite solo la edicion de propiedades
console.table(producto);