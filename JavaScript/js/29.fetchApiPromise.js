//Fetch API - Consumo de api o servicios desde otro servidor
//Promices
const url = "https://jsonplaceholder.typicode.com/comments";
const consultarAPI = () => {
    fetch(url)
        .then( respuesta => respuesta.json())
        .then((resultado) => {
            console.log(resultado);
            resultado.forEach(comentario => {
                console.log(comentario);
            });
        })
}

consultarAPI();



