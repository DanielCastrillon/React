//Fetch API - Async Await
//Promices

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPIAsync = async () => {
    //No se ejecuta la linea siguiente hasta que este lista la anterior
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    resultado.forEach(comentario => {
        console.log(comentario);
    });
    console.log(resultado);

}

consultarAPIAsync();



