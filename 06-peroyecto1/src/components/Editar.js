import React from 'react'

const Editar = ({pelicula, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componente = 'Editar pelicula';

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        //Consegur el target del evento
        let target = e.target;

        //Buscar el indice de la pelicula a actualizar
        const peliculas_almacenadas = conseguirPeliculas();
        const indice = peliculas_almacenadas.findIndex(pelicula => pelicula.id === id);

        //Crear objeto con ese indice
        let pelicula_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }
        //Actualiar el elemento con ese indice
        peliculas_almacenadas[indice] = pelicula_actualizada;

        //Guardar el nuevo array en el local
        localStorage.setItem("peliculas", JSON.stringify(peliculas_almacenadas));

        //Actualizar estados
        setListadoState(peliculas_almacenadas);
        setEditar(0);

    }
  return (
    <div className='edit-form'>
        <hr></hr>
        <h3 className='title'>{titulo_componente}</h3>
        <form style={{display: 'grid'}} onSubmit={e => guardarEdicion(e, pelicula.id)}>
            <input 
                type='text'
                name='titulo'
                className='titulo_editado'
                defaultValue={pelicula.titulo}>
            </input>
            <textarea 
                name='descripcion'
                defaultValue={pelicula.descripcion}
                className='descripcion_editada'>

            </textarea>

            <input type='submit' className='editar' value={'Actualizar'}></input>
        </form>

    </div>
  )
}

export default Editar