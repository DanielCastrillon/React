import React from 'react'

export const TodoItme = ({todo, onDeleteTodo}) => {
  return (
    <>
        <li value={todo.description} className='list-group-item d-flex justify-content-between'>
            <span className='align-self-center'>{todo.description}</span>
            <button className='btn btn-outline-danger' onClick={()=>onDeleteTodo(todo.id)}>
                    Borrar
            </button>
         </li>
    </>
  )
}
