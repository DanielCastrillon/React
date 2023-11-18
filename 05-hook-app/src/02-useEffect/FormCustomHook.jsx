import React from 'react'
import { Mesagge } from './Mesagge';
//import { useForm } from '../hooks/useForm';
import { useForm } from '../hooks';

export const FormCustomHook = () => {

    const {formState, onInputChange, onResetForm, userName, email, password} = useForm({
        userName: '',
        email: '',
        password: ''
    })

    //const {userName, email, password} = formState;

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input 
            type="text" 
            name="userName" 
            id="userName"
            className='form-control'
            placeholder='Nombre de usuario'
            value={userName}
            onChange={onInputChange}
            />

        <input 
            type="email" 
            name="email" 
            id="email"
            className='form-control mt-2'
            placeholder='Correo electronico'
            value={email}
            onChange={onInputChange}
            />

        <input 
            type="password" 
            name="password" 
            id="password"
            className='form-control mt-2'
            placeholder='Contraseña'
            value={password}
            onChange={onInputChange}
            />

        <button onClick={ onResetForm } className='btn btn-primary mt-2'>Borrar</button>

        {
            userName === 'DanielC' && <Mesagge/>
        }
    </>
  )
}
