import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

export const TodoApp = () => {

    const initialState = [
        /* 
        {
            id: new Date().getTime(),
            description: 'Recolectar la piedra del alma',
            done: false
        }
        ,{
            id: new Date().getTime() * 3,
            description: 'Recolectar la piedra del tiempo',
            done: false
        }
         */
    ];

    const init = () => {
        //SI EL LOCAL STORAGE ESTA VACION ENTONCES UN ARREGLO VACIO
        return JSON.parse(localStorage.getItem('todos')) || [];
    }


    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ))

    
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        //console.log(id);

        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
         
    }


  return (
    <>
        <h1>Todo APP (10) <small>Pendientes: (2)</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todo={todos} onDeleteTodo={ handleDeleteTodo }/>               
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* COMPONENTE TODO ADD ONNEWTODO*/}
                <TodoAdd onNewTodo={handleNewTodo}/>
                {/* FIN FORMULARIO */}
            </div>
        </div>

    </>
  )
}
