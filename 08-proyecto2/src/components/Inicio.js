import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy Daniel Castrillon y soy desarollador web en Medellin, ofrezco mis servicios de
        <strong> programacion y desarrollo</strong> en todo tipo de proyectos web.
      </h1>
      <h2>
        Te ayudo a crear tu sitio o aplicacion web, tener mas visivilidad y relevancia en internet. <Link to={'/contacto'}>Contacta conmigo.</Link>
      </h2>
      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>
          Estos son algunos de mis trabajos de desarrollo.
        </p>
        <div className='works'>

        </div>

      </section>
    </div>
  )
}

export default Inicio
