const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', e => {
    //Previene la accion por default se debe poner
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value;
    const password = document.querySelector('.password').value;
    const alertaPrevia = document.querySelector('.alerta');

    if (alertaPrevia) {
        alertaPrevia.remove();
    }
    
    const alerta = document.createElement('DIV');
    alerta.id = 'hola';
    //Agregar clases
    alerta.classList.add('alerta', 'segunda-clase');
    //console.log(alerta);
    //console.log(nombre);
    //console.log(password);
    if (nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios';
        alerta.classList.add('error');
    }else{
        alerta.textContent ='Todo bien, enviando...';
        alerta.classList.add('exito')
    }
    //console.log('Enviaste formuario');
    console.log(alerta);
    formulario.appendChild(alerta);
});