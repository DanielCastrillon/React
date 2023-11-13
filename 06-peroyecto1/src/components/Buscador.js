import React, { useState } from 'react'

const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPelicula = (e) => {
    //Crear estado y actualizarlo
    setBusqueda(e.target.value)
    console.log(busqueda);

    //Listado completo de peliculas es lo que se recibe en las props

    //Filtar para buscar la coincidencia
    let peliculas_encontradas = listadoState.filter(pelicula => {
      return pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    //Comprobar si hay resultado
    if (busqueda.length <= 1 || peliculas_encontradas <= 0) {
      peliculas_encontradas = JSON.parse(localStorage.getItem('peliculas'));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false)
    }
    //Actualizar el estado del listado principal con lo filtrado
    setListadoState(peliculas_encontradas);

  }
  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>

      {(noEncontrado && busqueda.length > 1) && <span>No encontrado</span>}

      <form>
        <input 
          type="text" 
          id="search_field" 
          name='busqueda' 
          autoComplete='off' 
          onChange={buscarPelicula}/>
        <button id="search">Buscar</button>
      </form>
    </div>
  );
}

export default Buscador