const tecnologias = ["HTML",20,30,true, "react","Angular"]
const numeros = [10,20,30];

//FILTER - Retorna el resultado con base ne la condicion
//nuevoArray = tecnologias.filter( tech => tech !== 'react');

//Comprobar si un elemento existe en el array
//const resultado = tecnologias.includes('react');

//Some - Devuelve si al menos uno cumple la condicion
//const resultado = numeros.some(numero => numero > 15);

//Find - Devuelve el primer elemento que cumpla la condicion
//const resultado = numeros.find(numero => numero > 15);

//Every - Retorna true o false y todos cumplen la condicion
//const resultado = numeros.every(numero => numero < 100);

//Reduce - Acumula o tataloza el resultado de una variables indicando con que numero incia 0
const resultado = numeros.reduce((total,numero) => numero + total, 0)

tecnologias.forEach((tech, index) => (console.log(tech +' - '+ index)));

console.log(resultado);