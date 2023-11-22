import React from 'react'
import { TodoItme } from './TodoItme'

export const TodoList = ({todo = [], onDeleteTodo}) => {

  console.log(todo);


  return (
    <>
        <ul className='list-group'>
            {
              todo.map( todo => (
                  <TodoItme key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo}/>
                ))
            }
        </ul>
    </>
  )
}
