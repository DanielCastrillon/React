import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h2>Erro 404 - Esta pagino no existe</h2>
      <p>Ha fallado algo</p>
      <Link to={'/inicio'}>Volver al Inicio</Link>
    </div>
  )
}

export default Error
