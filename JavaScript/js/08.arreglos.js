const tecnologias = ["HTML",20,30,true, "react","Angular"]

///Agregar elemento
const nuevoArreglo = ['Excel', ...tecnologias, 'GrapQL'];
console.log(tecnologias);

//Eliminar elementos
const nuevoArregloDelete = tecnologias.filter( function(tech){
    console.log(tech);
    return tech !== true;
} ) 

//Reemplazar
const nuevoArregloMod = tecnologias.map(function (tech) {
    if (tech === 'HTML') {
        return 'CSS';
    }else{
        return tech;
    }
})




console.log(nuevoArreglo);
console.log(nuevoArregloDelete);
console.table(nuevoArregloMod);