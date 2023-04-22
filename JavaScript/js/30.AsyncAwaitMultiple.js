//Fetch API - Async Await
//Promices

const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/photos";

//No se ejecuta la linea siguiente hasta que este lista la anterior

const consultarAPIAsync = async () => {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);
    /* SEGUNDA CONSULTA */
    const respuesta2 = await fetch(url2);
    const resultado2 = await respuesta2.json();
    console.log(resultado2);

}
//Este es el que se debe utilizar
const consultarAPIAsync2 = async () => {
    const [reps1, resp2] = await Promise.all([fetch(url), fetch(url2)]);

    const resultado1 = await reps1.json();
    const resultado2 = await resp2.json();

    console.log(resultado2);
    console.log(resultado1);

}

consultarAPIAsync();

consultarAPIAsync2();



