const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

heading.addEventListener('click',clicHeading);

function clicHeading(){
    console.log("Clic en heading");
    heading.textContent = 'Nuevo titulo de clic';
}

enlaces.forEach(enlace => {
    enlace.addEventListener('click',()=>{
        console.log('Clic en el enlace');
    })
});

