const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', e => {
    //Previene la accion por default se debe poner
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value;
    const password = document.querySelector('.password').value;

    console.log(nombre);
    console.log(password);
    if (nombre == '' || password === '') {
        console.log('Todos los campos son obligatorios');
    }else{
        console.log('Todo bien, enviando...');
    }
    console.log('Enviaste formuario');
});