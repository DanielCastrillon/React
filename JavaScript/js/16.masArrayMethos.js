//Array original
const tecnologias = ["HTML",20,30,true, "react","Angular"]
const numeros = [10,20,30,40,50];

///Agregar elemento
const nuevoArreglo = ['Excel', ...tecnologias, 'GrapQL'];

//Mostrar elementos diferentes de HTML
const nuevoArregloDelete = tecnologias.filter( tech => tech !== "HTML");

//Reemplazar HTML por CSS
const nuevoArregloMod = tecnologias.map( tech => {
    if (tech === 'HTML') {
        return 'CSS';
    }else{
        return tech;
    }
});

console.log(nuevoArregloMod);
console.log(nuevoArregloDelete);

[]

