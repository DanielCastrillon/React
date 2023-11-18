import React from 'react'

export const Quote = ({counter, data}) => {
  return (
    <>
        <h2>ID: {counter}</h2>
        <h3>Nombre: {data.name}</h3>
        <h2>Peso: {data.weight}</h2>
        <h2>Movimientos: {data.moves.length}</h2>
        <blockquote className='blockquote text-end'>
            <p className='mb-1'>Hola mundo!!</p>
            <footer className='blockquote-footer'>Daniel</footer>
        </blockquote>
    </>
  )
}
