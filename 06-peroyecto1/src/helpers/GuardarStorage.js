export const GuardarStorage = (key, elemento) => {
    //Conseguir elementos del locar storage
    let elementos = JSON.parse(localStorage.getItem(key));

    //Comprobar Si es un array
    if (Array.isArray(elementos)) {
      //Añadir un elemento nuevo al array
      elementos.push(elemento);
      
    }else{
      //Crear un array con el elemento nuevo
      elementos = [elemento]
    }
    //Guardar en el local
    localStorage.setItem(key,JSON.stringify(elementos));
    console.log(elementos);
    return elemento;
    //Devolver objeto

  }