const inputNombre = document.querySelector('#nombre');
const inputPassword = document.querySelector('#password');
inputNombre.type = 'text';
inputNombre.placeholder = 'Place holder con JS';

//Dtectar lo que un usuario escribe
inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value);
});


//Cambiar el tipo del input
inputPassword.addEventListener('input', funcionPassword);

function funcionPassword(){
    inputPassword.type = 'text';

    setTimeout(()=>{
        inputPassword.type = 'password';
    }, 500);
}