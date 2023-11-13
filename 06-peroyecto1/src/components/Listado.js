import React, { useEffect, useState } from 'react'
import Editar from './Editar';

const Listado = ({listadoState, setListadoState}) => {
  const [editar, setEditar] = useState(0);

  useEffect(()=>{
    conseguirPeliculas()
  }, [])

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('peliculas'));
    setListadoState(peliculas);
    return peliculas;
  }

  const borrarPelicula = (id) => {
    console.log(id);
    //Conseguir peliculas almacendas
    let peliculas_almacenadas = conseguirPeliculas();

    //Filtrar pelicula en el array
    let nuevo_listado_peliculas = peliculas_almacenadas.filter(pelicula => pelicula.id !== parseInt(id));

    //Actualizar el estado del listado
    setListadoState(nuevo_listado_peliculas);

    //Actualizar los datos en el localstorage
    localStorage.setItem('peliculas',JSON.stringify(nuevo_listado_peliculas));
  }

  return (
    <>
      {/* <!--aqui van las peliculas--> */}
      {listadoState != null ? 
          listadoState.map((pelicula ) => {
            return(
            <article key={pelicula.id} className="peli-item">
                <h3 className="title">{pelicula.titulo}</h3>
                <p className="description">{pelicula.descripcion}</p>

                <button className="edit" onClick={() => setEditar(pelicula.id)}>Editar</button>
                <button className="delete" onClick={() => borrarPelicula(pelicula.id)}>Borrar</button>
            
                {/* FORMULARIO DE EDICION */}
                {editar === pelicula.id && (
                  <Editar 
                    pelicula={pelicula} 
                    conseguirPeliculas={conseguirPeliculas}
                    setEditar={setEditar}
                    setListadoState={setListadoState}>
                  </Editar>
                )}

            </article>
            );
          }
          ):(
            <h2>No hay peliculas para mostrar</h2>
          )
        
        }
    </>
  )
}

export default Listado