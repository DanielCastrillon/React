import React from 'react'

const Contacto = () => {
  return (
    <div>
       <div className='page'>
      <h2>Contacto</h2>
      <form className='contact'>
      <input type='text' placeholder='Nombre'></input>
      <input type='text' placeholder='Apellido'></input>
      <input type='text' placeholder='Email'></input>
      <textarea placeholder='Motivo de contacto'></textarea>
      <input type='submit' value={'Enviar'}></input>
      </form>

    </div>
    </div>
  )
}

export default Contacto
