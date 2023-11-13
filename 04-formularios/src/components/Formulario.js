import React, { useState } from 'react'

const Formulario = () => {

  const [usuario, setUsuario] = useState({})

  const datosForm = (e) =>{
    e.preventDefault();
    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
      enviar: datos.enviar.name
    }

    console.log(usuario);
    setUsuario(usuario)
  }

  const cambiarDatos = (e)=>{
    let name_del_input = e.target.name;
    let usuario_para_modificar = usuario;

    setUsuario(estado_previo => ({
            ...estado_previo,
            [name_del_input]: e.target.value
          })
    )
    console.log(usuario_para_modificar);
  }

  return (
    <div>
        <h1>Formularios con React</h1>
        { usuario.enviar &&
          (
            <div>
              <p>{usuario.nombre} {usuario.apellido}</p>
              <p>Sexo: {usuario.genero}</p>
              <p>{usuario.bio}</p>
            </div>
          )
        }

        <form onSubmit={datosForm}>
            <input 
              type='text' 
              placeholder='Nombre'
              name='nombre' 
              onChange={cambiarDatos}>
            </input>

            <input 
              type='text' 
              placeholder='Apellido' 
              name='apellido'
              onChange={cambiarDatos}>
            </input>

            <select name='genero' onChange={cambiarDatos}>
                <option value='hombre' defaultValue={'hombre'}>Hombre</option>
                <option value='mujer'>Mujer</option>
            </select>

            <textarea 
              placeholder='Biografia' 
              name='bio'
              onChange={cambiarDatos}>
            </textarea>
            <input type='submit' name='enviar'></input>
        </form>
    </div>
  )
}

export default Formulario