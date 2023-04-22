//Seleccionar el atributo por ID
const enlaces = document.querySelectorAll('.navegacion a');

//Seleciona el atributo por CLASE
const heading = document.querySelector('.heading');

//console.log(heading);
console.log(enlaces);
//console.log(heading.textContent);

heading.textContent = 'Un nuevo heading';
const inputName = document.querySelector('#nombre');
inputName.value = 'Valor por defecto';

//Añadir texto mediante js
enlaces.forEach(enlace => enlace.textContent = 'Nuevo texto')

