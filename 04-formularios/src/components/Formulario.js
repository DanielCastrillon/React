import React from 'react'

const Formulario = () => {
  return (
    <div>
        <h1>Formularios con React</h1>
        <form>
            <input type='text' placeholder='Nombre' ></input>
            <input type='text' placeholder='Apellido' ></input>
            <select>
                <option value='hombre'>Hombre</option>
                <option value='mujer'>Mujer</option>
            </select>
            <textarea placeholder='Biografia'></textarea>
            <input type='submit' ></input>
        </form>
    </div>
  )
}

export default Formulario