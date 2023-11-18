import React, { useEffect, useState } from 'react'
import { Mesagge } from './Mesagge';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: 'Daniel',
        email: 'danielcastrillon0528@gmail.com'
    })

    const {userName, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    //USEEFECT - ES MEJOR PEQUEÑAS FUNCIONES QUE UNA GRANDE QUE HAGA TODO
    useEffect(() => {
      //console.log('UseEffect llamado!!');
    }, [])

    useEffect(() => {
        //console.log('Formulario renderizado!!');
      }, [formState])

    useEffect(() => {
        //console.log('Email Change!!');
    }, [email])
    


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
            placeholder='Correo@electronico.com'
            value={email}
            onChange={onInputChange}
            />

        {
            userName === 'DanielC' && <Mesagge/>
        }
    </>
  )
}
