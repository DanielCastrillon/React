import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Persona = () => {
  //let {nombre= "Daniel", apellido = "Castrillon"} = useParams();//Use params recibe los parametros de la url
  //console.log(parametros); //Antes de la destructuracion llega estaba como parametros
  const {nombre, apellido} = useParams();
  const navegar = useNavigate();
  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    let url = `/persona/${nombre}/${apellido}` //Control + Alt + }

    let lenguaje = window.navigator.language;
    console.log(lenguaje.substr(0,2));


    if (nombre.length <= 0 || apellido.length <= 0) {
      navegar('/inicio');
    }else if(nombre === 'contacto'){
      navegar('/contacto');
    }  else{
      navegar(url);
    }

  }

  return (
    <div>
        {/* 
      <h2>Persona: {nombre} {apellido}</h2>
      <p>Pagina de personanas, contenido de personas</p>
       */}
       {!nombre && <h1>No hay nombre para mostrar</h1>}
       {nombre && <h2>Persona: {nombre} {apellido}</h2>}
       <p>Pagina de personanas, contenido de personas</p>
       <form onSubmit={enviar}>
        <input type='text' name='nombre' placeholder='Nombre'></input>
        <input type='text' name='apellido' placeholder='Apellido'></input>
        <input type='submit' name='enviado' value={'Enviar'}></input>
       </form>
    </div>
  )
}

export default Persona
