const tecnologias = ["HTML",20,30,true, "react","Angular"]

//FOR EACH - ACCEDER A CADA ELEMENTO DEL ARRAY
const arrayForEach = tecnologias.forEach(function(tech){
    return tech;
});

//MAP - CREAR UN NUEVO ARREGLO
const arrayMap = tecnologias.map(function(tech){
    return tech;
});

console.log(arrayForEach);
console.log(arrayMap);