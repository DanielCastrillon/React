//Array original
const tecnologias = ["HTML",20,30,true, "react","Angular"]

///Agregar elemento
const nuevoArreglo = ['Excel', ...tecnologias, 'GrapQL'];

//Eliminar elementos
const nuevoArregloDelete = tecnologias.filter( tech => tech !== "HTML");

//Reemplazar
const nuevoArregloMod = tecnologias.map( tech => {
    if (tech === 'HTML') {
        return 'CSS';
    }else{
        return tech;
    }
});

console.log(nuevoArregloMod);
console.log(nuevoArregloDelete);

