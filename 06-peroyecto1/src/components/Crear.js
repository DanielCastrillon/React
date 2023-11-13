import React, { useState } from 'react'
import { GuardarStorage } from '../helpers/GuardarStorage';

const Crear = ({setListadoState}) => {
    const tituloComponente = "Añadir pelicula";
    const [peliculaState, setPeliculaState] = useState({
      titulo:'',
      descripcion:''
    });

    const {titulo, descripcion} = peliculaState;

    const datosForm = (e) => {
      //Prevenir refresco de pantalla
      e.preventDefault();

      //Conseguir datos del formuario
      let target = e.target;
      let titulo = target.titulo.value;
      let descripcion  = target.descripcion.value;

      //Crear objeto pelicula a guardar
      let pelicula = {
        id: new Date().getTime(),
        titulo,
        descripcion
      }

      //Asignar al objeto
      setPeliculaState(pelicula)
      
      //Actualizar estado del listado principal
      setListadoState(elementos => {
        return [...elementos, pelicula]
      })

      //Guardar informacion (LocalStorage)
      GuardarStorage("peliculas",pelicula);

    }
    

    
  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
    <strong>
      {(titulo && descripcion) && "Has creado la pelicula: "+titulo}
    </strong>

      <form onSubmit={datosForm}>

        <input type="text" id="titulo" name='titulo' placeholder="Titulo" />

        <textarea id="descripcion" name='descripcion' placeholder="Descripción"></textarea>
        
        <input type="submit" id="save" value="Guardar" />

      </form>
    </div>
  );
}

export default Crear